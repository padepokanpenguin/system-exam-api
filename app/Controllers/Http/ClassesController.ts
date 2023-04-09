import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema, rules } from '@ioc:Adonis/Core/Validator'
import { ResponseError } from 'App/Exceptions/ResponseError'
import Class from 'App/Models/Class'

export default class ClassesController {
  public async index({ response }: HttpContextContract) {
    try {
      const data = await Class.query().preload('users', (q) =>
        q.select('nomor_induk', 'name', 'email')
      )

      response.ok({ message: 'Berhasil mengambil data kelas', data })
    } catch (error) {
      ResponseError.handler(error, response, 'Classes Co ln:18')
    }
  }

  public async store({ request, response }: HttpContextContract) {
    try {
      const payload = await request.validate({
        schema: schema.create({
          name: schema.string({ trim: true }, [rules.alphaNum({ allow: ['space'] })]),
          code: schema.string({ trim: true }),
        }),
      })

      const data = await Class.create(payload)

      response.ok({ message: 'Berhasil menambahkan data kelas', data })
    } catch (error) {
      ResponseError.handler(error, response, 'Classes Co ln:28')
    }
  }

  public async show({ response, params }: HttpContextContract) {
    try {
      const { id } = params

      const data = await Class.query().where('id', id).firstOrFail()

      response.ok({ message: 'Berhasil menampilkan kelas detail', data })
    } catch (error) {
      ResponseError.handler(error, response, 'Classes Co ln:48')
    }
  }

  public async update({ request, response, params }: HttpContextContract) {
    try {
      const { id } = params

      const payload = await request.validate({
        schema: schema.create({
          name: schema.string.optional({ trim: true }),
          code: schema.string.optional({ trim: true }),
        }),
      })

      const data = await Class.findByOrFail('id', id)
      await data.merge(payload).save()

      response.ok({ message: 'Berhasil memperbarui data kelas', data })
    } catch (error) {
      ResponseError.handler(error, response, 'Classes Co ln:58')
    }
  }

  public async destroy({ response, params }: HttpContextContract) {
    try {
      const { id } = params

      const data = await Class.query().where('id', id).firstOrFail()
      await data.delete()

      response.ok({ message: 'Berhasil menghapus data kelas' })
    } catch (error) {
      ResponseError.handler(error, response, 'Classes Co ln:64')
    }
  }
}
