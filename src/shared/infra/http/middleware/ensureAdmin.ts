import { NextFunction, Request, Response } from "express";

import UsersRepository from "@modules/Accounts/infra/typeorm/repositories/UsersRepository";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default async function ensureAdmin(
    request: Request,
    response: Response,
    next: NextFunction
) {
    const { id } = request.user;

    const usersRepository = new UsersRepository();

    const user = await usersRepository.findById(id);

    if (!user.isAdmin) {
        throw new Error("User is not an administrator.");
    }
    next();
}
