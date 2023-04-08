import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import ExamQuestion from 'App/Models/ExamQuestion'

export default class extends BaseSeeder {
  public async run() {
    // Write your database queries inside the run method
    console.info('==========START SEEDING  EXAM QUESTION')
    await ExamQuestion.createMany([
      {
        id: '7a02e06d-b88e-4225-90ef-94a28de7208d',
        examId: '73c6de4c-97fc-4b0d-a9ea-8a29cd8ce242',
        questionId: 'b0cc9184-2695-4df3-8c4d-31688c537711',
      },
      {
        id: 'a7369aa4-0cd4-49a6-948b-88412af6c33a',
        examId: '73c6de4c-97fc-4b0d-a9ea-8a29cd8ce242',
        questionId: '8e681cb0-7d83-4247-b289-54edd4dd1720',
      },
      {
        id: '1f942acd-2b58-431b-9412-8290dd7c3f09',
        examId: '73c6de4c-97fc-4b0d-a9ea-8a29cd8ce242',
        questionId: 'fc9c2776-9842-43ff-bc85-89b83a150414',
      },
      {
        id: '2272b373-260c-4760-b097-bb7ab7c22b45',
        examId: '73c6de4c-97fc-4b0d-a9ea-8a29cd8ce242',
        questionId: 'b58f3132-e138-4898-a172-fecb3c607ac4',
      },
      {
        id: 'eca9565b-5381-4c46-a582-67022df9f9c4',
        examId: '73c6de4c-97fc-4b0d-a9ea-8a29cd8ce242',
        questionId: '638cc2a2-f121-4519-9d64-916696dd5f58',
      },
      {
        id: '34cd2d08-f81e-471a-8cb3-dbfb160b6ae4',
        examId: '6112359f-ef3c-4cbc-9bfe-cd281694ac90',
        questionId: '7385913d-72a5-4831-a270-7297e2c2c773',
      },
      {
        id: '7db54864-44f8-4a78-8610-1bd07d86507c',
        examId: '6112359f-ef3c-4cbc-9bfe-cd281694ac90',
        questionId: '0b6d7aee-c0f0-49bd-b418-25dc64b58a93',
      },
      {
        id: '734e7519-b8e0-4e8b-a433-e5f869aa5d0f',
        examId: '6112359f-ef3c-4cbc-9bfe-cd281694ac90',
        questionId: '1be1fe3b-79da-47ab-b0bc-9d58d8808018',
      },
      {
        id: '6a08691c-2449-4a06-8dd4-8e1e1ab5281b',
        examId: '6112359f-ef3c-4cbc-9bfe-cd281694ac90',
        questionId: 'dc74f671-a3a4-469f-a6cb-88817b8a7010',
      },
      {
        id: '433fec98-7911-4ad2-ad24-0b707875b6db',
        examId: '6112359f-ef3c-4cbc-9bfe-cd281694ac90',
        questionId: '6db78123-53b5-4bf8-a179-48792c4e0b2f',
      },
    ])
    console.info('==========DONE SEEDING  EXAM QUESTION')
  }
}
