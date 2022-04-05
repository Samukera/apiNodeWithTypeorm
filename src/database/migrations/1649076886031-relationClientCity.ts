import { MigrationInterface, QueryRunner } from 'typeorm';

export default class relationClientCity1649076886031 implements MigrationInterface {
  name = 'relationClientCity1649076886031';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "client" ADD "cityCityId" integer`);
    await queryRunner.query(
      `ALTER TABLE "client" ADD CONSTRAINT "FK_a2fd7045838f975a33254c1338d" FOREIGN KEY ("cityCityId") REFERENCES "city"("cityId") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "client" DROP CONSTRAINT "FK_a2fd7045838f975a33254c1338d"`,
    );
    await queryRunner.query(`ALTER TABLE "client" DROP COLUMN "cityCityId"`);
  }
}
