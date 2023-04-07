import { DateTime } from 'luxon'
import { BaseModel, ManyToMany, column, manyToMany } from '@ioc:Adonis/Lucid/Orm'
import User from './User'

export default class Class extends BaseModel {
  @column({ isPrimary: true })
  public id: string

  @column()
  public className: string

  @column()
  public classCode: string

  @manyToMany(() => User, {
    onQuery(query) {
      query.where('roles', 'trainer')
    },
    pivotTable: 'trainer_classes',
    pivotForeignKey: 'class_id',
  })
  public users: ManyToMany<typeof User>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
