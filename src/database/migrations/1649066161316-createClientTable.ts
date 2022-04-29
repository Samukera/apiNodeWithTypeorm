import { MigrationInterface, QueryRunner } from 'typeorm';

export default class createClientTable1649066161316 implements MigrationInterface {
  name = 'createClientTable1649066161316';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "client" ("clientId" SERIAL NOT NULL, "name" character varying(100) NOT NULL, "genre" character varying(1) NOT NULL, "bornIn" TIMESTAMP NOT NULL, "age" integer NOT NULL, "email" character varying(100) NOT NULL, "password" character varying(250) NOT NULL, CONSTRAINT "PK_6ed9067942d7537ce359e172ff6" PRIMARY KEY ("clientId"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "client"`);
  }
}
