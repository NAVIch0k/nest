import { jwtGuards } from './../guards/jwt-guards'
import {
  Controller,
  Post,
  Body,
  Param,
  Delete,
  UseGuards,
  Request
} from '@nestjs/common'
import { UsersService } from './users.service'
import { UserDto } from './dto/user.dto'

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @UseGuards(jwtGuards)
  @Post()
  create(@Body() User: UserDto) {
    return this.usersService.create(User)
  }

  @UseGuards(jwtGuards)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id)
  }

  @Post('/login')
  login(@Body() User: UserDto) {
    return this.usersService.login(User)
  }

  @UseGuards(jwtGuards)
  @Post('/refresh')
  refresh(@Body() { refresh }: { refresh: string }, @Request() req) {
    return this.usersService.refresh({
      refresh,
      id: req.user.id,
      email: req.user.email
    })
  }
}
