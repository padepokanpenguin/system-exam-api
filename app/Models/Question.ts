import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Question extends BaseModel {
  @column({ isPrimary: true })
  public id: string

  @column()
  public userId: string

  @column()
  public questionBankId: string

  @column()
  public isPublic: boolean = false

  @column()
  public question: string

  @column()
  public a: string

  @column()
  public b: string

  @column()
  public c: string

  @column()
  public d: string

  @column()
  public e: string

  @column()
  public answerKey: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
