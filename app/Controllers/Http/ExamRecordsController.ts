import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema, rules } from '@ioc:Adonis/Core/Validator'
import { ResponseError } from 'App/Exceptions/ResponseError'
import Exam from 'App/Models/Exam'
import ExamAnswer from 'App/Models/ExamAnswer'

import ExamRecord from 'App/Models/ExamRecord'
import { DateTime } from 'luxon'

export default class ExamRecordsController {
  public async index({ response, params }: HttpContextContract) {
    try {
      const { exam_id: examId } = params

      const data = await ExamRecord.query().where('exam_id', examId)

      response.ok({ message: 'Berhasil mengambil data', data })
    } catch (error) {
      ResponseError.handler(error, response, 'Exam Record Co ln:17')
    }
  }

  public async store({ request, response, params }: HttpContextContract) {
    try {
      const { exam_id: examId } = params

      const payload = await request.validate({
        schema: schema.create({
          userId: schema.string([rules.trim(), rules.uuid({ version: 4 })]),
          submitTime: schema.date({ format: 'yyyy-MM-dd HH:mm:ss' }),
          startTime: schema.date({ format: 'yyyy-MM-dd HH:mm:ss' }),
          endTime: schema.date({ format: 'yyyy-MM-dd HH:mm:ss' }),
        }),
      })

      const examAnswer = await ExamAnswer.query()
        .preload('examQuestion', (eq) => eq.preload('questions'))
        .where('userId', payload.userId)

      const exam = await Exam.query().where('id', examId).firstOrFail()

      if (DateTime.now() > exam.endTime) {
        payload.submitTime = exam.endTime
      }

      let n = 0

      examAnswer.map((e) => {
        if (e.answer === e.examQuestion.questions.answerKey) {
          n += 1
        }
      })
      const data = await ExamRecord.create({ ...payload, examId, result: n })

      response.ok({
        message: 'Berhasil membuat data exam record',
        data,
      })
    } catch (error) {
      ResponseError.handler(error, response, 'Exam Record Co ln:56')
    }
  }

  public async show({ response, params }: HttpContextContract) {
    try {
      const { id } = params

      const data = await ExamRecord.query().where('id', id)
      response.ok({ message: 'Berhasil menampilkan data detail exam record', data })
    } catch (error) {
      ResponseError.handler(error, response, 'Exam Record Co ln:47')
    }
  }

  public async update({ request, response, params }: HttpContextContract) {
    try {
      const { id } = params

      const payload = await request.validate({
        schema: schema.create({
          userId: schema.string.optional([rules.trim(), rules.uuid({ version: 4 })]),
          submitTime: schema.date.optional({ format: 'yyyy-MM-dd HH:mm:ss' }),
          startTime: schema.date.optional({ format: 'yyyy-MM-dd HH:mm:ss' }),
          endTime: schema.date.optional({ format: 'yyyy-MM-dd HH:mm:ss' }),
        }),
      })

      const data = await ExamRecord.findByOrFail('id', id)
      await data.merge(payload).save()
      response.ok({ message: 'Berhasil memperbarui data exam record', data })
    } catch (error) {
      ResponseError.handler(error, response, 'Exam Record Co ln:69')
    }
  }

  public async destroy({ response, params }: HttpContextContract) {
    try {
      const { id } = params

      const data = await ExamRecord.findByOrFail('id', id)
      await data.delete()

      response.ok({ message: 'Berhasil menghapus data exam record' })
    } catch (error) {
      ResponseError.handler(error, response, 'Exam Record Co ln:69')
    }
  }
}
