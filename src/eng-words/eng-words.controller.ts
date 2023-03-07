import { EngWordsService } from './eng-words.service'
import { Controller } from '@nestjs/common'
import { Body, Get, Put } from '@nestjs/common'

@Controller('engWords')
export class EngWordsController {
  constructor(private engWordsServices: EngWordsService) {}

  @Get()
  async getEngWords() {
    return await this.engWordsServices.getAllWordsCollection()
  }

  @Put()
  async toggleRemember(@Body() { id }: { id: number }) {
    return await this.engWordsServices.toggleRemember(id)
  }
}
