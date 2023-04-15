import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, HasMany, belongsTo, column, hasMany } from '@ioc:Adonis/Lucid/Orm'
import Exam from './Exam'
import Question from './Question'
import ExamAnswer from './ExamAnswer'

export default class ExamQuestion extends BaseModel {
  @column({ isPrimary: true })
  public id: string

  @column()
  public examId: string

  @belongsTo(() => Exam)
  public exams: BelongsTo<typeof Exam>

  @column()
  public questionId: string

  @belongsTo(() => Question)
  public questions: BelongsTo<typeof Question>

  @hasMany(() => ExamAnswer)
  public examAnswer: HasMany<typeof ExamAnswer>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
