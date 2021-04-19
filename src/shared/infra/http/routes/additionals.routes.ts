import CreateAdditionalController from "@modules/Products/useCases/createAdditional/CreateAdditionalController";
import {Router} from "express";


const additionalRoutes = Router();


const createAdditionalController = new CreateAdditionalController();
additionalRoutes.post("/", createAdditionalController.handle);

export default additionalRoutes;