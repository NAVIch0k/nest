import { UserDto } from '../dto/user.dto'
import {
  Table,
  Model,
  Column,
  DataType,
  BeforeCreate
} from 'sequelize-typescript'
import { hashSync, genSaltSync } from 'bcrypt'

@Table({ tableName: 'users' })
export class Users extends Model<Users, UserDto> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true
  })
  id: number

  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: true
  })
  email: string
  
  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  password: string
  @BeforeCreate
  static hashPassword(instance: Users) {
    instance.dataValues.password = hashSync(instance.dataValues.password, genSaltSync(5))
  }
}
