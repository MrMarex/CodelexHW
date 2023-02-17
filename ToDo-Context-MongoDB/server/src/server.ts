//Cooment is error somehow
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
import { Todo } from "./models/Todo";

mongoose.set('strictQuery', true);

mongoose.connect('mongodb://localhost:27017/todo-list', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((err) => {
  console.error('Failed to connect to MongoDB:', err);
});

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

app.get('/todo', async (req, res) => {
  const todos = await Todo.find();
  res.send(todos);
});

app.post('/todo', async (req, res) => {
  const { text } = req.body;
  const now = new Date();
  const todo = {
    text,
    completed: false,
    createdAt: now,
  };
  await Todo.create(todo);
  res.send(todo);
});

app.put('/todo/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { text, completed } = req.body;
    const todo = await Todo.findById(id);
    todo.text = text;
    todo.completed = completed;
    await todo.save();
    res.send(todo);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal server error');
  }
});

app.delete('/todo/:id', async (req, res) => {
  const { id } = req.params;
  await Todo.findByIdAndDelete(id);
  res.send('Todo deleted successfully');
});

app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});
