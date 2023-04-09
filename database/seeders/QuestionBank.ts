import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import QuestionBank from 'App/Models/QuestionBank'

export default class extends BaseSeeder {
  public async run() {
    // Write your database queries inside the run method
    console.info('==========START SEEDING Bank SOAL')
    await QuestionBank.createMany([
      {
        id: 'c20076cc-09f7-4cc6-89ef-7ba7fb2c54b4',
        name: 'Jaringan',
      },
      {
        id: '67c8cdbb-fdcb-43ba-bf79-f78eb2819f0d',
        name: 'Keamanan',
      },
    ])
    console.info('==========DONE SEEDING Bank SOAL')
  }
}
