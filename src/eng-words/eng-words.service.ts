import { engWords, engWordsCreationAttr } from './eng-words.model'
import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/sequelize'

@Injectable()
export class EngWordsService {
  constructor(
    @InjectModel(engWords) private engWordsRepository: typeof engWords
  ) {}

  async getAllWordsCollection() {
    const users = await this.engWordsRepository.findAll({
      attributes: { exclude: ['createdAt', 'updatedAt'] },
      order: [['id', 'ASC']]
    })

    return users
  }

  async toggleRemember(id: number) {
    const word = await this.engWordsRepository.findOne({ where: { id } })
    word.remember = !word.remember
    await word.save()
  }

  async addWords(data: engWordsCreationAttr) {
    const { dataValues } = await this.engWordsRepository.create(data)
    const { createdAt, updatedAt, ...newData } = dataValues
    console.log(newData)
    return newData
  }
}
