import { Request, Response } from "express";
import { container } from "tsyringe";
import CreateOrderUseCase from "./CreateOrderUseCase";





class CreateOrderController {



    public async handle(request: Request, response: Response):Promise<Response>{
        const {id} = request.user;
        const {table_id,amount,situation} = request.body;


        const createOrderUseCase = container.resolve(CreateOrderUseCase);

        const createOrder = await createOrderUseCase.execute({
            user_id: id,
            table_id,
            amount,
            situation,
        });


        return response.status(201).json(createOrder);
    }
}
export default CreateOrderController;
