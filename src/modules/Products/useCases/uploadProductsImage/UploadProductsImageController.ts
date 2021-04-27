import { Request, Response } from "express";
import { container } from "tsyringe";
import UploadProductsImageUseCase from "./UploadProductsImageUseCase";




interface IFiles {
    filename: string;
}

class UploadProductsImageController {


    public async handle(request:Request, response: Response):Promise<Response>{
        const {id} = request.params;
        const images = request.files as IFiles[];

        const uploadProductsImageUseCase = container.resolve(UploadProductsImageUseCase);


        const images_name = images.map((file) => file.filename);

        await uploadProductsImageUseCase.execute({
            product_id: id,
            images_name,
            
        });

        return response.status(201).send()
    }
}
export default UploadProductsImageController;