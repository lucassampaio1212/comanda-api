import { Column, CreateDateColumn, Entity, JoinTable, ManyToMany, PrimaryColumn } from "typeorm";
import {v4 as uuidV4} from "uuid";
import Additional from "./Additional";

@Entity("categories")
class Category {
    @PrimaryColumn("uuid")
    id: string;

    @Column()
    name: string;
    
    @ManyToMany(() => Additional)
    @JoinTable({
        name: "categories_additional",
        joinColumns: [{name: "category_id"}],
        inverseJoinColumns: [{name: "additional_id"}]
    })
    additionails: Additional[]

    @CreateDateColumn()
    created_at: Date

    constructor() {
        if(!this.id) {
            this.id = uuidV4()
        }
    }

}
export default Category;