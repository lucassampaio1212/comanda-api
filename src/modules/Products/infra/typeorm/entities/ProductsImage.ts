import { Column, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuidV4 } from "uuid";

@Entity("products_imagens")
class ProductImage {

    @PrimaryColumn("uuid")
    id: string;

    @Column()
    product_id: string;

    @Column()
    image_name: string;

    @Column()
    created_at: Date;


    constructor() {
        if(!this.id) {
            this.id = uuidV4()

        }
    }
}
export default ProductImage;
