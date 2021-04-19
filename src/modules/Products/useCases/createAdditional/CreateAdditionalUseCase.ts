import IAdditionalsRepository from "@modules/Products/repositories/IAdditionalsRepository";
import { inject, injectable } from "tsyringe";


interface IRequest {
    description: string;
    amount: number;
}

@injectable()
class CreateAdditionalUseCase {
    constructor(
        @inject("AdditionalRepository")
        private additionalRepository: IAdditionalsRepository
    ){}

    public async execute({description,amount}: IRequest):Promise<void>{
        const specificationAlreadExists = await this.additionalRepository.findByName(
            description
        );

        if (specificationAlreadExists) {
            throw new Error("Specification already exists!");
        }
        this.additionalRepository.create({ description, amount});
    }
}
export default CreateAdditionalUseCase;