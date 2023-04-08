import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Class from 'App/Models/Class'

export default class extends BaseSeeder {
  public async run() {
    console.info('==========START SEEDING CLASS')
    await Class.createMany([
      {
        id: '94aa4f99-0ed7-4663-9d09-455052c896b7',
        name: 'Rekayasa Perangkat Lunak',
        code: 'RPL',
      },
    ])
    console.info('==========DONE SEEDING CLASS')
  }
}
