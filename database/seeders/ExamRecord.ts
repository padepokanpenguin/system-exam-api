import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import ExamRecord from 'App/Models/ExamRecord'
import { DateTime } from 'luxon'

export default class extends BaseSeeder {
  public async run() {
    console.info('==========START SEEDING EXAM RECORD')
    await ExamRecord.createMany([
      {
        id: '1b3dfb9f-2b4d-40d2-a32d-779e17f84f52',
        userId: '29a35c48-a42d-4df5-b770-125d48a79a4a',
        examId: '73c6de4c-97fc-4b0d-a9ea-8a29cd8ce242',
        result: 95,
        submitTime: DateTime.local(2023, 4, 11, 10, 40, 0),
        startTime: DateTime.local(2023, 4, 11, 8, 40, 0),
        endTime: DateTime.local(2023, 4, 11, 11, 40, 0),
      },
    ])
    console.info('==========DONE SEEDING EXAM RECORD')
  }
}
