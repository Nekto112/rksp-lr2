import { MigrationInterface, QueryRunner } from "typeorm";

export class Initial1700982522507 implements MigrationInterface {
    name = 'Initial1700982522507'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "mollusc" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "species" character varying NOT NULL, CONSTRAINT "UQ_eb8bfce8a29159c81db3b594a74" UNIQUE ("name"), CONSTRAINT "PK_08ff9de7bd2cbb0c24a23ab7a26" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "oceanarium" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "location" character varying NOT NULL, "grade" character varying NOT NULL, CONSTRAINT "UQ_fc11c23d42f05c759dc88bc374a" UNIQUE ("name"), CONSTRAINT "PK_bc7372590b3f4397fd1afc32951" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "Fish" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "species" character varying NOT NULL, "habitat" character varying NOT NULL, "location" character varying NOT NULL, CONSTRAINT "UQ_b8c579ef53fcb8e00c5b4f9eef2" UNIQUE ("name"), CONSTRAINT "PK_4578de85aefdb96ca48be3b4465" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "oceanarium_mollus" ("mollus_id" integer NOT NULL, "oceanarium_id" integer NOT NULL, CONSTRAINT "PK_438060a31505ffd55163d68377d" PRIMARY KEY ("mollus_id", "oceanarium_id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_e3d52b71ac181cac9840a90982" ON "oceanarium_mollus" ("mollus_id") `);
        await queryRunner.query(`CREATE INDEX "IDX_e6cc7bec74dc2290e282ec9dc4" ON "oceanarium_mollus" ("oceanarium_id") `);
        await queryRunner.query(`CREATE TABLE "oceanarium_fish" ("oceanarium_id" integer NOT NULL, "fish_id" integer NOT NULL, CONSTRAINT "PK_ad58f9115ae8071b699bed9b902" PRIMARY KEY ("oceanarium_id", "fish_id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_b68a8aeb277b5dc5bd7dd49bb7" ON "oceanarium_fish" ("oceanarium_id") `);
        await queryRunner.query(`CREATE INDEX "IDX_62959ceeaa87d7abc771786194" ON "oceanarium_fish" ("fish_id") `);
        await queryRunner.query(`ALTER TABLE "oceanarium_mollus" ADD CONSTRAINT "FK_e3d52b71ac181cac9840a909821" FOREIGN KEY ("mollus_id") REFERENCES "mollusc"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "oceanarium_mollus" ADD CONSTRAINT "FK_e6cc7bec74dc2290e282ec9dc45" FOREIGN KEY ("oceanarium_id") REFERENCES "oceanarium"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "oceanarium_fish" ADD CONSTRAINT "FK_b68a8aeb277b5dc5bd7dd49bb74" FOREIGN KEY ("oceanarium_id") REFERENCES "oceanarium"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "oceanarium_fish" ADD CONSTRAINT "FK_62959ceeaa87d7abc7717861942" FOREIGN KEY ("fish_id") REFERENCES "Fish"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "oceanarium_fish" DROP CONSTRAINT "FK_62959ceeaa87d7abc7717861942"`);
        await queryRunner.query(`ALTER TABLE "oceanarium_fish" DROP CONSTRAINT "FK_b68a8aeb277b5dc5bd7dd49bb74"`);
        await queryRunner.query(`ALTER TABLE "oceanarium_mollus" DROP CONSTRAINT "FK_e6cc7bec74dc2290e282ec9dc45"`);
        await queryRunner.query(`ALTER TABLE "oceanarium_mollus" DROP CONSTRAINT "FK_e3d52b71ac181cac9840a909821"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_62959ceeaa87d7abc771786194"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_b68a8aeb277b5dc5bd7dd49bb7"`);
        await queryRunner.query(`DROP TABLE "oceanarium_fish"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_e6cc7bec74dc2290e282ec9dc4"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_e3d52b71ac181cac9840a90982"`);
        await queryRunner.query(`DROP TABLE "oceanarium_mollus"`);
        await queryRunner.query(`DROP TABLE "Fish"`);
        await queryRunner.query(`DROP TABLE "oceanarium"`);
        await queryRunner.query(`DROP TABLE "mollusc"`);
    }

}
