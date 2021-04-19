import { Request, Response } from "express";
import { container } from "tsyringe";
import CreateAdditionaCategorylUseCase from "./CreateAdditionalCategoryUseCase";


class CreateAdditionalCategoryController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;
        const { additionals_id } = request.body;

        const createAdditionalCategoryUseCase = container.resolve(
            CreateAdditionaCategorylUseCase
        );

        const car = await createAdditionalCategoryUseCase.execute({
            category_id: id,
            additionals_id,
        });

        return response.json(car);
    }
}

export default CreateAdditionalCategoryController ;
