import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, HasMany, belongsTo, column, hasMany } from '@ioc:Adonis/Lucid/Orm'
import Class from './Class'
import User from './User'
import ExamQuestion from './ExamQuestion'

export default class Exam extends BaseModel {
  @column({ isPrimary: true })
  public id: string

  @column()
  public classId: string

  @belongsTo(() => Class)
  public classes: BelongsTo<typeof Class>

  @column()
  public trainerId: string

  @belongsTo(() => User, {
    foreignKey: 'trainerId',
  })
  public trainer: BelongsTo<typeof User>

  @hasMany(() => ExamQuestion)
  public examQuestion: HasMany<typeof ExamQuestion>

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
