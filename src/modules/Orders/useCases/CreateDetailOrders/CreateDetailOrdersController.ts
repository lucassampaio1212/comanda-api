import { Request, Response } from "express";
import { container } from "tsyringe";
import CreateDetailOrdersUseCase from "./CreateDetailOrdersUseCase";




class CreateDetailOrdersController {



    public async handle(request: Request, response: Response ):Promise<Response>{
        const {
            product_id,
            order_id,
            quantity,
            amount,
            note
        } = request.body;


        const createDetailOrdersUseCase = container.resolve(CreateDetailOrdersUseCase);

        const detailOrder = await createDetailOrdersUseCase.execute({
            product_id,
            order_id,
            quantity,
            amount,
            note
        });

        return response.status(201).json(detailOrder);

    }
}
export default CreateDetailOrdersController;