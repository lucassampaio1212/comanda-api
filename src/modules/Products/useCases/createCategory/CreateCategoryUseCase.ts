import ICategoriesRepository from "@modules/Products/repositories/ICategoriesRepository";
import { inject, injectable } from "tsyringe";



interface IRequest {
    name: string;
}

@injectable()
class CreateCategoryUseCase {
    constructor(
        @inject("CategoriesRepository")
        private categoriesRepository: ICategoriesRepository
    ) {}
    public async execute({ name}: IRequest): Promise<void> {
        const categoryExists = await this.categoriesRepository.findByName(name);

        if (categoryExists) {
            throw new Error("Category already exists!");
        }

        const newCategory = await this.categoriesRepository.create({
            name,
        });

        return newCategory;
    }
}
export default CreateCategoryUseCase;
