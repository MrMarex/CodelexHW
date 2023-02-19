import express from "express";
import cors from "cors";
const mongoose = require("mongoose");
import AnimalType from "../Types/AnimalType";
import { Animal } from "./models/animal";

mongoose.set("strictQuery", false);

const app = express();
app.use(express.json());
app.use(cors());

const port = 5000;

mongoose
  .connect("mongodb://localhost:27017/animals", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Failed to connect to MongoDB:", err);
  });

app.get("/animals", async (_, res) => {
  const animals = await Animal.find();
  res.send(animals);
});

app.post("/add-animal", async ({ body }, res) => {
  const animal: AnimalType = body;

  try {
    const newAnimal = new Animal(animal);
    const insertedAnimal = await newAnimal.save();
    res.status(201).json(insertedAnimal);
  } catch (err) {
    console.error(err);
    res.status(500).send("Failed to add animal to database");
  }
});

app.delete("/animals/:id", async ({ params }, res) => {
  const { id } = params;
  await Animal.findByIdAndDelete(id);
  res.send("Animal deleted successfully");
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
