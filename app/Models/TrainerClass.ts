import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import User from './User'
import Class from './Class'

export default class TrainerClass extends BaseModel {
  @column({ isPrimary: true })
  public id: string

  @column()
  public trainerId: string

  @column()
  public classId: string

  @belongsTo(() => User)
  public users: BelongsTo<typeof User>

  @belongsTo(() => Class)
  public classes: BelongsTo<typeof Class>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
