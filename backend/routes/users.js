const dotenv = require("dotenv");
const express = require("express");
const models = require("../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

dotenv.config();

const User = models.User;

const router = express.Router();

///  GET   ///

router.get("/", async (req, res) => {
  const users = await User.findAll();
  res.setHeader("Content-Range", "1");
  return res.json(users);
});

router.get("/:id", async (req, res) => {
  const user = await User.findOne({ where: { id: req.params.id } });
  return res.json(user);
});

///  GET   ///
/////////////
///  POST ///

router.post("/", async (req, res) => {
  try {
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    const user = {
      name: req.body.name,
      lastname: req.body.lastname,
      address: req.body.address,
      phonenumber: req.body.phonenumber,
      email: req.body.email,
      password: hashedPassword,
      isAdmin: req.body.isAdmin
    };
    const newUser = await User.create(user);
    res.status(201).send(newUser);
  } catch (e) {
    res.status(500).send();
  }
});

router.post("/login", async (req, res) => {
  const user = await User.findOne({ where: { name: req.body.name } });
  if (user === null) {
    return res.status(400).send("no user found");
  }
  try {
    if (await bcrypt.compare(req.body.password, user.password)) {
      const accessToken = jwt.sign(
        { name: user.name },
        process.env.TOKEN_SECRET
      );
      return res.status(200).send({
        accessToken,
        name: user.name,
        id: user.id,
        isAdmin: user.isAdmin,
        phonenumber: user.phonenumber,
        address: user.address,
        email: user.email,
        lastname: user.lastname
      });
    }
    return res.status(400).send("wrong password");
  } catch (e) {
    res.status(500).send();
  }
});

///  POST ///
/////////////
///  PUT ///

router.put("/:id", async (req, res) => {
  try {
    const { name, lastname, address, phonenumber, email, password, isAdmin } = req.body;
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);
    const user = await User.findOne({ where: { id: req.params.id } });
    user.name = name;
    user.lastname = lastname,
    user.address = address,
    user.phonenumber = phonenumber,
    user.email = email;
    user.password = hashedPassword;
    user.isAdmin = isAdmin;
    await user.save();
    return res.json(user);
  } catch (e) {
    res.status(500).send();
  }
});

///  PUT ///
/////////////
///  DELETE ///

router.delete("/:id", async (req, res) => {
  try {
    const user = await User.findOne({ where: { id: req.params.id } });
    await user.destroy();
    res.status(204).end();
  } catch (e) {
    res.status(500).send();
  }
});

///  DELETE ///

// eslint-disable-next-line no-unused-vars
const checkToken = (req, res, next) => {
  const token = req.headers["authorization"].split(" ")[1];
  if (token === null) return res.sendStatus(401);

  jwt.verify(token, process.env.TOKEN_SECRET, (error, user) => {
    if (error) return res.sendStatus(403);
    req.user = user;
    next();
  });
};

module.exports = router;
