import { ICreateOrdersDTO } from "../dtos/CreateOrdersDTO";
import Orders from "../infra/typeorm/entities/Orders";




export interface IOrdersRepository {

    create({user_id,table_id,amount,situation}:ICreateOrdersDTO):Promise<Orders>


}