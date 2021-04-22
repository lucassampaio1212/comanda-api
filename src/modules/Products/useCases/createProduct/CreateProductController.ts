import { Request, Response } from "express";
import { container } from "tsyringe";
import CreateProductUserCase from "./CreateProductUseCase";




class CreateProductController {


    public async handle(request: Request, response: Response): Promise<Response>{
        const {category_id, description, amount, situation} = request.body;


        const createProductUseCase = container.resolve(
            CreateProductUserCase
        )

        const product = await createProductUseCase.execute({
            category_id,
            description,
            amount,
            situation
        });

        return response.status(201).json(product);

    }
}
export default CreateProductController;
