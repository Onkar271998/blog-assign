const mongoose = require("mongoose");
const UserModel = require("./user.model");
const jwt = require("jsonwebtoken");
const blogModel = require("./blog.model");
express = require("express");
const cors = require("cors");
let nodemailer = require("nodemailer");
port = 8080;
app = express();
app.use(cors());
app.use(express.json());

app.post("/login", async (req, res) => {
  try {
    user = await UserModel.findOne(req.body);

    if (user) {
      console.log("done 1");
      let token = jwt.sign({ user }, "1234", {
        expiresIn: "1 min",
      });
      return res.send({ token: token });
    } else [console.log("err")];
  } catch (err) {
    console.log(err);
  }
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
    res.send("blog posted");
    // console.log(blog);
  } catch (err) {
    console.log(err);
  }
});

app.post("/blogpost1", async (req, res) => {
  let token = req.body.data.token;
  console.log(token);
  try {
    let jwttok = jwt.verify(token, "1234");
    if (jwttok) {
      blog = await blogModel.find();
      return res.send(blog);
    }
    return res.send("Token is expired");
  } catch (err) {
    console.log(err);
  }

  res.send("not verified");
});

app.post("/forgotpass", async (req, res) => {
  try {
    let user = await UserModel.findOne(req.body);
    if (user) {
      let otp = Math.ceil(Math.random() * 10000);
      console.log("verified");
      let transporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        auth: {
          user: "lawson.marks86@ethereal.email",
          pass: "3FqDkj31zyZxFQ1TVr",
        },
      });
      transporter.sendMail({
        from: "Onk7744@gmail.com",
        to: "	lawson.marks86@ethereal.email",
        subject: "Sending OTP",
        text: `${otp}`,
      });

      res.send({ otp: otp });
    }
  } catch (err) {
    console.log(err);
  }
});

app.post("/changepass", async (req, res) => {
  console.log(req.body.email);
  try {  
    let filter = { "email": req.body.email };
    let update = { "password": req.body.password };
    user = await UserModel.findOneAndUpdate(filter,update);
    // user = await UserModel.updateOne(
    //   { email: req.body.email },
    //   { $set: { password: req.body.password } }
    // );
    console.log("password updated"); 
  } catch (err) {
    console.log(err);
  }
});
app.get("/", async (req, res) => {
  res.send("hi");
});

mongoose.connect("mongodb://127.0.0.1:27017/b21").then(() => {
  app.listen(port, () => {
    console.log("started on 8080");
  });
});
