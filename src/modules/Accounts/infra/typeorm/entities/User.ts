import Orders from "@modules/Orders/infra/typeorm/entities/Orders";
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryColumn } from "typeorm";
import {v4 as uuidV4} from "uuid";

@Entity("users")
class User {
    @PrimaryColumn("uuid")
    id: string;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column()
    isAdmin: boolean;

    @OneToMany(() => Orders, orders => orders.user)
    orders: Orders[]

    @CreateDateColumn()
    created_at: Date;


    constructor() {
        if(!this.id){
            this.id = uuidV4()
        }
    }
}
export default User;
