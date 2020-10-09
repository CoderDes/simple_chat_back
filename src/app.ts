import express from "express";

const port: string | number = process.env.PORT || 3000;

const app: express.Application = express();

app.get("/", (req, res) => {
  res.send("hi");
});

app.listen(port, () => {
  console.log(`Server start to listen on port ${port}`);
});
