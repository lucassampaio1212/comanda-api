import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import {v4 as uuidV4} from "uuid";
import Category from "./Category";


@Entity("products")
class Product {
    @PrimaryColumn("uuid")
    id: string;

    @Column()
    description: string;

    @Column()
    amount: number;

    @Column()
    situation: string;

    @ManyToOne(() => Category)
    @JoinColumn({name: "category_id"})
    category: Category;

    @Column()
    category_id: string;

    @CreateDateColumn()
    created_at: Date;


    constructor() {
        if(!this.id) {
            this.id = uuidV4()
        }
    }


}
export default Product;