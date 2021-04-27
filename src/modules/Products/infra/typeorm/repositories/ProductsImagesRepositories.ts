import IProductsImage from "@modules/Products/repositories/IProductsImage";
import { getRepository, Repository } from "typeorm";
import ProductImage from "../entities/ProductsImage";





class ProductsImagesRepositories implements IProductsImage {
    private repository: Repository<ProductImage>


    constructor(){
        this.repository = getRepository(ProductImage);
    }



    public async create(product_id: string, image_name: string): Promise<ProductImage> {
        const productImage = this.repository.create({
            product_id,
            image_name
        });

        await this.repository.save(productImage);


        return productImage;
    }
    
}
export default ProductsImagesRepositories;