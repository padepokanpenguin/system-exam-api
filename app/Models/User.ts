import { DateTime } from 'luxon'
import Hash from '@ioc:Adonis/Core/Hash'
import {
  column,
  beforeSave,
  BaseModel,
  hasMany,
  HasMany,
  manyToMany,
  ManyToMany,
  belongsTo,
  BelongsTo,
} from '@ioc:Adonis/Lucid/Orm'
import JwtToken from './JwtToken'
import Class from './Class'

export default class User extends BaseModel {
  @column({ isPrimary: true })
  public id: string

  @column()
  public kelas_id: string

  @belongsTo(() => Class)
  public class: BelongsTo<typeof Class>

  @column()
  public nomorInduk: string

  @column()
  public name: string

  @manyToMany(() => Class, {
    pivotTable: 'trainer_class',
    pivotForeignKey: 'user_id',
  })
  public classes: ManyToMany<typeof Class>

  @column()
  public email: string

  @column({ serializeAs: null })
  public password: string

  @column({ serializeAs: null })
  public emailVerificationToken: string | null

  @column()
  public roles: string

  @column()
  public isVerified: boolean = false

  @column()
  public rememberMeToken: string | null

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @hasMany(() => JwtToken)
  public jwtTokens: HasMany<typeof JwtToken>

  @beforeSave()
  public static async hashPassword(user: User) {
    if (user.$dirty.password) {
      user.password = await Hash.make(user.password)
    }
  }
}
