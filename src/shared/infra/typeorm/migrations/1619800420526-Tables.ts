import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class Tables1619800420526 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'tables',
            columns: [
                {
                    name: 'id',
                    type: 'uuid',
                    isPrimary: true,
                }, 
                {
                    name: 'number',
                    type: 'numeric',
                },
                {
                    name: 'available',
                    type: "boolean",
                    default: true,
                },
                {
                    name: "created_at",
                    type: "timestamp",
                    default: "now()"
                }
            ]
        }))

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('tables')
    }

}
