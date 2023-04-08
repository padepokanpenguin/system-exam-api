import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class ExamRecord extends BaseModel {
  @column({ isPrimary: true })
  public id: string

  @column()
  public userId: string

  @column()
  public examId: string

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
