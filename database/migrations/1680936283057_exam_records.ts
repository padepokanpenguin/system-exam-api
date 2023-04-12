import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'exam_records'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.uuid('id').primary().defaultTo(this.raw('uuid_generate_v4()'))
      table.uuid('user_id').unsigned().references('id').inTable('users').onDelete('CASCADE')
      table.uuid('exam_id').unsigned().references('id').inTable('exams').onDelete('CASCADE')
      table.float('result')
      table.timestamp('submit_time').nullable()
      table.timestamp('start_time')
      table.timestamp('end_time')

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
