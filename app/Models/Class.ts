import { DateTime } from 'luxon'
import { BaseModel, HasMany, ManyToMany, column, hasMany, manyToMany } from '@ioc:Adonis/Lucid/Orm'
import User from './User'

export default class Class extends BaseModel {
  @column({ isPrimary: true })
  public id: string

  @column()
  public name: string

  @column()
  public code: string

  @manyToMany(() => User, {
    pivotTable: 'trainer_classes',
    pivotForeignKey: 'class_id',
  })
  public users: ManyToMany<typeof User>

  @hasMany(() => User)
  public user: HasMany<typeof User>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
