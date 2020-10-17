import express from "express";
import mongoose from "mongoose";
import session from "express-session";
import connectMongo from "connect-mongo";

import api from "./api/index";
import { generateSessionKey } from "./api/utils";

const port: string | number = process.env.PORT || 3001;

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

const MongoStore = connectMongo(session);

app.set("trust proxy", 1);
app.use(
  session({
    secret: generateSessionKey(),
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true },
    store: new MongoStore({
      mongooseConnection: mongoose.connection,
      stringify: false,
    }),
  }),
);

app.use(express.json());
app.use("/api", api);

app.listen(port, () => {
  console.log(`Server start to listen on port ${port}`);
});
