//password:jou445qwDfbuCUQJ

import express, { Express } from "express";
import mongoose from "mongoose";
import financialRecordRouter from "./routes/financial-records"
import cors from "cors";

const app: Express = express();
const port = process.env.PORT || 3005;

app.use(express.json());
app.use(cors());

const mongoURI: string ="mongodb+srv://raosiddharth2004:jou445qwDfbuCUQJ@mymoney.oe0v7kp.mongodb.net/"

mongoose
  .connect(mongoURI)
  .then(() => console.log("CONNECTED TO MONGODB!"))
  .catch((err) => console.error("Failed to Connect to MongoDB:", err));

  app.use("/financial-records",financialRecordRouter)

app.listen(port, () => {
  console.log(`Server Running on Port ${port}`);
});