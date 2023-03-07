import { Controller, Post, Body, Param, Delete } from '@nestjs/common'
import { UsersService } from './users.service'
import { UserDto } from './dto/user.dto'

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() User: UserDto) {
    return this.usersService.create(User)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id)
  }

  @Post('/login')
  login(@Body() User: UserDto) {
    return this.usersService.login(User)
  }
}
