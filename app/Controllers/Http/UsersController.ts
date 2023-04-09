import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Mail from '@ioc:Adonis/Addons/Mail'
import { string } from '@ioc:Adonis/Core/Helpers'
import { schema, rules } from '@ioc:Adonis/Core/Validator'
import { ResponseError } from 'App/Exceptions/ResponseError'
import User from 'App/Models/User'

export default class UsersController {
  public async index({ response }: HttpContextContract) {
    try {
      const data = await User.query().preload('class', (q) => q.select('name', 'code'))

      response.ok({ message: 'Berhasil mengambil data user', data })
    } catch (error) {
      ResponseError.handler(error, response, 'User Co ln:15')
    }
  }

  public async store({ request, response }: HttpContextContract) {
    try {
      const payload = await request.validate({
        schema: schema.create({
          name: schema.string({ trim: true }),
          email: schema.string({ trim: true }, [rules.email()]),
          password: schema.string({ trim: true }),
          roles: schema.enum(['trainer', 'participant']),
          classId: schema.string.optional({ trim: true }, [rules.uuid({ version: 4 })]),
        }),
      })

      const data = await User.create(payload)

      const token = string.generateRandom(64)
      await Mail.send((message) => {
        message.from('arianurjamal@noreply.com').to(data.email).htmlView('emails/register', {
          name: data.name,
          person: data.email,
          role: data.roles,
          token: token,
        })
      })

      response.ok({ message: 'Berhasil membuat user', data })
    } catch (error) {
      ResponseError.handler(error, response, 'User Co ln:45')
    }
  }

  public async show({ params, response }: HttpContextContract) {
    try {
      const { id } = params

      const data = await User.query()
        .where('id', id)
        .select('nomor_induk', 'name', 'email', 'roles')
        .firstOrFail()

      response.ok({ message: 'Berhasil mengambil data detail User', data })
    } catch (error) {
      ResponseError.handler(error, response, 'User Co ln:60')
    }
  }

  public async update({ params, response, request }: HttpContextContract) {
    try {
      const { id } = params
      const payload = await request.validate({
        schema: schema.create({
          nomorInduk: schema.string.optional({ trim: true }),
          email: schema.string.optional({ trim: true }, [rules.email()]),
          password: schema.string({ trim: true }),
        }),
      })

      const data = await User.findByOrFail('id', id)
      await data.merge(payload).save()

      response.ok({ message: 'Berhasil memperbarui data user', data })
    } catch (error) {
      ResponseError.handler(error, response, 'User Co ln:80')
    }
  }

  public async destroy({ params, response }: HttpContextContract) {
    try {
      const { id } = params

      const data = await User.findByOrFail('id', id)
      await data.delete()

      response.ok({ message: 'Berhasil menghapus data user' })
    } catch (error) {
      ResponseError.handler(error, response, 'User Co ln:93')
    }
  }
}
