import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class Verification {
  public async handle({ response, auth }: HttpContextContract, next: () => Promise<void>) {
    const user = auth.user!

    if (!user) {
      return response.status(401).send('Unauthorized')
    }

    if (!user.isVerified && user.emailVerificationToken) {
      return response.unauthorized({ message: 'Email is not verified.' })
    }
    await next()
  }
}
