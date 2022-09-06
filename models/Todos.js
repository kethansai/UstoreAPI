const mongoose = require("mongoose");

const TodoSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    completed: {
      type: Boolean,
      default: false,
    },
    remindAt: {
      type: Date,
      required: true,
    },
  },
  { timestamps: true }
);

const Todos = mongoose.model("Todos", TodoSchema);
module.exports = Todos;
