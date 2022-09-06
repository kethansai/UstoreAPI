const router = require("express").Router();
const Users = require("../models/Users");
const Todos = require("../models/Todos");

router.post("/login", async (req, res) => {
  try {
    const data = await Users.find({ email: req.body.email });
    if (data.length === 1) {
      if (data[0].password === req.body.password) {
        res.send({
          message: "Login successfull",
          email: data[0].email,
          token: data[0]._id,
        });
      } else {
        res.send({ message: "Wrong Password" });
      }
    } else {
      res.send({ message: "User not found!" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
});
router.post("/register", async (req, res) => {
  try {
    const data = await Users.find({ email: req.body.email });
    if (data.length < 1) {
      const user = new Users(req.body);
      const resp = await user.save();
      res.send(resp);
    } else {
      res.send({ message: "User already found!" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

module.exports = router;
