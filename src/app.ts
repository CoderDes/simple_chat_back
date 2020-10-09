import express from "express";
import mongoose from "mongoose";

import api from "./api/index";

const port: string | number = process.env.PORT || 3000;

const app: express.Application = express();

mongoose.connect("mongodb://localhost:27017/simple_chat", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const database = mongoose.connection;

database.on("open", () => {
  console.log("We are connected to MongoDB. Success.");
});

database.on("error", (err: Error) => {
  console.log(`DB connection error! ${err}`);
  process.exit(1);
});

app.use(express.json());
app.use("/api", api);

app.listen(port, () => {
  console.log(`Server start to listen on port ${port}`);
});
