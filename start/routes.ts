import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async () => {
  return { message: 'Exam Api System' }
})

Route.post('/auth/register', 'AuthController.register')
Route.post('/auth/login', 'AuthController.login')
Route.post('/auth/logout', 'AuthController.logout')
Route.get('/verify-email', 'AuthController.Verified')

Route.get('/harus-login', async ({ response }) => {
  response.ok({ message: 'Login kakak' })
}).middleware('auth:jwt')
