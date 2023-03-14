import { jwtGuards } from './../guards/jwt-guards'
import { engWordsCreationAttr } from './eng-words.model'
import { EngWordsService } from './eng-words.service'
import { Controller, UseGuards } from '@nestjs/common'
import { Body, Get, Put, Post } from '@nestjs/common'

@Controller('engWords')
export class EngWordsController {
  constructor(private engWordsServices: EngWordsService) {}

  @UseGuards(jwtGuards)
  @Get()
  async getEngWords() {
    return await this.engWordsServices.getAllWordsCollection()
  }

  @UseGuards(jwtGuards)
  @Put()
  async toggleRemember(@Body() { id }: { id: number }) {
    return await this.engWordsServices.toggleRemember(id)
  }
  
  @UseGuards(jwtGuards)
  @Post()
  async addWords(@Body() data: engWordsCreationAttr) {
    return await this.engWordsServices.addWords(data)
  }
}
