import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema, rules } from '@ioc:Adonis/Core/Validator'
import { ResponseError } from 'App/Exceptions/ResponseError'
import ExamQuestion from 'App/Models/ExamQuestion'
import Question from 'App/Models/Question'
import { shuffleArray } from 'App/lib/helper'

export default class ExamQuestionsController {
  public async index({ response, params }: HttpContextContract) {
    try {
      const { exam_id: examId } = params

      const data = await ExamQuestion.query()
        .where('examId', examId)
        .preload('questions')
        .preload('exams')

      shuffleArray(data)

      response.ok({ message: 'Berhasil mengambil data soal ujian', data })
    } catch (error) {
      ResponseError.handler(error, response, 'Exam Question Co ln:17')
    }
  }

  public async store({ request, response, params, auth }: HttpContextContract) {
    try {
      const { exam_id: examId } = params

      const { questionId } = await request.validate({
        schema: schema.create({
          questionId: schema.string([rules.trim(), rules.uuid({ version: 4 })]),
        }),
      })
      const question = await Question.query()
        .preload('trainer')
        .where('id', questionId)
        .firstOrFail()

      if (question.trainer.id !== auth.user!.id && !question.isPublic) {
        return response.badRequest({ message: 'Anda tidak memiliki akses ke soal ini' })
      }

      const data = await ExamQuestion.create({ examId, questionId })

      response.ok({ message: 'Berhasil menambahkan data soal ujian', data })
    } catch (error) {
      ResponseError.handler(error, response, 'Exam Question Co ln:42')
    }
  }

  public async show({ response, params }: HttpContextContract) {
    try {
      const { id } = params

      const data = await ExamQuestion.query()
        .where('id', id)
        .preload('exams')
        .preload('questions')
        .firstOrFail()

      response.ok({ message: 'Berhasil mengambil data detail soal ujian', data })
    } catch (error) {
      ResponseError.handler(error, response, 'Exam Question Co ln:54')
    }
  }

  public async update({ request, response, params }: HttpContextContract) {
    try {
      const { id } = params

      const { questionId } = await request.validate({
        schema: schema.create({
          questionId: schema.string([rules.trim(), rules.uuid({ version: 4 })]),
        }),
      })

      const data = await ExamQuestion.findByOrFail('id', id)
      await data.merge({ questionId }).save()

      response.ok({ message: 'Berhasil memperbarui data soal ujian', data })
    } catch (error) {
      ResponseError.handler(error, response, 'Exam Question Co ln:73')
    }
  }

  public async destroy({ response, params }: HttpContextContract) {
    try {
      const { id } = params

      const data = await ExamQuestion.findByOrFail('id', id)
      await data.delete()

      response.ok({ message: 'Berhasil menghapus data soal ujian' })
    } catch (error) {
      ResponseError.handler(error, response, 'Exam Question Co ln:86')
    }
  }
}
