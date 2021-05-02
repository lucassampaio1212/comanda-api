import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateDetailOrders1619807976679 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'detail_orders',
            columns: [
                {
                    name: "id",
                    type: "uuid",
                    isPrimary: true,
                },
                {
                    name: "product_id",
                    type: "uuid"
                },
                {
                    name: "order_id",
                    type: "uuid"
                },
                {
                    name: "quantity",
                    type: "numeric"
                },
                {
                    name: "amount",
                    type: "numeric",
                },
                {
                    name: "note",
                    type: "varchar"
                },
                {
                    name: "created_at",
                    type: "timestamp",
                    default: "now()"
                }
            ],
            foreignKeys: [
                {
                    name: "FKDetailProduct",
                    referencedTableName: "products",
                    referencedColumnNames: ["id"],
                    columnNames: ["product_id"],
                    onDelete: "SET NULL",
                    onUpdate: "SET NULL"
                },
                {
                    name: "FKDetailOrders",
                    referencedTableName: "orders_table",
                    referencedColumnNames: ['id'],
                    columnNames: ["order_id"],
                    onDelete: "SET NULL",
                    onUpdate: "SET NULL"
                }
            ]
        }))

    }

    public async down(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.dropTable('detail_orders')
    }

}
