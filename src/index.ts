import express from "express";
import "dotenv/config";
import cors from "cors";
import { db } from "./config";

import taskRouter from "./task-manager/router";

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Server Task Manager App by Mkhotami Rais");
});

app.use("/api", taskRouter);

db.then(() => {
  console.log("Database connected");
  app.listen(port, () => {
    console.log(`App is running on http://localhost:${port}`);
  });
}).catch((err) => {
  console.error("Failed to connect to database:"), err;
});

export default app;
