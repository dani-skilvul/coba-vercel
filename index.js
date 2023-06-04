const express = require("express");

const app = express();

app.get("/", (req, res) => {
  return res.json({
    message: "Mianya hebat",
  });
});

app.listen(3030, () => {
  console.log("server running...");
});
