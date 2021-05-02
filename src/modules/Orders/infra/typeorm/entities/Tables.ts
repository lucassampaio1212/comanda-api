import { Column, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuidV4 } from "uuid";

@Entity('tables')
class Tables {
    @PrimaryColumn("uuid")
    id: string;

    @Column()
    number: number;

    @Column()
    available: boolean;

    @Column()
    created_at: Date;


    constructor(){
        if(!this.id){
            this.id = uuidV4();
        }
    }
}
export default Tables;
