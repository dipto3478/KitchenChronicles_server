const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;

const chefData = require("./data/chefData.json");

app.use(cors());
app.get("/", (req, res) => {
  res.send("server running..........");
});
app.get("/chefs", (req, res) => {
  res.send(chefData);
});
app.get("/chefs/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const chef = chefData.find((cd) => cd.chef.id === id);
  res.send(chef);
});
app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
