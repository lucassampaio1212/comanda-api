import ICreateAdditionalDTO from "@modules/Products/dtos/ICreateAdditionalDTO";
import IAdditionalsRepository from "@modules/Products/repositories/IAdditionalsRepository";
import { getRepository, Repository } from "typeorm";
import Additional from "../entities/Additional";




class AdditionalsRepositories implements IAdditionalsRepository {
    private repository: Repository<Additional>

    constructor () {
        this.repository = getRepository(Additional)
    }
    async create({ description, amount }: ICreateAdditionalDTO): Promise<Additional> {
        const additional = this.repository.create({description,amount});

        await this.repository.save(additional);


        return additional;
    }
    async findByName(description: string): Promise<Additional> {
        const additional = await this.repository.findOne({description})

        return additional;
    }
    async findByIds(ids: string[]): Promise<Additional[]> {
       const additional = await this.repository.findByIds(ids);

       return additional;
    }

    


}
export default AdditionalsRepositories;