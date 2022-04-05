import { MigrationInterface, QueryRunner } from 'typeorm';

export default class createCityTable1649066087924 implements MigrationInterface {
  name = 'createCityTable1649066087924';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "city" ("cityId" SERIAL NOT NULL, "name" character varying(100) NOT NULL, CONSTRAINT "PK_ab4faadf32d1887168156ec8ea9" PRIMARY KEY ("cityId"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "city"`);
  }
}
