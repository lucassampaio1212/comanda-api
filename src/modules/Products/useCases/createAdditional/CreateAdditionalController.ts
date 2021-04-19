import { Request, Response } from "express";
import { container } from "tsyringe";
import CreateAdditionalUseCase from "./CreateAdditionalUseCase";




class CreateAdditionalController {

    public async handle(request:Request, response:Response): Promise<Response> {
        const {description, amount} = request.body;


        const createAdditionalUseCase = container.resolve(CreateAdditionalUseCase);

       const additional = await createAdditionalUseCase.execute({
            description,
            amount
        });

        return response.status(201).json(additional);

    }
}

export default CreateAdditionalController;
