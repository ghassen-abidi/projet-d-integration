import { Handler } from "express";
import * as service from "./event.service";
export const create: Handler = (req, res) => {
  const body = req.body;
  const data = service.create(body);
  return res.send(data);
  };
export const getall: Handler = (req, res) => {
    const data = service.getall();
    return res.send(data);
  }
  //unchecked
  export const unchecked :Handler =(req,res)=>{
    const data = service.unchecked();
    return res.send(data);
  }
//approuve 
export const approuve :Handler =(req,res)=>{
    const data = service.approuve();
    return res.send(data);
    }
//reject    
export const reject :Handler =(req,res)=>{
    const data = service.reject();
    return res.send(data);
    }
export const getAllEvent: Handler = (req, res) => {
    const data = service.getall();
    return res.send(data);
  }
//get event by id
export const getEventById: Handler = (req, res) => {
    const id = req.params.id;
    const data = service.getEventById(id);
    return res.send(data);
  }

