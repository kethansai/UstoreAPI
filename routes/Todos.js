const router = require("express").Router();
const Users = require("../models/Users");
const Todos = require("../models/Todos");

router.post("/newTodo", async (req, res) => {
  try {
    const todo = new Todos(req.body);
    const resp = await todo.save();
    res.send(resp);
  } catch (err) {
    console.log(err);
    res.send(err);
  }
});
router.get("/allTodos", async (req, res) => {
  try {
    const todos = await Todos.find();
    res.send(todos);
  } catch (err) {
    console.log(err);
    res.send(err);
  }
});
router.post("/deleteTodo", async (req, res) => {
  try {
    const todo = await Todos.findByIdAndDelete(req.body.id);
    res.send(todo);
  } catch (err) {
    console.log(err);
    res.send(err);
  }
});
router.post("/setAsCompleted", async (req, res) => {
  try {
    const data = await Todos.findByIdAndUpdate(req.body.id, {
      completed: req.body.setAsCompleted,
    });
    res.send(data);
  } catch (err) {
    console.log(err);
    res.send(err);
  }
});
router.post("/updateTodo", async (req, res) => {
  try {
    const data = await Todos.findByIdAndUpdate(req.body.id, {
      title: req.body.title,
      remindAt: req.body.remindAt,
    });
    res.send(data);
  } catch (err) {
    console.log(err);
    res.send(err);
  }
});
module.exports = router;
