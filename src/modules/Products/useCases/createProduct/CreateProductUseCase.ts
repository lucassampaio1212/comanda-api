import Product from "@modules/Products/infra/typeorm/entities/Products";
import IProductsRepository from "@modules/Products/repositories/IProductsRepository";
import { inject, injectable } from "tsyringe";


interface IRequest {
    category_id: string;
    description: string;
    amount: number;
    situation: string;

}
@injectable()
class CreateProductUserCase {

    constructor(
        @inject("ProductsRepository")
        private productsRepository: IProductsRepository
    ){}

    public async execute({category_id,description,amount,situation}: IRequest):Promise<Product>{
        const product = await this.productsRepository.create({
            category_id,
            description,
            amount,
            situation
        });

        return product;
    }
}
export default CreateProductUserCase;