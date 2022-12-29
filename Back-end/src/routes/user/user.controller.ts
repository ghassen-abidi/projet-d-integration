import { Handler } from "express";
import * as service from "./user.service";

export const login: Handler = (req, res) => {
  const { email, password } = req.body;
  const token = service.login(email, password);
  return res.send({ token });
};
