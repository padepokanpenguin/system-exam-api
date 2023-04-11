import Route from '@ioc:Adonis/Core/Route'

export const verifyEmail = {
  store: 'verifyEmail',
  show: 'verifyEmail',
  update: 'verifyEmail',
  destroy: 'verifyEmail',
}

export const roles = {
  index: 'checkRole:trainer,participant',
  store: 'checkRole:trainer',
  show: 'checkRole:trainer,participant',
  update: 'checkRole:trainer',
  destroy: 'checkRole:trainer',
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
  Route.resource('/kelas', 'ClassesController').apiOnly().middleware(verifyEmail).middleware(roles)
  Route.resource('/users', 'UsersController').apiOnly().middleware({
    index: 'checkRole:trainer,participant',
    store: 'checkRole:trainer',
    show: 'checkRole:trainer,participant',
    update: 'checkRole:trainer, participant',
    destroy: 'checkRole:trainer, participant',
  })
  Route.resource('/question-banks', 'QuestionBanksController')
    .apiOnly()
    .middleware({
      '*': 'checkRole:trainer',
    })
    .middleware({ '*': 'verifyEmail' })
  // Route.resource('question-banks.questions', 'QuestionsController').apiOnly().middleware({
  //   '*': 'checkRole:trainer',
  // })
  Route.resource('question-banks.questions', 'QuestionsController')
    .only(['index', 'store'])
    .apiOnly()
    .middleware({ '*': 'checkRole:trainer' })
    .middleware({ '*': 'verifyEmail' })
  Route.get('/questions/:id', 'QuestionsController.show').middleware([
    'checkRole:trainer',
    'verifyEmail',
  ])
  Route.put('/questions/:id', 'QuestionsController.update').middleware([
    'checkRole:trainer',
    'verifyEmail',
  ])
  Route.delete('/questions/:id', 'QuestionsController.destroy').middleware([
    'checkRole:trainer',
    'verifyEmail',
  ])
  Route.resource('classes.exams', 'ExamsController')
    .apiOnly()
    .only(['index', 'store'])
    .middleware({ index: 'checkRole:trainer, participant', store: 'checkRole:trainer' })
    .middleware({ '*': 'verifyEmail' })
  Route.get('/exams/:id', 'ExamsController.show').middleware([
    'checkRole:trainer, participant',
    'verifyEmail',
  ])
  Route.put('/exams/:id', 'ExamsController.update').middleware(['checkRole:trainer', 'verifyEmail'])
  Route.delete('/exams/:id', 'ExamsController.destroy').middleware([
    'checkRole:trainer',
    'verifyEmail',
  ])
  Route.resource('exams.exam-question', 'ExamQuestionsController')
    .only(['index', 'store'])
    .middleware({ index: 'checkRole:trainer, participant', store: 'checkRole:trainer' })
    .middleware({ '*': 'verifyEmail' })
  Route.get('/exam-question/:id', 'ExamQuestionsController.show').middleware([
    'checkRole:trainer, participant',
    'verifyEmail',
  ])
  Route.put('/exam-question/:id', 'ExamQuestionsController.update').middleware([
    'checkRole:trainer, participant',
    'verifyEmail',
  ])
  Route.delete('/exam-question/:id', 'ExamQuestionsController.destroy').middleware([
    'checkRole:trainer',
    'verifyEmail',
  ])
}).middleware(['auth:jwt'])
