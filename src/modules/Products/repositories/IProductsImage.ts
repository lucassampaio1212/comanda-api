import ProductImage from "../infra/typeorm/entities/ProductsImage";




interface IProductsImage {
    create(product_id: string, image_name: string): Promise<ProductImage>
}
export default IProductsImage;
