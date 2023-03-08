import { Users } from './entities/user.entity'
import { InjectModel } from '@nestjs/sequelize'
import { Injectable } from '@nestjs/common'
import { UserDto } from './dto/user.dto'
import { Sessions } from './entities/sessions.entity'
import { compareSync } from 'bcrypt'
import { sign } from 'jsonwebtoken'

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(Users) private usersRepository: typeof Users,
    @InjectModel(Sessions) private sessionsRepository: typeof Sessions
  ) {}

  async create(user: UserDto) {
    return this.usersRepository.create(user)
  }

  async login(data: UserDto) {
    const user = await this.usersRepository.findOne({
      where: { email: data.email }
    })
    if (!user) return { message: 'User not found' }
    const isPassEquels = compareSync(data.password, user.password)
    if (!isPassEquels) return { message: 'Password or login incorrect' }
    const token = sign({ email: data.email }, process.env.ACCESS_TOKEN, { expiresIn: 60 })
    const refToken = sign({ email: data.email }, process.env.REFRESH_TOKEN, {
      expiresIn: '24h'
    })
    const session = await this.sessionsRepository.findOne({
      where: { userId: user.id }
    })
    if (session) {
      session.refresh = refToken
      session.save()
    } else {
      await this.sessionsRepository.create({
        refresh: refToken,
        userId: user.id
      })
    }
    return { token }
  }

  async remove(id: number) {
    return `This action removes a #${id} user`
  }

  async refresh(id: number) {
    return `This action removes a #${id} user`
  }
}
