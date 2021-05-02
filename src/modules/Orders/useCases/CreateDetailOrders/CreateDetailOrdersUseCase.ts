import DetailOrders from "@modules/Orders/infra/typeorm/entities/DetailOrders";
import { IDetailOrdersRepository } from "@modules/Orders/repositories/IDetailOrdersRepository";
import { inject, injectable } from "tsyringe";


interface IRequest {
    product_id: string;
    order_id: string;
    quantity: number;
    amount: number;
    note: string;   
}

@injectable()
class CreateDetailOrdersUseCase {

    constructor(
        @inject("DetailsOdersRepository")
        private detailOrdersRepository: IDetailOrdersRepository,
    ){}

    public async execute({product_id,order_id,quantity,amount,note}: IRequest):Promise<DetailOrders>{
        const detailOder = await this.detailOrdersRepository.create({
            product_id,
            order_id,
            quantity,
            amount,
            note
        });


        return detailOder;
    }
}
export default CreateDetailOrdersUseCase;