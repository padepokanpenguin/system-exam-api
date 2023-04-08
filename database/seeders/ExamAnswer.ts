import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import ExamAnswer from 'App/Models/ExamAnswer'

export default class extends BaseSeeder {
  public async run() {
    // Write your database queries inside the run method
    console.info('==========START SEEDING  EXAM ANSWER')
    await ExamAnswer.createMany([
      {
        id: 'b8a2db93-7ba8-40a5-8e32-f7cba06d5353',
        userId: '29a35c48-a42d-4df5-b770-125d48a79a4a',
        examQuestionId: '7a02e06d-b88e-4225-90ef-94a28de7208d',
        answer: 'b',
      },
      {
        id: '1bf8835c-885b-4032-bcf5-6e7362d4e1f2',
        userId: '29a35c48-a42d-4df5-b770-125d48a79a4a',
        examQuestionId: 'a7369aa4-0cd4-49a6-948b-88412af6c33a',
        answer: 'c',
      },
      {
        id: '64146268-3497-4710-9fac-f3ace18a1de6',
        userId: '29a35c48-a42d-4df5-b770-125d48a79a4a',
        examQuestionId: '1f942acd-2b58-431b-9412-8290dd7c3f09',
        answer: 'b',
      },
      {
        id: '1a9c0bb0-d209-4fb4-889b-1dc8678eec61',
        userId: '29a35c48-a42d-4df5-b770-125d48a79a4a',
        examQuestionId: '2272b373-260c-4760-b097-bb7ab7c22b45',
        answer: 'a',
      },
      {
        id: '2b06fedc-ce37-4887-824e-05c1f70b28da',
        userId: '29a35c48-a42d-4df5-b770-125d48a79a4a',
        examQuestionId: 'eca9565b-5381-4c46-a582-67022df9f9c4',
        answer: 'a',
      },
    ])
    console.info('==========DONE SEEDING  EXAM ANSWER')
  }
}
