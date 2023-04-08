import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'questions'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.uuid('id').primary().defaultTo(this.raw('uuid_generate_v4()'))
      table.uuid('user_id').unsigned().references('id').inTable('users').onDelete('CASCADE')
      table
        .uuid('question_bank_id')
        .unsigned()
        .references('id')
        .inTable('question_banks')
        .onDelete('CASCADE')
      table.boolean('is_public').defaultTo(false)
      table.string('question')
      table.string('a')
      table.string('b')
      table.string('c')
      table.string('d')
      table.string('e')
      table.string('answer_key')

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
