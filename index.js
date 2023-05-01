const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

const chefData = require("./data/chefData.json");

app.get("/", (req, res) => {
  res.send("server running..........");
});
app.get("/chefs", (req, res) => {
  res.send(chefData);
});
app.listen(port, () => {
  console.log(`server running on port ${port}`);
});