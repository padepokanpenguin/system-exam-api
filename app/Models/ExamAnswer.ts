import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import User from './User'
import ExamQuestion from './ExamQuestion'

export default class ExamAnswer extends BaseModel {
  @column({ isPrimary: true })
  public id: string

  @column()
  public userId: string

  @belongsTo(() => User)
  public participants: BelongsTo<typeof User>

  @column()
  public examQuestionId: string

  @belongsTo(() => ExamQuestion)
  public examQuestion: BelongsTo<typeof ExamQuestion>

  @column()
  public answer: string

  @column()
  public isRagu: boolean = false

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
