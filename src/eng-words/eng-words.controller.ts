import { EngWordsService } from './eng-words.service'
import { Controller } from '@nestjs/common'
import { Get } from '@nestjs/common/decorators'

@Controller('engWords')
export class EngWordsController {
  constructor(private engWordsServices: EngWordsService) {}

  @Get()
  async getEngWords() {
    return await this.engWordsServices.getAllWordsCollection()
  }
}
