import CreateDetailOrdersController from "@modules/Orders/useCases/CreateDetailOrders/CreateDetailOrdersController";
import {
    Router
} from "express";


const detailOrdersRoutes = Router();

const createDetailsOrdersController = new CreateDetailOrdersController();

detailOrdersRoutes.post("/", createDetailsOrdersController.handle);


export default detailOrdersRoutes;