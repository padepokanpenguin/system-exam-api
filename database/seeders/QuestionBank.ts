import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import QuestionBank from 'App/Models/QuestionBank'

export default class extends BaseSeeder {
  public async run() {
    // Write your database queries inside the run method
    console.info('==========START SEEDING Bank SOAL')
    await QuestionBank.createMany([
      {
        id: 'fd093c0d-028d-49de-b45d-e0e5afe41d45',
        name: 'Jaringan',
      },
      {
        id: 'fd093c0db9223497-189b-46c4-b436-c11729e441e0',
        name: 'Keamanan',
      },
    ])
    console.info('==========DONE SEEDING Bank SOAL')
  }
}
