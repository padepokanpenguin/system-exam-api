import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Mail from '@ioc:Adonis/Addons/Mail'
import { string } from '@ioc:Adonis/Core/Helpers'
import { schema, rules } from '@ioc:Adonis/Core/Validator'
import { ResponseError } from 'App/Exceptions/ResponseError'
import User from 'App/Models/User'

export default class AuthController {
  public async register({ request, response }: HttpContextContract) {
    try {
      const payload = await request.validate({
        schema: schema.create({
          name: schema.string({ trim: true }),
          email: schema.string({ trim: true }, [rules.email()]),
          password: schema.string({ trim: true }, [rules.confirmed('passwordConfirmaion')]),
          roles: schema.enum(['trainer', 'participant']),
        }),
      })

      const token = string.generateRandom(64)
      const data = await User.create({ ...payload, emailVerificationToken: token })

      await Mail.send((message) => {
        message.from('arianurjamal@noreply.com').to(data.email).htmlView('emails/register', {
          name: data.name,
          person: data.email,
          role: data.roles,
          token: token,
        })
      })

      response.ok({ message: 'Berhasil Register', data })
    } catch (error) {
      ResponseError.handler(error, response, 'Auth Co ln:34')
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

      const token = await auth.use('jwt').generate(data)

      response.ok({ message: 'Login Berhasil', data, token })
    } catch (error) {
      ResponseError.handler(error, response, 'Auth Co ln:53')
    }
  }

  public async logout({ request, response, auth }: HttpContextContract) {
    try {
      const refreshToken = request.input('refresh_token')
      await auth.use('jwt').revoke({ refreshToken })
      response.ok({ message: 'Logout Berhasil' })
    } catch (error) {
      ResponseError.handler(error, response, 'Auth Co ln:63')
    }
  }

  public async Verified({ request, response, view }: HttpContextContract) {
    try {
      const token = request.input('token')

      if (!token) {
        return response.redirect('/')
      }
      const user = await User.query().where('email_verification_token', token).firstOrFail()

      user.isVerified = true
      user.emailVerificationToken = null

      await user.save()

      return view.render('emails/verified')
    } catch (error) {
      ResponseError.handler(error, response, 'Auth Co ln:83')
    }
  }
}
