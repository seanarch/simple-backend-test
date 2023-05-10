import express, { Request, Response } from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import morgan from "morgan";

const app = express();
const PORT = 8000;

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello world");
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
