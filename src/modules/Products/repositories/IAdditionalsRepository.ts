import ICreateAdditionalDTO from "../dtos/ICreateAdditionalDTO";
import Additional from "../infra/typeorm/entities/Additional";




interface IAdditionalsRepository {
    create({description, amount}: ICreateAdditionalDTO): Promise<Additional>
    findByName(description: string): Promise<Additional | undefined>;
    findByIds(ids: string[]): Promise<Additional[]>;
}
export default IAdditionalsRepository;
