import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CreateCategoryAdditional1618792905221 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "categories_additional",
            columns: [
                {
                    name: "category_id",
                    type: "uuid",
                },
                {
                    name: "additional_id",
                    type: "uuid"
                },
                {
                    name: "created_at",
                    type: "timestamp with time zone",
                    default: "now()"
                }
            ]
        }));
        await queryRunner.createForeignKey(
            "categories_additional",
            new TableForeignKey({
                name: "FKAdditionalCategory",
                referencedTableName: "additional",
                referencedColumnNames: ["id"],
                columnNames: ["additional_id"],
                onDelete: "SET NULL",
                onUpdate: "SET NULL"

            })
        );
        await queryRunner.createForeignKey(
            "categories_additional",
            new TableForeignKey({
                name: "FKCategoryAdditional",
                referencedTableName: "categories",
                referencedColumnNames: ["id"],
                columnNames: ["category_id"],
                onDelete: "SET NULL",
                onUpdate: "SET NULL"

            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey("categories_additional","FKCategoryAdditional");
        await queryRunner.dropForeignKey("categories_additional","FKAdditionalCategory");
        await queryRunner.dropTable("categories_additional");
    }

}
