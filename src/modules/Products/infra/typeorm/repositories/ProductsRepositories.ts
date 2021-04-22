import ICreateProductDTO from "@modules/Products/dtos/ICreateProductDTO";
import IProductsRepository from "@modules/Products/repositories/IProductsRepository";
import { getRepository, Repository } from "typeorm";
import Product from "../entities/Products";




class ProductsRepositories implements IProductsRepository {
    private repository: Repository<Product>

    constructor() {
        this.repository = getRepository(Product)
    }

    public async create({ description, amount, situation, category_id, id }: ICreateProductDTO): Promise<Product> {
        const product = this.repository.create({
            id,
            description,
            amount,
            category_id,
            situation
        });

        await this.repository.save(product);

        return product;
    }
}
export default ProductsRepositories;
