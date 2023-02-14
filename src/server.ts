//@ts-nocheck
const express = require("express");
const cors = require("cors");

import { demo } from "./router";

const app = express();
app.use(connectLiveReload());

const port = 5050;
app.use(cors());
app.use(express.static("dist"));

app.use("/api/*", demo);

app.get("*", (req, res) => {
  res.sendFile("index.html", { root: "./" });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
