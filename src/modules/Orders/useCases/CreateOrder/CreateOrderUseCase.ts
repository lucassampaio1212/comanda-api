import Orders from "@modules/Orders/infra/typeorm/entities/Orders";
import { IOrdersRepository } from "@modules/Orders/repositories/IOrdersRepository";



interface IRequest {
    user_id: string;
    table_id: string;
    amount: number;
    situation: string;
}



class CreateOrderUseCase {

    constructor(
        private ordersRepository: IOrdersRepository
    ){}


    public async execute({user_id,table_id,amount,situation}:IRequest):Promise<Orders>{
        const createOrder = await this.ordersRepository.create({
            user_id,
            table_id,
            amount,
            situation
        });

        return createOrder;

    }
}
export default CreateOrderUseCase;