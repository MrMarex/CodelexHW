import express from "express";
import { Request, Response } from "express";
import bodyparser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import jokes from "./schema/jokes";

mongoose.set('strictQuery', false);

type Joke = {
  joke: string;
  id: number;
};

//Link to your database
mongoose.connect("mongodb://localhost:27017/jokes");

const app = express();

app.use(bodyparser.json());
app.use(cors({ origin: "*" }));

app.get("/", (req: Request, res: Response) => {
  res.send("Application works!");
});

app.get("/jokes", (req: Request, res: Response) => {
  jokes
    .find()
    .then((data) => res.json(data))
    .catch((err) => res.send(err));
});


app.post("/jokes", (req: Request<any, any, Joke>, res: Response) => {
  const joke = req.body;
  jokes
    .findOne({ id: joke.id })
    .then((existingJoke) => {
      if (existingJoke) {
        res.status(400).send("Joke with same ID already exists");
      } else {
        jokes
          .create(joke)
          .then((data) => res.json(data))
          .catch((err) => res.send(err));
      }
    })
    .catch((err) => res.send(err));
});

app.delete("/jokes/:id", (req: Request, res: Response) => {
  jokes
    .deleteOne({ id: req.params.id })
    .then(() => res.json("Item deleted!"))
    .catch((err) => res.send(err));
});

app.listen(3004, () => {
  console.log("Application is working on port 3004!");
});