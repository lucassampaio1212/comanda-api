import { container } from "tsyringe";
import "@shared/container/providers/index";


import UsersRepository from "@modules/Accounts/infra/typeorm/repositories/UsersRepository";
import UsersTokensRepository from "@modules/Accounts/infra/typeorm/repositories/UsersTokensRepository";
import IUsersRepository from "@modules/Accounts/repositories/IUsersRepository";
import { IUsersTokensRepository } from "@modules/Accounts/repositories/IUsersTokenRepository";





container.registerSingleton<IUsersRepository>(
    "UsersRepository",
    UsersRepository
);
container.registerSingleton<IUsersTokensRepository>(
    "UsersTokensRepository",
    UsersTokensRepository
);