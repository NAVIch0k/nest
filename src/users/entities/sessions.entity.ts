import { Table, Model, Column, DataType } from 'sequelize-typescript'

@Table({ tableName: 'sessions' })
export class Sessions extends Model<Sessions> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true
  })
  id: number
  @Column({
    type: DataType.INTEGER,
    unique: true,
    allowNull: false
  })
  userId: number
  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: false
  })
  refresh: string
}
