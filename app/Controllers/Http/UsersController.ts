import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { ResponseError } from 'App/Exceptions/ResponseError'
import User from 'App/Models/User'

export default class UsersController {
  public async index({ response }: HttpContextContract) {
    try {
      const data = await User.query()

      response.ok({ message: 'Berhasil mengambil data user', data })
    } catch (error) {
      ResponseError.handler(error, response, 'User Co ln:19')
    }
  }

  public async create({}: HttpContextContract) {}

  public async store({}: HttpContextContract) {}

  public async show({}: HttpContextContract) {}

  public async edit({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}
