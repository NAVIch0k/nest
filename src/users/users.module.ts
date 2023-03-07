import { Users } from './entities/user.entity'
import { SequelizeModule } from '@nestjs/sequelize'
import { Sessions } from './entities/sessions.entity'
import { Module } from '@nestjs/common'
import { UsersService } from './users.service'
import { UsersController } from './users.controller'

@Module({
  imports: [SequelizeModule.forFeature([Sessions, Users])],
  controllers: [UsersController],
  providers: [UsersService]
})
export class UsersModule {}
