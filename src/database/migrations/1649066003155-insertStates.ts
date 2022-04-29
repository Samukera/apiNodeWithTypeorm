import { MigrationInterface, QueryRunner } from 'typeorm';

export default class insertStates1649066003155 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`INSERT INTO "state"
    VALUES
    (1, 'Acre', 'AC'),
    (2, 'Alagoas', 'AL'),
    (3, 'Amapá', 'AP'),
    (4, 'Amazonas', 'AM'),
    (5, 'Bahia', 'BA'),
    (6, 'Ceará', 'CE'),
    (7, 'Espírito Santo', 'ES'),
    (8, 'Goiás', 'GO'),
    (9, 'Maranhão', 'MA'),
    (10, 'Mato Grosso', 'MT'),
    (11, 'Mato Grosso do Sul', 'MS'),
    (12, 'Minas Gerais', 'MG'),
    (13, 'Pará', 'PA'),
    (14, 'Paraíba', 'PB'),
    (15, 'Paraná', 'PR'),
    (16, 'Pernambuco', 'PE'),
    (17, 'Piauí', 'PI'),
    (18, 'Rio de Janeiro', 'RJ'),
    (19, 'Rio Grande do Norte', 'RN'),
    (20, 'Rio Grande do Sul', 'RS'),
    (21, 'Rondônia', 'RO'),
    (22,'Roraima', 'RR'),
    (23,'Santa Catarina', 'SC'),
    (24, 'São Paulo', 'SP'),
    (25, 'Sergipe', 'SE'),
    (26, 'Tocantins', 'TO'),
    (27, 'Distrito Federal', 'DF');`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE state`);
  }
}
