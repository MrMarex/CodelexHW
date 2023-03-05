import express from "express";
import { Request, Response } from "express";
import bodyparser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import cars from "./schema/cars";

mongoose.set('strictQuery', false);

type Car = {
  name: string;
  category: string;
};

//Link to your database
mongoose.connect("mongodb://localhost:27017/cars");

const app = express();

app.use(bodyparser.json());
app.use(cors({ origin: "*" }));

app.get("/", (req: Request, res: Response) => {
  res.send("Application works!");
});

app.get("/cars", (req: Request, res: Response) => {
  cars
    .find()
    .then((data) => res.json(data))
    .catch((err) => res.send(err));
});

app.get("/cars/category/:category", (req: Request, res: Response) => {
  cars
    .find({ category: req.params.category })
    .then((data) => res.json(data))
    .catch((err) => res.send(err));
});

app.post("/cars", (req: Request<any, any, Car>, res: Response) => {
  const carBody = req.body;
  cars
    .create(carBody)
    .then((data) => res.json(data))
    .catch((err) => res.send(err));
});

app.delete("/cars/:id", (req: Request, res: Response) => {
  cars
    .deleteOne({ _id: req.params.id })
    .then(() => res.json("Item deleted!"))
    .catch((err) => res.send(err));
});

app.listen(3004, () => {
  console.log("Application is working on port 3004!");
});
