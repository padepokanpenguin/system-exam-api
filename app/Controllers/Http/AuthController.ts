import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Mail from '@ioc:Adonis/Addons/Mail'
import { string } from '@ioc:Adonis/Core/Helpers'
import { schema, rules } from '@ioc:Adonis/Core/Validator'
import { ResponseError } from 'App/Exceptions/ResponseError'
import User from 'App/Models/User'
import JwtToken from 'App/Models/JwtToken'

export default class AuthController {
  public async register({ request, response }: HttpContextContract) {
    try {
      const payload = await request.validate({
        schema: schema.create({
          name: schema.string({ trim: true }),
          email: schema.string({ trim: true }, [rules.email()]),
          password: schema.string({ trim: true }),
          roles: schema.enum(['trainer', 'participant']),
        }),
      })
      const data = await User.create(payload)

      const token = await JwtToken.create({
        userId: data.id,
        name: 'Verifikasi Email',
        type: 'Email Verification',
        token: string.generateRandom(64),
      })

      await Mail.send((message) => {
        message.from('arianurjamal@noreply.com').to(data.email).htmlView('emails/register', {
          name: data.name,
          person: data.email,
          role: data.roles,
          token: token.token,
        })
      })

      response.ok({ message: 'Berhasil Register', data })
    } catch (error) {
      ResponseError.handler(error, response, 'Auth Co ln:8')
    }
  }

  public async login({ request, response, auth }: HttpContextContract) {
    try {
      const payload = await request.validate({
        schema: schema.create({
          email: schema.string({ trim: true }, [rules.email()]),
          password: schema.string({ trim: true }),
        }),
      })

      const data = await User.query().where('email', payload.email).firstOrFail()

      const token = await auth.use('jwt').login(data)

      response.ok({ message: 'Login Berhasil', data, token })
    } catch (error) {
      ResponseError.handler(error, response, 'Auth Co ln:47')
    }
  }

  public async logout({ auth, response }: HttpContextContract) {
    try {
      await auth.use('jwt').revoke()
      response.ok({ message: 'Logout Berhasil' })
    } catch (error) {
      ResponseError.handler(error, response, 'Auth Co ln:69')
    }
  }

  public async Verified({ request, response, view }: HttpContextContract) {
    try {
      const token = request.input('token')

      if (!token) {
        return response.redirect('/')
      }

      const existingToken = await JwtToken.query()
        .preload('user')
        .where('token', token)
        .firstOrFail()

      existingToken.user.isVerified = true
      existingToken.user.save()

      await existingToken.delete()
      return view.render('emails/verified')
    } catch (error) {
      ResponseError.handler(error, response, 'Auth Co ln:68')
    }
  }
}
