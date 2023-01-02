import "dotenv/config";
import express from "express";
import mongoose from "mongoose";
import routes from "./routes";
import bodyParser from "body-parser";
import cors from "cors";
import morgan from "morgan";

const port = Number(process.env.PORT || 4000);

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(morgan("dev"));

app.use(routes);

mongoose
  .connect(process.env.DB_URL || "")
  .then(() => {
    console.log("connected to database");
    app.listen(port, () => {
      console.log(`server is running on port @${port}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
