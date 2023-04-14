import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema } from '@ioc:Adonis/Core/Validator'
import { ResponseError } from 'App/Exceptions/ResponseError'
import QuestionBank from 'App/Models/QuestionBank'

export default class QuestionBanksController {
  public async index({ response }: HttpContextContract) {
    try {
      const data = await QuestionBank.query()

      response.ok({ message: 'Berhasil Mengambil data Bank Soal', data })
    } catch (error) {
      ResponseError.handler(error, response, 'Question Bank Co ln:18')
    }
  }

  public async store({ request, response }: HttpContextContract) {
    try {
      const payload = await request.validate({
        schema: schema.create({
          name: schema.string({ trim: true }),
        }),
      })
      const data = await QuestionBank.create(payload)

      response.ok({ message: 'Berhasil membuat data Bank Soal', data })
    } catch (error) {
      ResponseError.handler(error, response, 'Question Bank Co ln:28')
    }
  }

  public async show({ params, response }: HttpContextContract) {
    try {
      const { id } = params

      const data = await QuestionBank.query()
        .select('id', 'name')
        .preload('question', (q) =>
          q.select(
            'id',
            'question_bank_id',
            'question',
            'a',
            'b',
            'c',
            'd',
            'e',
            'answer_key',
            'is_public'
          )
        )
        .where('id', id)
        .firstOrFail()

      response.ok({ message: 'Berhasil mengambil data detail Bank Soal', data })
    } catch (error) {
      ResponseError.handler(error, response, 'Question Bank Co ln:42')
    }
  }

  public async update({ request, response, params }: HttpContextContract) {
    try {
      const { id } = params

      const payload = await request.validate({
        schema: schema.create({
          name: schema.string({ trim: true }),
        }),
      })

      const data = await QuestionBank.findByOrFail('id', id)
      await data.merge(payload).save()

      response.ok({ message: 'Berhasil memperbarui data Bank Soal', data })
    } catch (error) {
      ResponseError.handler(error, response, 'Question Bank Co ln:53')
    }
  }

  public async destroy({ response, params }: HttpContextContract) {
    try {
      const { id } = params

      const data = await QuestionBank.findByOrFail('id', id)
      await data.delete()

      response.ok({ message: 'Berhasil menghapus data bank soal' })
    } catch (error) {
      ResponseError.handler(error, response, 'Question Bank Co ln:70')
    }
  }
}
