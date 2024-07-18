import dotenv from "dotenv";
import express, { Application } from "express";
import Database from "./dataBase/db";
import { router } from "./routes/productRoutes";

dotenv.config();

const app: Application = express();

app.use(express.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT,DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.use("/product", router);

(async () => {
  const db: Database = Database.getInstance();
  await db.connect();

  app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
  });
})();
