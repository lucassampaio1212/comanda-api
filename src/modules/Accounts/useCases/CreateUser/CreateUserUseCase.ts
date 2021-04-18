import User from "@modules/Accounts/infra/typeorm/entities/User";
import IUsersRepository from "@modules/Accounts/repositories/IUsersRepository";
import {hash} from "bcrypt";
import { inject, injectable } from "tsyringe";

interface IRequest {
    name: string;
    email: string;
    password: string;
}


@injectable()
class CreateUserUseCase {

    constructor(
        @inject("UsersRepository")
        private usersRepository: IUsersRepository
    ){}

    public async execute({name,email,password}: IRequest):Promise<User>{
        const checkUsersExists = await this.usersRepository.findByEmail(email);

        if(checkUsersExists){
            throw new Error("Email address already used.")
        }

        const passwordHash = await hash(password, 8);

        const user = await this.usersRepository.create({
            name,
            email,
            password: passwordHash,
        })


        return user;

    }
}
export default CreateUserUseCase;
