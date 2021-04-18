import authConfig from "@config/authConfig";
import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

interface ITokenPayload {
    sub: string;
}

export default async function ensureAuthenticated(
    request: Request,
    response: Response,
    next: NextFunction
) {
    const authHeader = request.headers.authorization;

    if (!authHeader) {
        throw new Error("JWT token is missing");
    }

    const [, token] = authHeader.split(" ");

    try {
        const { sub: user_id } = verify(
            token,
            authConfig.secret_token
        ) as ITokenPayload;

        request.user = {
            id: user_id,
        };
        return next();
    } catch {
        throw new Error("Invalid JWT token");
    }
}
