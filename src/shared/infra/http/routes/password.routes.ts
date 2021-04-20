import ResetPasswordUserController from "@modules/Accounts/useCases/resetPassword/ResetPasswordController";
import SendForgotPasswordMailController from "@modules/Accounts/useCases/sendForgotPasswordMail/SendForgotPasswordMailController";
import {Router} from "express";


const passwordRouter = Router();

const sendForgotPasswordController = new SendForgotPasswordMailController();

const resetPasswordController = new ResetPasswordUserController();

passwordRouter.post("/forgot", sendForgotPasswordController.handle);

passwordRouter.post("/reset", resetPasswordController.handle);

export default passwordRouter;