import { MigrationInterface, QueryRunner } from 'typeorm';

export default class insertStates1648801844959 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`INSERT INTO state 
VALUES (1, 'Acre', 'AC');`);
    await queryRunner.query(`INSERT INTO state 
VALUES (2, 'Alagoas', 'AL');`);
    await queryRunner.query(`INSERT INTO state 
VALUES (3, 'Amapá', 'AP');`);
    await queryRunner.query(`INSERT INTO state 
VALUES (4, 'Amazonas', 'AM');`);
    await queryRunner.query(`INSERT INTO state 
VALUES (5, 'Bahia', 'BA');`);
    await queryRunner.query(`INSERT INTO state 
VALUES (6, 'Ceará', 'CE');`);
    await queryRunner.query(`INSERT INTO state 
VALUES (7, 'Espírito Santo', 'ES');`);
    await queryRunner.query(`INSERT INTO state 
VALUES (8, 'Goiás', 'GO');`);
    await queryRunner.query(`INSERT INTO state 
VALUES (9, 'Maranhão', 'MA');`);
    await queryRunner.query(`INSERT INTO state 
VALUES (10, 'Mato Grosso', 'MT');`);
    await queryRunner.query(`INSERT INTO state 
VALUES (11, 'Mato Grosso do Sul', 'MS');`);
    await queryRunner.query(`INSERT INTO state
VALUES (12, 'Minas Gerais', 'MG');`);
    await queryRunner.query(`INSERT INTO state 
VALUES (13, 'Pará', 'PA');`);
    await queryRunner.query(`INSERT INTO state 
VALUES (14, 'Paraíba', 'PB');`);
    await queryRunner.query(`INSERT INTO state 
VALUES (15, 'Paraná', 'PR');`);
    await queryRunner.query(`INSERT INTO state 
VALUES (16, 'Pernambuco', 'PE');`);
    await queryRunner.query(`INSERT INTO state 
VALUES (17, 'Piauí', 'PI');`);
    await queryRunner.query(`INSERT INTO state 
VALUES (18, 'Rio de Janeiro', 'RJ');`);
    await queryRunner.query(`INSERT INTO state 
VALUES (19, 'Rio Grande do Norte', 'RN');`);
    await queryRunner.query(`INSERT INTO state 
VALUES (20, 'Rio Grande do Sul', 'RS');`);
    await queryRunner.query(`INSERT INTO state 
VALUES (21, 'Rondônia', 'RO');`);
    await queryRunner.query(`INSERT INTO state 
VALUES (22,'Roraima', 'RR');`);
    await queryRunner.query(`INSERT INTO state 
VALUES (23,'Santa Catarina', 'SC');`);
    await queryRunner.query(`INSERT INTO state 
VALUES (24, 'São Paulo', 'SP');`);
    await queryRunner.query(`INSERT INTO state 
VALUES (25, 'Sergipe', 'SE');`);
    await queryRunner.query(`INSERT INTO state 
VALUES (26, 'Tocantins', 'TO');`);
    await queryRunner.query(`INSERT INTO state 
VALUES (27, 'Distrito Federal', 'DF');`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE state`);
  }
}
