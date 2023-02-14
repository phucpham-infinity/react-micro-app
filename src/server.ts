import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";

import { demo } from "@/router";
import { env } from "@/helpers";

if (!env("PORT")) {
  process.exit(1);
}

const PORT: number = +env("PORT");

export const app = express();
app.use(morgan("combined"));

app.use(
  helmet({
    contentSecurityPolicy: false,
    frameguard: false,
    crossOriginEmbedderPolicy: false,
    crossOriginOpenerPolicy: false,
    crossOriginResourcePolicy: false,
  })
);
app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json());
app.use(express.static("dist"));

app.use("/", [demo]);

app.get("*", (_, res) => {
  res.sendFile("dist/index.html", { root: "./" });
});

app
  .listen(PORT, () => {
    console.log(`Server started on port ${PORT}: http://localhost:${PORT}`);
  })
  .on("error", (err) => {
    console.log("ERROR: ", err);
  });
