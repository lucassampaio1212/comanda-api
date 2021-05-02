import { Router } from "express";
import additionalRoutes from "./additionals.routes";
import authenticateRoutes from "./authenticate.routes";
import categoriesRoutes from "./categories.routes";
import detailOrdersRoutes from "./detailOrders.routes";
import passwordRouter from "./password.routes";
import productsRouter from "./products.routes";
import tablesRoutes from "./tables.routes";
import usersRoutes from "./users.routes";


const router = Router();

router.use(authenticateRoutes);
router.use("/users", usersRoutes);
router.use("/tables", tablesRoutes);
router.use("/categories", categoriesRoutes);
router.use("/additionals", additionalRoutes);
router.use("/password", passwordRouter);
router.use("/product", productsRouter);
router.use("/orders", detailOrdersRoutes);


export default router;
