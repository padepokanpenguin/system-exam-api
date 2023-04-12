import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema, rules } from '@ioc:Adonis/Core/Validator'
import { ResponseError } from 'App/Exceptions/ResponseError'
import Question from 'App/Models/Question'
import { shuffleArray } from 'App/lib/helper'

export default class QuestionsController {
  public async index({ response, params }: HttpContextContract) {
    try {
      const { question_bank_id: questionBankId } = params
      const data = await Question.query()
        .select(
          'id',
          'question_bank_id',
          'question',
          'a',
          'b',
          'c',
          'd',
          'e',
          'is_public',
          'answer_key'
        )
        .preload('questionBank')
        .where('questionBankId', questionBankId)

      shuffleArray(data)
      response.ok({ message: 'Berhasil mengambil data Soal', data })
    } catch (error) {
      ResponseError.handler(error, response, 'Question Co ln:18')
    }
  }

  public async store({ request, response, params, auth }: HttpContextContract) {
    try {
      const { question_bank_id: questionBankId } = params

      const payload = await request.validate({
        schema: schema.create({
          question: schema.string([rules.trim(), rules.alphaNum({ allow: ['space'] })]),
          a: schema.string([rules.trim(), rules.alphaNum({ allow: ['space'] })]),
          b: schema.string([rules.trim(), rules.alphaNum({ allow: ['space'] })]),
          c: schema.string([rules.trim(), rules.alphaNum({ allow: ['space'] })]),
          d: schema.string([rules.trim(), rules.alphaNum({ allow: ['space'] })]),
          e: schema.string([rules.trim(), rules.alphaNum({ allow: ['space'] })]),
          isPublic: schema.boolean(),
          answerKey: schema.string([rules.trim(), rules.alphaNum({ allow: ['space'] })]),
        }),
      })

      const data = await Question.create({ ...payload, questionBankId, userId: auth.user!.id })

      response.ok({ message: 'Berhasil menambahkan data soal', data })
    } catch (error) {
      ResponseError.handler(error, response, 'Question Co ln:48')
    }
  }

  public async show({ response, params }: HttpContextContract) {
    try {
      const { id } = params

      const data = await Question.query().where('id', id).firstOrFail()

      response.ok({ message: 'Berhasil mengambil detail soal', data })
    } catch (error) {
      ResponseError.handler(error, response, 'Question Co ln:68')
    }
  }

  public async update({ request, response, params }: HttpContextContract) {
    try {
      const { id } = params

      const payload = await request.validate({
        schema: schema.create({
          question: schema.string.optional([rules.trim(), rules.alphaNum({ allow: ['space'] })]),
          a: schema.string.optional([rules.trim(), rules.alphaNum({ allow: ['space'] })]),
          b: schema.string.optional([rules.trim(), rules.alphaNum({ allow: ['space'] })]),
          c: schema.string.optional([rules.trim(), rules.alphaNum({ allow: ['space'] })]),
          d: schema.string.optional([rules.trim(), rules.alphaNum({ allow: ['space'] })]),
          e: schema.string.optional([rules.trim(), rules.alphaNum({ allow: ['space'] })]),
          isPublic: schema.boolean.optional(),
          answerKey: schema.string.optional([rules.trim(), rules.alphaNum({ allow: ['space'] })]),
        }),
      })

      const data = await Question.query().where('id', id).firstOrFail()
      await data.merge(payload).save()

      response.ok({ message: 'Berhasil memperbarui data soal', data })
    } catch (error) {
      ResponseError.handler(error, response, 'Question Co ln:78')
    }
  }

  public async destroy({ response, params }: HttpContextContract) {
    try {
      const { id } = params

      const data = await Question.query().where('id', id).firstOrFail()
      await data.delete()

      response.ok({ message: 'Berhasil menghapus data soal' })
    } catch (error) {
      ResponseError.handler(error, response, 'Question Co ln:105')
    }
  }
}
