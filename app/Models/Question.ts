import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import QuestionBank from './QuestionBank'
import User from './User'

export default class Question extends BaseModel {
  @column({ isPrimary: true })
  public id: string

  @column()
  public userId: string

  @belongsTo(() => User)
  public trainer: BelongsTo<typeof User>

  @column()
  public questionBankId: string

  @belongsTo(() => QuestionBank)
  public questionBank: BelongsTo<typeof QuestionBank>

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
