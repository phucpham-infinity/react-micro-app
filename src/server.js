const express = require("express");
const cors = require("cors");

const app = express();
const port = 5050;
app.use(cors());
app.use(express.static("dist"));

app.get("*", (req, res) => {
  res.sendFile("index.html", { root: "./" });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
