import { ICreateDetailOrderDTO } from "../dtos/CreateDetailOrderDTO";
import DetailOrders from "../infra/typeorm/entities/DetailOrders";




export interface IDetailOrdersRepository {

    create({product_id,order_id,quantity,amount,note}:ICreateDetailOrderDTO): Promise<DetailOrders>


}