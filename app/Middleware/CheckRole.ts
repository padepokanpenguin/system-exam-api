import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class CheckRole {
  public async handle(
    { response, auth }: HttpContextContract,
    next: () => Promise<void>,
    role?: string[]
  ) {
    // code for middleware goes here. ABOVE THE NEXT CALL

    const user = auth.user!

    if (!user) {
      return response.status(401).send('Unauthorized')
    }

    if (role!.indexOf(user.roles) < 0) {
      return response.unauthorized('User tidak memiliki access')
    }
    await next()
  }
}
