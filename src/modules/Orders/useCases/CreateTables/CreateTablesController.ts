import { Request, Response } from "express";
import { container } from "tsyringe";
import CreateTableUseCase from "./CreateTablesUseCase";



class CreateTablesController {


    public async handle(request: Request, response: Response):Promise<Response>{
        const {number, available} = request.body;

        const createTableUseCase = container.resolve(CreateTableUseCase);


        await createTableUseCase.execute({
            number,
            available
        });

        return response.status(201).send('Mesas criadas com sucesso.')
    }
}
export default CreateTablesController;