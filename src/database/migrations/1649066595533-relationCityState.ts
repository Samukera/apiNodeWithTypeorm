import { MigrationInterface, QueryRunner } from 'typeorm';

export default class relationCityState1649066595533 implements MigrationInterface {
  name = 'relationCityState1649066595533';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "city" ADD "stateId" integer`);
    await queryRunner.query(
      `ALTER TABLE "city" ADD CONSTRAINT "FK_e99de556ee56afe72154f3ed04a" FOREIGN KEY ("stateId") REFERENCES "state"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "city" DROP CONSTRAINT "FK_e99de556ee56afe72154f3ed04a"`,
    );
    await queryRunner.query(`ALTER TABLE "city" DROP COLUMN "stateId"`);
  }
}
