import { ICreateTableDTO, ITablesRepository } from "@modules/Orders/repositories/ITablesRepository";
import { getRepository, Repository } from "typeorm";
import Tables from "../entities/Tables";




class TablesRepositories implements ITablesRepository{
    private repository: Repository<Tables>

    constructor(){
        this.repository = getRepository(Tables)
    }
    public async create({number, available}:ICreateTableDTO): Promise<Tables> {
        const table = this.repository.create({
            number,
            available
        });

        await this.repository.save(table);

        return table;
    }

    public async findByNumber(number: number): Promise<Tables> {
        const tableId = await this.repository.findOne({number});

        return tableId;
    }
}
export default TablesRepositories;
