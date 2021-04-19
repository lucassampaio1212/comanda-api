import CreateAdditionalController from "@modules/Products/useCases/createAdditional/CreateAdditionalController";
import CreateAdditionalCategoryController from "@modules/Products/useCases/CreateAdditionalCategory/CreateAdditionalController";
import CreateCategoryController from "@modules/Products/useCases/createCategory/CreateCategoryController";
import { Router } from "express";


const categoriesRoutes = Router();


const createCategoryController = new CreateCategoryController();
const createAdditionalCategoryController = new CreateAdditionalCategoryController();

categoriesRoutes.post("/", createCategoryController.handle);
categoriesRoutes.post("/additionals/:id",createAdditionalCategoryController.handle)

export default categoriesRoutes;