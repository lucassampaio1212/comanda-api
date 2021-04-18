import ICreateUserDTO from "@modules/Accounts/dtos/ICreateUserDTO";
import IUsersRepository from "@modules/Accounts/repositories/IUsersRepository";
import { getRepository, Repository } from "typeorm";
import User from "../entities/User";




class UsersRepository implements IUsersRepository {
    private repository: Repository<User>

    constructor() {
        this.repository = getRepository(User);
    }
   async create({ name, email, password }: ICreateUserDTO): Promise<User> {
        const user = this.repository.create({
            name,
            email,
            password
        });

        await this.repository.save(user);

        return user;
    }
    async findById(id: string): Promise<User> {
        const user = await this.repository.findOne({id});
 
        return user;
     }
     async findByEmail(email: string): Promise<User> {
         const user = await this.repository.findOne({email});
 
         return user;
     }

}
export default UsersRepository;