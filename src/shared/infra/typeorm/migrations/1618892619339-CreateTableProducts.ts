import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateTableProducts1618892619339 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "products",
            columns: [
                {
                    name: "id",
                    type: "uuid",
                    isPrimary: true
                },
                {
                    name: "category_id",
                    type: "uuid"
                },
                {
                    name: "description",
                    type: "varchar"
                },
                {
                    name: "amount",
                    type: "numeric"
                },
                {
                    name: "situantion",
                    type: "varchar"
                },
                {
                    name: "created_at",
                    type: "timestamp with time zone",
                    default: "now()"
                }
            ],
            foreignKeys: [
                {
                    name: "FKProductsCategory",
                    referencedTableName: "categories",
                    referencedColumnNames: ["id"],
                    columnNames: ["category_id"],
                    onDelete: "SET NULL",
                    onUpdate: "SET NULL",
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("products");
    }

}
