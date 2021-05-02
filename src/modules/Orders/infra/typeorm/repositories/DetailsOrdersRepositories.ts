import { ICreateDetailOrderDTO } from "@modules/Orders/dtos/CreateDetailOrderDTO";
import { IDetailOrdersRepository } from "@modules/Orders/repositories/IDetailOrdersRepository";
import { getRepository, Repository } from "typeorm";
import DetailOrders from "../entities/DetailOrders";




class DetailsOrdersRepositories implements IDetailOrdersRepository {
    private repository: Repository<DetailOrders>

    constructor(){
        this.repository = getRepository(DetailOrders);
    }



   public async create({ product_id, order_id, quantity, amount, note }: ICreateDetailOrderDTO): Promise<DetailOrders> {
        const detailOrder = this.repository.create({
            product_id,
            order_id,
            quantity,
            amount,
            note,
        });

        await this.repository.save(detailOrder);

        return detailOrder;
    }

}
export default DetailsOrdersRepositories;