const mongoose = require("mongoose");
const UserModel = require("./user.model");
const jwt = require("jsonwebtoken");
const blogModel = require("./blog.model");
express = require("express");
const cors = require("cors");

port = 8080;
app = express();
app.use(cors());
app.use(express.json());

app.post("/login", async (req, res) => {
  try {
    user = await UserModel.findOne(req.body);

    if (user) {
      console.log("done");
      let token = jwt.sign({ user }, "1234");
      res.send({ token: token });
    } else {
      res.send("login fail");
    }
  } catch (err) {
    console.log(err);
  }

  res.send("hi");
});

app.post("/signup", async (req, res) => {
  try {
    user = await UserModel.create(req.body);
  } catch (err) {
    console.log(err);
  }

  res.send("hi");
});

app.post("/blogpost", async (req, res) => {
  try {
    blog = await blogModel.create(req.body);
    res.send("blog posted")
    console.log(blog)
  } catch (err) {
    console.log(err);
  }
});


app.get("/blogpost", async (req, res) => {
  try {
    blog = await blogModel.find();
    res.send(blog)
    console.log(blog)
  } catch (err) {
    console.log(err);
  }
});

app.get("/", (req, res) => {
  res.send("hi");
});

mongoose.connect("mongodb://127.0.0.1:27017/b21").then(() => {
  app.listen(port, () => {
    console.log("started on 8080");
  });
});
