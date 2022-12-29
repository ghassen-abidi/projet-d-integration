import { Router } from "express";
import userRoutes from "./user";

const route = Router();

route.use("/user", userRoutes);

export default route;
