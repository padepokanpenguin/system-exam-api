import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import TrainerClass from 'App/Models/TrainerClass'

export default class extends BaseSeeder {
  public async run() {
    // Write your database queries inside the run method
    console.info('==========START SEEDING  TRAINER CLASS')
    await TrainerClass.createMany([
      {
        id: '1c12d082-7aee-41a6-8ad7-62552040e475',
        trainerId: 'cb17e5cb-b1d0-4884-9ee7-16336416e399',
        classId: '94aa4f99-0ed7-4663-9d09-455052c896b7',
      },
      {
        id: '096d083f-b66a-4f65-808f-3e096abc3983',
        trainerId: '31aaffab-37df-4e71-bd3c-0eed66ea2f7e',
        classId: '94aa4f99-0ed7-4663-9d09-455052c896b7',
      },
    ])
    console.info('==========DONE SEEDING  TRAINER CLASS')
  }
}
