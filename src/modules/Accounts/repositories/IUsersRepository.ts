import ICreateUserDTO from "../dtos/ICreateUserDTO";
import User from "../infra/typeorm/entities/User";



interface IUsersRepository {
    create({name,email,password}:ICreateUserDTO): Promise<User>;
    findByEmail(email: string): Promise<User>;
    findById(id:string): Promise<User>;
    
}
export default IUsersRepository;
