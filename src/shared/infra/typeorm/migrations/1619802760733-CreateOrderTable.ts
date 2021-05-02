import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateOrderTable1619802760733 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'orders_table',
            columns: [
                {
                    name: 'id',
                    type: "uuid",
                    isPrimary: true,
                },
                {
                    name: 'user_id',
                    type: 'uuid'
                },
                {
                    name: "table_id",
                    type: "uuid"
                },
                {
                    name: "amount",
                    type: "numeric",
                    isNullable: true
                },
                {
                    name: 'situation',
                    type: "varchar"
                }
            ],
            foreignKeys:[
                {
                    name: "FKOrdersUser",
                    referencedTableName: "users",
                    referencedColumnNames: ["id"],
                    columnNames: ['user_id'],
                    onDelete: "SET NULL",
                    onUpdate: "SET NULL"
                },
                {
                    name: "FKOrdersTables",
                    referencedTableName: "tables",
                    referencedColumnNames: ["id"],
                    columnNames: ['table_id'],
                    onDelete: "SET NULL",
                    onUpdate: "SET NULL"
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.dropTable("orders_table")
    }

}
