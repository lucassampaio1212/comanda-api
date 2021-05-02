import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import {v4 as uuidV4} from "uuid";

@Entity("detail_orders")
class DetailOrders {

    @PrimaryColumn("uuid")
    id: string;

    @Column()
    product_id: string;

    @Column()
    order_id: string;

    @Column()
    quantity: number;

    @Column()
    amount: number

    @Column()
    note: string;


    @CreateDateColumn()
    created_at: Date;


    constructor(){
        if(!this.id){
            this.id = uuidV4()
        }
    }

}
export default DetailOrders;