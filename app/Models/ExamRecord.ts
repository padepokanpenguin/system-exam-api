import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import User from './User'
import Exam from './Exam'

export default class ExamRecord extends BaseModel {
  @column({ isPrimary: true })
  public id: string

  @column()
  public userId: string

  @belongsTo(() => User)
  public participant: BelongsTo<typeof User>

  @column()
  public examId: string

  @belongsTo(() => Exam)
  public exam: BelongsTo<typeof Exam>

  @column()
  public result: number

  @column.dateTime()
  public submitTime: DateTime

  @column.dateTime()
  public startTime: DateTime

  @column.dateTime()
  public endTime: DateTime

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
