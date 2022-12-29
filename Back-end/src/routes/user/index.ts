import { Router } from "express";
import { validate } from "../../middlewares/validate";
import * as controller from "./user.controller";
import * as schema from "./user.schema";

const route = Router();

route.post("/login", validate(schema.login), controller.login);

export default route;
