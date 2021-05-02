import CreateTablesController from "@modules/Orders/useCases/CreateTables/CreateTablesController";
import { Router } from "express";



const tablesRoutes = Router();


const createTablesController = new CreateTablesController();


tablesRoutes.post("/",createTablesController.handle)

export default tablesRoutes;
