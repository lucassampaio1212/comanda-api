import CreateProductController from "@modules/Products/useCases/createProduct/CreateProductController";
import UploadProductsImageController from "@modules/Products/useCases/uploadProductsImage/UploadProductsImageController";
import {Router} from "express";
import multer from "multer";
import ensureAdmin from "../middleware/ensureAdmin";
import ensureAuthenticated from "../middleware/ensureAuthenticate";
import uploadConfig from "config/upload";

const productsRouter = Router();

const uploadProduct = multer(uploadConfig);

const createProductController = new CreateProductController();

const uploadProductsImage = new UploadProductsImageController();





productsRouter.post("", ensureAuthenticated, ensureAdmin, createProductController.handle);
productsRouter.post("/images/:id", ensureAuthenticated, ensureAdmin, uploadProduct.array("images") ,uploadProductsImage.handle);


export default productsRouter;
