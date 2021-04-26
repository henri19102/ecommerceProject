const dotenv = require("dotenv");
const express = require("express");
const models = require("../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

dotenv.config();

const User = models.User;

const router = express.Router();

router.get("/", async (req, res) => {
  const users = await User.findAll();
  return res.json(users);
});

router.post("/", async (req, res) => {
  try {
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    const user = {
      name: req.body.name,
      email: req.body.email,
      password: hashedPassword,
    };
    await User.create(user);
    res.status(201).send();
  } catch {
    res.status(500).send();
  }
});

router.post("/login", async (req, res) => {
  const user = await User.findOne({ where: { name: req.body.name } });
  if (user == null) {
    return res.status(400).send("no user found");
  }
  try {
    if (await bcrypt.compare(req.body.password, user.password)) {
      const token = jwt.sign({ name: user.name }, process.env.TOKEN_SECRET);
      return res.status(200).send({ token, name: user.name, id: user.id });
    }
    return res.status(400).send("wrong password");
  } catch {
    res.status(500).send();
  }
});

const checkToken = (req, res, next) => {
    const token = req.headers['authorization'].split(' ')[1]
    if (token == null) return res.sendStatus(401)

    jwt.verify(token, process.env.TOKEN_SECRET, (error, user) => {
        if (error) return res.sendStatus(403)
        req.user = user
        next()
    })
}

module.exports = router;
