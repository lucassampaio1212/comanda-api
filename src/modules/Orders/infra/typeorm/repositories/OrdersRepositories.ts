import { ICreateOrdersDTO } from "@modules/Orders/dtos/CreateOrdersDTO";
import { IOrdersRepository } from "@modules/Orders/repositories/IOrdersRepository";
import { getRepository, Repository } from "typeorm";
import Orders from "../entities/Orders";





class OrdersRepositories implements IOrdersRepository {
    private repository: Repository<Orders>

    constructor(){
        this.repository = getRepository(Orders);
    }
   
   
   
    public async create({ user_id, table_id, amount, situation }: ICreateOrdersDTO): Promise<Orders> {
        const createOrder = this.repository.create({
            user_id,
            table_id,
            amount,
            situation
        });


        await this.repository.save(createOrder);

        return createOrder;
    }
    


    
}