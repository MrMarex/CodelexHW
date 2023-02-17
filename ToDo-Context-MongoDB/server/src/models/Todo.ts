//Cooment is error somehow
import mongoose from 'mongoose';

export interface ITodo extends mongoose.Document {
  text: string;
  completed: boolean;
  createdAt: Date;
}

const todoSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    required: true,
  },
  createdAt: {
    type: Date,
  },
});
export const Todo = mongoose.model<ITodo>('Todo', todoSchema);