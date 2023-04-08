import Route from '@ioc:Adonis/Core/Route'

export const verifyEmail = {
  store: 'verifyEmail',
  show: 'verifyEmail',
  update: 'verifyEmail',
  destroy: 'verifyEmail',
}

Route.get('/', async () => {
  return { message: 'Exam Api System' }
})

Route.post('/auth/register', 'AuthController.register')
Route.post('/auth/login', 'AuthController.login')
Route.post('/auth/logout', 'AuthController.logout').middleware('auth:jwt')
Route.get('/verify-email', 'AuthController.Verified')

Route.get('/harus-login', async ({ response }) => {
  response.ok({ message: 'Login kakak' })
}).middleware(['auth:jwt', 'verifyEmail'])

Route.group(() => {
  Route.resource('/kelas', 'ClassesController').apiOnly().middleware(verifyEmail)
}).middleware(['auth:jwt'])
