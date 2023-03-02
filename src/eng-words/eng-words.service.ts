import { engWords } from './eng-words.model'
import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/sequelize'

@Injectable()
export class EngWordsService {
  constructor(
    @InjectModel(engWords) private engWordsRepository: typeof engWords
  ) {}

  async getAllWordsCollection() {
    const users = await this.engWordsRepository.findAll({
      attributes: { exclude: ['createdAt', 'updatedAt'] }
    })

    return users
  }
}
