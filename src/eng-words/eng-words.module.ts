import { engWords } from './eng-words.model';
import { SequelizeModule } from '@nestjs/sequelize';
import { Module } from '@nestjs/common';
import { EngWordsController } from './eng-words.controller';
import { EngWordsService } from './eng-words.service';

@Module({
  controllers: [EngWordsController],
  providers: [EngWordsService],
  imports:[
    SequelizeModule.forFeature([engWords])
  ]
})
export class EngWordsModule {}
