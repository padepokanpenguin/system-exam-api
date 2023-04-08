import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import Class from './Class'
import User from './User'

export default class Exam extends BaseModel {
  @column({ isPrimary: true })
  public id: string

  @column()
  public classId: string

  @belongsTo(() => Class)
  public classes: BelongsTo<typeof Class>

  @column()
  public participantId: string

  @belongsTo(() => User, {
    foreignKey: 'participantId',
  })
  public participants: BelongsTo<typeof User>

  @column()
  public name: string

  @column.dateTime()
  public startTime: DateTime

  @column.dateTime()
  public endTime: DateTime

  @column()
  public duration: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
