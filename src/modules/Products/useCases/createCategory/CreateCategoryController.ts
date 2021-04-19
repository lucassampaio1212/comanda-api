import { Request, Response } from "express";
import { container } from "tsyringe";
import CreateCategoryUseCase from "./CreateCategoryUseCase";



class CreateCategoryController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { name } = request.body;

        const createUserCategoryUseCase = container.resolve(
            CreateCategoryUseCase
        );

       const category = await createUserCategoryUseCase.execute({ name });

        return response.status(201).json(category);
    }
}
export default CreateCategoryController;
