import { Model, Table, Column, DataType } from 'sequelize-typescript'

export interface engWordsCreationAttr {
  word: string
  translate: string
  ch: number
}

@Table({ tableName: 'engWords' })
export class engWords extends Model<engWords, engWordsCreationAttr> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true
  })
  id: number
  @Column({ type: DataType.STRING, allowNull: false, unique: true })
  word: string
  @Column({ type: DataType.STRING, allowNull: false })
  translate: string
  @Column({ type: DataType.BOOLEAN, defaultValue: false })
  remember: boolean
  @Column({ type: DataType.INTEGER, allowNull: false })
  ch: number
}
