import { MigrationInterface, QueryRunner } from "typeorm";

export class AddAuth1722403453685 implements MigrationInterface {
    name = 'AddAuth1722403453685'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "post_model" ADD "author" character varying`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "post_model" DROP COLUMN "author"`);
    }

}
