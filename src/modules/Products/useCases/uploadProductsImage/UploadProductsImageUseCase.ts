import ProductImage from "@modules/Products/infra/typeorm/entities/ProductsImage";
import IProductsImage from "@modules/Products/repositories/IProductsImage";
import { inject, injectable } from "tsyringe";



interface IRequest {
    product_id: string;
    images_name: string[];
}

@injectable()
class UploadProductsImageUseCase {

    constructor(
        @inject("ProductsImages")
        private uploadProductsImage: IProductsImage
    ){}


    public async execute({product_id,images_name}:IRequest):Promise<void>{
        images_name.map(async(image) => {
            await this.uploadProductsImage.create(product_id, image);
        })
    }


} 
export default UploadProductsImageUseCase;
