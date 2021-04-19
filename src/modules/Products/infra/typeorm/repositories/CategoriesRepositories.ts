import ICreateCategoryDTO from "@modules/Products/dtos/ICreateCategoryDTO";
import ICategoriesRepository from "@modules/Products/repositories/ICategoriesRepository";
import { getRepository, Repository } from "typeorm";
import Category from "../entities/Category";




class CategoriesRepositories implements ICategoriesRepository {
    private repository: Repository<Category>

    constructor() {
        this.repository = getRepository(Category);
    }



  async create({ name }: ICreateCategoryDTO): Promise<void> {
        const category = this.repository.create({
            name,
        });

        await this.repository.save(category);
    }

    async list(): Promise<Category[]> {
        const categories = await this.repository.find();
        return categories;
    }

    async findByName(name: string): Promise<Category | undefined> {
        const category = await this.repository.findOne({ name });
        return category;
    }

    async findById(id: string): Promise<Category>{
        const category = await this.repository.findOne({id});

        return category;
    }



}
export default CategoriesRepositories;