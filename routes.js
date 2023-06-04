const express = require("express");

const route = express.Router();

route.get("/", (req, res) => {
  res.send("ini /");
});

route.get("/api/news", (req, res) => {
  res.send("ini /api/news");
});

module.exports = route;
