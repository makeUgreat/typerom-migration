import { MigrationInterface, QueryRunner } from 'typeorm';

export class ChangeField1722416983041 implements MigrationInterface {
  name = 'ChangeField1722416983041';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "post_model" RENAME COLUMN "title" TO "test"`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "post_model" RENAME COLUMN "test" TO "title"`,
    );
  }
}
