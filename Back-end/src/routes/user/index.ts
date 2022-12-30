import { Router } from "express";
import { validate } from "../../middlewares/validate";
import * as controller from "./user.controller";
import * as schema from "./user.schema";

const route = Router();

route.post("/login", validate(schema.login), controller.login);
route.post("/register",validate(schema.register),controller.register)
route.put("/approuve/:id",controller.approuve)
route.delete("/reject/:id",controller.reject)
route.get("/",controller.getall)
route.get("/me",controller.getMyData)

export default route;
