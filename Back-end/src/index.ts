import "dotenv/config";
import express from "express";
import mongoose from "mongoose";
import userRoutes from "./routes/user";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use("/user", userRoutes);

mongoose
  .connect(process.env.DB_URL || "")
  .then(() => {
    console.log("connected to database");
    app.listen(5000, () => {
      console.log("server is running on port 5000");
    });
  })
  .catch((err) => {
    console.log(err);
  });
