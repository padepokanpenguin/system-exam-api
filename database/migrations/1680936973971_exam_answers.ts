import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'exam_answers'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.uuid('id').primary().defaultTo(this.raw('uuid_generate_v4()'))
      table.uuid('user_id').unsigned().references('id').inTable('users').onDelete('CASCADE')
      table
        .uuid('exam_question_id')
        .unsigned()
        .references('id')
        .inTable('exam_questions')
        .onDelete('CASCADE')
      table.string('answer')
      table.boolean('is_ragu')

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
