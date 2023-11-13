const express = require("express");
const app = express();

app.use(express.json());

app.get("/", function (req, res) {
  res.send("hello world");
});

app.post("/users", function (req, res) {
  const user = req.body;

  res.status(201).send(user);
});

app.get("/users", function (req, res) {
  res.status(200).send([{ name: "Jhon" }, { name: "Cesar" }]);
});

module.exports = app;
