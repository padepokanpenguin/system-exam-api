import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import User from 'App/Models/User'

export default class extends BaseSeeder {
  public async run() {
    // Write your database queries inside the run method
    console.info('==========START SEEDING User')
    await User.createMany([
      {
        id: '29a35c48-a42d-4df5-b770-125d48a79a4a',
        nomorInduk: '123456789',
        name: 'John Smith',
        email: 'johnsmit@mail.com',
        password: 'rahasia',
        roles: 'participant',
        classId: '94aa4f99-0ed7-4663-9d09-455052c896b7',
      },
      {
        id: '013274fb-9f34-49fc-b449-77b23b660134',
        nomorInduk: '123456789',
        name: 'John Doe',
        email: 'johndoe@mail.com',
        password: 'rahasia',
        roles: 'participant',
        classId: '94aa4f99-0ed7-4663-9d09-455052c896b7',
      },
      {
        id: 'c9acc51c-d443-4b33-8f9c-5e2b49552bc7',
        nomorInduk: '123456789',
        name: 'John Donk',
        email: 'johndonk@mail.com',
        password: 'rahasia',
        roles: 'participant',
        classId: '94aa4f99-0ed7-4663-9d09-455052c896b7',
      },
      {
        id: 'cb17e5cb-b1d0-4884-9ee7-16336416e399',
        nomorInduk: '123456789',
        name: 'Aria Nur Jamal',
        email: 'arianur@mail.com',
        password: 'rahasia',
        roles: 'trainer',
      },
      {
        id: '31aaffab-37df-4e71-bd3c-0eed66ea2f7e',
        nomorInduk: '123456789',
        name: 'Steve Jobs',
        email: 'steve@mail.com',
        password: 'rahasia',
        roles: 'trainer',
      },
    ])
    console.info('==========DONE SEEDING User')
  }
}
