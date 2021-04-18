import { sign, verify } from "jsonwebtoken";
import { inject, injectable } from "tsyringe";

import authConfig from "@config/authConfig";
import IDateProvider from "@shared/container/providers/DateProvider/IDateProvider";
import { IUsersTokensRepository } from "@modules/Accounts/repositories/IUsersTokenRepository";

interface IPayload {
    sub: string;
    email: string;
}
interface ITokenResponse {
    token: string;
    refresh_token: string;
}

@injectable()
class RefreshTokenUseCase {
    constructor(
        @inject("UsersTokensRepository")
        private usersTokensRepository: IUsersTokensRepository,

        @inject("DateProvider")
        private dateProvider: IDateProvider
    ) {}

    async execute(token: string): Promise<ITokenResponse> {
        const { email, sub } = verify(
            token,
            authConfig.secret_refresh_token
        ) as IPayload;

        const user_id = sub;

        const userToken = await this.usersTokensRepository.findByUserIdAndRefreshToken(
            user_id,
            token
        );

        if (!userToken) {
            throw new Error("Refresh Token does not exists!");
        }

        await this.usersTokensRepository.deleteById(userToken.id);

        const refresh_token = sign({ email }, authConfig.secret_refresh_token, {
            subject: sub,
            expiresIn: authConfig.expires_in_refresh_token,
        });

        const expires_date = this.dateProvider.addDays(
            authConfig.expires_refresh_token_days
        );

        await this.usersTokensRepository.create({
            expires_date,
            refresh_token,
            user_id,
        });
        const newToken = sign({ email }, authConfig.secret_token, {
            subject: user_id,
            expiresIn: authConfig.expires_in_token,
        });
        return {
            refresh_token,
            token: newToken,
        };
    }
}

export { RefreshTokenUseCase };