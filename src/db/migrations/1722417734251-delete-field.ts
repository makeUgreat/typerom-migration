import { MigrationInterface, QueryRunner } from 'typeorm';

export class DeleteField1722417734251 implements MigrationInterface {
  name = 'DeleteField1722417734251';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "post_model" DROP COLUMN "title"`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "post_model" ADD "title" character varying NOT NULL`,
    );
  }
}
