import { Users } from './entities/user.entity'
import { InjectModel } from '@nestjs/sequelize'
import { Injectable } from '@nestjs/common'
import { UserDto } from './dto/user.dto'
import { Sessions } from './entities/sessions.entity'

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(Users) private usersRepository: typeof Users,
    @InjectModel(Sessions) private sessionsRepository: typeof Sessions
  ) {}

  async create(user: UserDto) {
    console.log(user);
    
    return this.usersRepository.create(user)
  }

  async login(user: UserDto) {
    return `This action returns a #${user.id} user`
  }

  async remove(id: number) {
    return `This action removes a #${id} user`
  }

  async refresh(id: number) {
    return `This action removes a #${id} user`
  }
}
