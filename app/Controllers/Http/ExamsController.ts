import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema, rules } from '@ioc:Adonis/Core/Validator'
import { ResponseError } from 'App/Exceptions/ResponseError'
import Exam from 'App/Models/Exam'

export default class ExamsController {
  public async index({ response, params }: HttpContextContract) {
    try {
      const { class_id: classId } = params

      const data = await Exam.query()
        .where('classId', classId)
        .preload('classes')
        .preload('trainer')

      response.ok({ message: 'Berhasil mengambil data Ujian', data })
    } catch (error) {
      ResponseError.handler(error, response, 'Exams Co ln:17')
    }
  }

  public async store({ request, response, params, auth }: HttpContextContract) {
    try {
      const { class_id: classId } = params

      const payload = await request.validate({
        schema: schema.create({
          name: schema.string([rules.trim()]),
          startTime: schema.date({ format: 'yyyy-MM-dd HH:mm:ss' }),
          endTime: schema.date({ format: 'yyyy-MM-dd HH:mm:ss' }),
          duration: schema.number(),
        }),
      })

      const data = await Exam.create({ ...payload, classId, trainerId: auth.user!.id })

      response.ok({ message: 'Berhasil membuat data ujian', data })
    } catch (error) {
      ResponseError.handler(error, response, 'Exams Co ln:39')
    }
  }

  public async show({ response, params }: HttpContextContract) {
    try {
      const { id } = params

      const data = await Exam.query()
        .where('id', id)
        .preload('trainer', (q) => q.select('nomor_induk', 'name', 'email'))
        .preload('classes')
        .firstOrFail()

      response.ok({ message: 'Berhasil mengambil data detail Ujian', data })
    } catch (error) {
      ResponseError.handler(error, response, 'Exams Co ln:52')
    }
  }

  public async update({ request, response, params }: HttpContextContract) {
    try {
      const { id } = params

      const payload = await request.validate({
        schema: schema.create({
          name: schema.string.optional([rules.trim()]),
          startTime: schema.date.optional({ format: 'yyyy-MM-dd HH:mm:ss' }),
          endTime: schema.date.optional({ format: 'yyyy-MM-dd HH:mm:ss' }),
          duration: schema.number.optional(),
        }),
      })

      const data = await Exam.findByOrFail('id', id)
      await data.merge(payload).save()

      response.ok({ message: 'Berhasil memperbarui data ujian', data })
    } catch (error) {
      ResponseError.handler(error, response, 'Exams Co ln:77')
    }
  }

  public async destroy({ response, params }: HttpContextContract) {
    try {
      const { id } = params

      const data = await Exam.findByOrFail('id', id)
      await data.delete()

      response.ok({ message: 'Berhasil menghapus data ujian' })
    } catch (error) {
      ResponseError.handler(error, response, 'Exams Co ln:90')
    }
  }
}
