import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Application from '@ioc:Adonis/Core/Application'

export default class IndexSeeder extends BaseSeeder {
  private async runSeeder(seeder: { default: typeof BaseSeeder }) {
    /**
     * Do not run when not in dev mode and seeder is development
     * only
     */
    if (seeder.default.developmentOnly && !Application.inDev) {
      return
    }

    await new seeder.default(this.client).run()
  }

  public async run() {
    await this.runSeeder(await import('../Class'))
    await this.runSeeder(await import('../User'))
    await this.runSeeder(await import('../TrainerClass'))
    await this.runSeeder(await import('../Exam'))
    await this.runSeeder(await import('../ExamRecord'))
    await this.runSeeder(await import('../QuestionBank'))
    await this.runSeeder(await import('../Question'))
    await this.runSeeder(await import('../ExamQuestion'))
    await this.runSeeder(await import('../ExamAnswer'))
  }
}
