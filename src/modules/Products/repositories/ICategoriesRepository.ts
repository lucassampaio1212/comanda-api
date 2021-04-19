import ICreateCategoryDTO from "../dtos/ICreateCategoryDTO";
import Category from "../infra/typeorm/entities/Category";


interface ICategoriesRepository {
    findByName(name: string): Promise<Category | undefined>;
    list(): Promise<Category[]>;
    findById(id: string): Promise<Category>
    create({ name }: ICreateCategoryDTO): Promise<void>;
}
export default ICategoriesRepository;