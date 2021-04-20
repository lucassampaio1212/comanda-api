import { Router } from "express";
import additionalRoutes from "./additionals.routes";
import authenticateRoutes from "./authenticate.routes";
import categoriesRoutes from "./categories.routes";
import passwordRouter from "./password.routes";
import usersRoutes from "./users.routes";


const router = Router();

router.use(authenticateRoutes);
router.use("/users", usersRoutes);
router.use("/categories", categoriesRoutes);
router.use("/additionals", additionalRoutes);
router.use("/password", passwordRouter);


export default router;
