import { Router } from "express";
import additionalRoutes from "./additionals.routes";
import categoriesRoutes from "./categories.routes";
import usersRoutes from "./users.routes";


const router = Router();


router.use("/users", usersRoutes);
router.use("/categories", categoriesRoutes);
router.use("/additionals", additionalRoutes);


export default router;
