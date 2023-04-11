import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema, rules } from '@ioc:Adonis/Core/Validator'
import { ResponseError } from 'App/Exceptions/ResponseError'
import ExamAnswer from 'App/Models/ExamAnswer'

export default class ExamAnswersController {
  public async index({ response, params }: HttpContextContract) {
    try {
      const { user_id: userId } = params

      const data = await ExamAnswer.query().where('userId', userId)

      response.ok({ message: 'Berhasil mengambil data Jawaban Ujian', data })
    } catch (error) {
      ResponseError.handler(error, response, 'Exam Answer Co ln:17')
    }
  }

  public async store({ request, response, params }: HttpContextContract) {
    try {
      const { user_id: userId } = params

      const payload = await request.validate({
        schema: schema.create({
          examQuestionId: schema.string([rules.trim(), rules.uuid({ version: 4 })]),
          answer: schema.string([rules.trim()]),
          isRagu: schema.boolean(),
        }),
      })

      const data = await ExamAnswer.create({ ...payload, userId })

      response.ok({ message: 'Berhasil membuat data jawaban ujian', data })
    } catch (error) {
      ResponseError.handler(error, response, 'Exam Answer Co ln:35')
    }
  }

  public async show({ params, response }: HttpContextContract) {
    try {
      const { id } = params

      const data = await ExamAnswer.query().where('id', id)

      response.ok({ message: 'Berhasil mengambil data detail jawaban ujian', data })
    } catch (error) {
      ResponseError.handler(error, response, 'Exam Answer Co ln:17')
    }
  }

  public async update({ request, response, params }: HttpContextContract) {
    try {
      const { id } = params

      const payload = await request.validate({
        schema: schema.create({
          examQuestionId: schema.string.optional([rules.trim(), rules.uuid({ version: 4 })]),
          answer: schema.string.optional([rules.trim()]),
          isRagu: schema.boolean.optional(),
        }),
      })

      const data = await ExamAnswer.findByOrFail('id', id)

      await data.merge(payload).save()

      response.ok({ message: 'Berhasil memperbarui data ', data })
    } catch (error) {
      ResponseError.handler(error, response, 'Exam Answer Co ln:17')
    }
  }

  public async destroy({ response, params }: HttpContextContract) {
    try {
      const { id } = params

      const data = await ExamAnswer.findByOrFail('id', id)

      await data.delete()

      response.ok({ message: 'Berhasil menghapus data jawaban ujian ' })
    } catch (error) {
      ResponseError.handler(error, response, 'Exam Answer Co ln:83')
    }
  }
}
