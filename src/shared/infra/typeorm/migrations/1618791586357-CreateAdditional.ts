import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateAdditional1618791586357 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "additional",
            columns: [
                {
                    name: "id",
                    type: "uuid",
                    isPrimary: true,
                },
                {
                    name: "description",
                    type: "varchar",
                    
                },
                {
                    name: "amount",
                    type: "numeric",
                },
                {
                    name: "created_at",
                    type: "timestamp with time zone",
                    default: "now()"
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("additional")
    }

}
