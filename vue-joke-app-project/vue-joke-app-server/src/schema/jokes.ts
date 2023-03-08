import mongoose from "mongoose";

const jokeSchema = new mongoose.Schema({
  joke: {
    type: String,
    require: true,
  },
  id: {
    type: Number,
    require: true,
  },
  category: {
    type: String,
    require: true,
  },
});

export default mongoose.model("Jokes", jokeSchema);
