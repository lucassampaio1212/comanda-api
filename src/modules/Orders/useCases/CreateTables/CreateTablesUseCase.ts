import { ITablesRepository } from "@modules/Orders/repositories/ITablesRepository";
import { inject, injectable } from "tsyringe";


interface IRequest {
    number: number;
    available: boolean;
}


@injectable()
class CreateTableUseCase {

    constructor(
        @inject("TablesRepository")
        private tablesRepository: ITablesRepository
    ){}


    public async execute({number,available}: IRequest){
        const tableExists = await this.tablesRepository.findByNumber(number);

        if(tableExists){
            throw new Error("Table already exists.")
        }

        const table = await this.tablesRepository.create({
            number,
            available
        });
    }
}

export default CreateTableUseCase;
