import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Exam from 'App/Models/Exam'
import { DateTime } from 'luxon'

export default class extends BaseSeeder {
  public async run() {
    // Write your database queries inside the run method
    console.info('==========START SEEDING  UJIAN')
    await Exam.createMany([
      {
        id: '73c6de4c-97fc-4b0d-a9ea-8a29cd8ce242',
        classId: '94aa4f99-0ed7-4663-9d09-455052c896b7',
        trainerId: 'cb17e5cb-b1d0-4884-9ee7-16336416e399',
        name: 'Ujian Harian Jaringan',
        startTime: DateTime.now(),
        endTime: DateTime.now(),
        duration: 90,
      },
      {
        id: '6112359f-ef3c-4cbc-9bfe-cd281694ac90',
        classId: '94aa4f99-0ed7-4663-9d09-455052c896b7',
        trainerId: '31aaffab-37df-4e71-bd3c-0eed66ea2f7e',
        name: 'Ujian Harian Keamnanansiber',
        startTime: DateTime.now(),
        endTime: DateTime.now(),
        duration: 120,
      },
    ])
    console.info('==========DONE SEEDING  UJIAN')
  }
}
