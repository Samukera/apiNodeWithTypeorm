import { MigrationInterface, QueryRunner } from 'typeorm';

export default class createStateTable1649065916687 implements MigrationInterface {
  name = 'createStateTable1649065916687';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "state" ("id" SERIAL NOT NULL, "name" character varying(100) NOT NULL, "uf" character varying(2) NOT NULL, CONSTRAINT "PK_549ffd046ebab1336c3a8030a12" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "state"`);
  }
}
