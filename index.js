const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();

require("dotenv").config();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/users", require("./routes/User"));
app.use("/api/v1/todos/", require("./routes/Todos"));

mongoose
  .connect(process.env.DB_URL)
  .then(() => {
    console.log("Mongoose Connected Successfully");
  })
  .catch((err) => console.log(err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server Running at http://localhost:${PORT}`);
});
