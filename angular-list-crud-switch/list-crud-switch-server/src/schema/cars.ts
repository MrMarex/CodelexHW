import mongoose from "mongoose";

const carSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  category: {
    type: String,
    require: true,
  },
});

export default mongoose.model("Cars", carSchema);
