import Category from "@modules/Products/infra/typeorm/entities/Category";
import IAdditionalsRepository from "@modules/Products/repositories/IAdditionalsRepository";
import ICategoriesRepository from "@modules/Products/repositories/ICategoriesRepository";
import { inject, injectable } from "tsyringe";


interface IRequest {
    category_id: string;
    additionals_id: string[];
}

@injectable()
class CreateAdditionaCategorylUseCase {
    constructor(
        @inject("CategoriesRepository")
        private categoriesRepository: ICategoriesRepository,
        @inject("AdditionalRepository")
        private additionalRepository: IAdditionalsRepository
    ) {}
    async execute({category_id,additionals_id}: IRequest): Promise<Category> {
        const categoryExists = await this.categoriesRepository.findById(category_id);

        if (!categoryExists) {
            throw new Error("Category does not exist");
        }

        const additionals = await this.additionalRepository.findByIds(
            additionals_id
        );
        categoryExists.additionails = additionals;

        return categoryExists;
    }
}
export default CreateAdditionaCategorylUseCase;
