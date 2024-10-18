import { MigrationInterface, QueryRunner } from "typeorm";

export class MyMigration1729221699541 implements MigrationInterface {
    name = 'MyMigration1729221699541'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "cuidadores" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "nome" character varying NOT NULL, "email" character varying NOT NULL, "linkedin" character varying NOT NULL, "telefone" character varying NOT NULL, "ativo" boolean NOT NULL, CONSTRAINT "PK_1ad36d5ea4bbe74994a53465442" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "cuidadores"`);
    }

}
