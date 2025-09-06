const express = require("express");

const app = express();

app.use(express.json());

let todoList = [];
let taskId = 1;

//get a list of tasks
app.get("/", (req, res) => {
  res.json({todoList})
});

//get a task by id
app.get("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const task = todoList.find(t => t.id === id);
  if (!task) return res.status(404).json({ error: "Task not found" });
  res.json(task);
});

//create a new task
app.post("/add", (req, res) => {
  const {task} = req.body;

  if (!task) return res.status(400).json({ error: "Task is required" });

  const todo = {id: taskId++, task, status: "incomplete"}
  todoList.push(todo);
  res.status(201).json({ message: "add success", data: todo });
});

//update a task by id
app.put("/update/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const todo = todoList.find(t => t.id === id);
  if (!todo) return res.status(404).json({ error: "Task not found" });

  const { task, status } = req.body;
  todo.task = task;
  todo.status = status;

  res.status(200).json({ message: "update success", todo});
});

//delete a task by id
app.delete("/delete/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const index = todoList.findIndex(t => t.id === id);
  if (index === -1) return res.status(400).json({ error: "Invalid ID" });

  todoList.splice(index, 1);
  res.status(200).json({ message: "delete success", id});
});

app.listen(3000, () => {
  console.log("Todo List app running at http://localhost:3000");
});
