import { Handler } from "express";
import * as service from "./user.service";

export const login: Handler = (req, res) => {
  const { email, password } = req.body;
  const token = service.login(email, password);
  return res.send({ token });
};
export const register: Handler = (req, res) => {
  const body = req.body;
  const data = service.register(body);
  return res.send(data);
};
export const approuve: Handler = (req, res) => {
  const id= req.params.id;
  const data = service.approuve(id);
  return res.send(data);
};
export const reject: Handler = (req, res) => {
  const id= req.params.id;
  const data = service.approuve(id);
  return res.send(data);
};
export const getall: Handler = (req, res) => {
  const data = service.getall();
  return res.send(data);
}
export const getMyData: Handler = (req, res) => { 
  const id= req.params.id;
  const data = service.getMyData();
  return res.send(data);
}