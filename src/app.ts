import express, { Request, Response } from "express";
import bodyParser from "body-parser";
import { Pool } from "pg";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl:
    process.env.NODE_ENV === "production"
      ? {
          rejectUnauthorized: false,
        }
      : undefined,
});

app.use(bodyParser.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to BudBunker!");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
