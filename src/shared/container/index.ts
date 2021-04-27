import { container } from "tsyringe";
import "@shared/container/providers/index";


import UsersRepository from "@modules/Accounts/infra/typeorm/repositories/UsersRepository";
import UsersTokensRepository from "@modules/Accounts/infra/typeorm/repositories/UsersTokensRepository";
import IUsersRepository from "@modules/Accounts/repositories/IUsersRepository";
import { IUsersTokensRepository } from "@modules/Accounts/repositories/IUsersTokenRepository";
import ICategoriesRepository from "@modules/Products/repositories/ICategoriesRepository";
import CategoriesRepositories from "@modules/Products/infra/typeorm/repositories/CategoriesRepositories";
import IAdditionalsRepository from "@modules/Products/repositories/IAdditionalsRepository";
import AdditionalsRepositories from "@modules/Products/infra/typeorm/repositories/AdditionalsRepositories";
import IProductsRepository from "@modules/Products/repositories/IProductsRepository";
import ProductsRepositories from "@modules/Products/infra/typeorm/repositories/ProductsRepositories";
import IProductsImage from "@modules/Products/repositories/IProductsImage";
import ProductsImagesRepositories from "@modules/Products/infra/typeorm/repositories/ProductsImagesRepositories";





container.registerSingleton<IUsersRepository>(
    "UsersRepository",
    UsersRepository
);
container.registerSingleton<IUsersTokensRepository>(
    "UsersTokensRepository",
    UsersTokensRepository
);
container.registerSingleton<ICategoriesRepository>(
    "CategoriesRepository",
    CategoriesRepositories
)
container.registerSingleton<IAdditionalsRepository>(
    "AdditionalRepository",
    AdditionalsRepositories
)
container.registerSingleton<IProductsRepository>(
    "ProductsRepository",
    ProductsRepositories
)
container.registerSingleton<IProductsImage>(
    "ProductsImages",
    ProductsImagesRepositories
)