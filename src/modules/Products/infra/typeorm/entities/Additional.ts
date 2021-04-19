import { Column, CreateDateColumn, PrimaryColumn } from "typeorm";
import {v4 as uuidV4} from "uuid";

class Additional {
    @PrimaryColumn("uuid")
    id: string;

    @Column()
    name: string;

    @Column()
    amount: number;

    @CreateDateColumn()
    created_at: Date;

    constructor() {
        if(!this.id) {
            this.id = uuidV4()
        }
    }


}
export default Additional