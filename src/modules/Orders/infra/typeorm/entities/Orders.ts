import User from "@modules/Accounts/infra/typeorm/entities/User";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryColumn } from "typeorm";
import { v4 as uuidV4 } from "uuid";

@Entity("orders_table")
class Orders {
    @PrimaryColumn("uuid")
    id: string;

    @ManyToOne(() => User, user => user.orders)
    user: User;

    @Column()
    user_id: string;

    @Column()
    table_id: string;

    @Column()
    amount: number;

    @Column()
    situation: string;

    constructor(){
        if(this.id){
            this.id = uuidV4();
        }
    }

}
export default Orders;