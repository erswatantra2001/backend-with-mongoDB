import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./db";

dotenv.config({
  path: "../../env",
});

cors();

const app = express();
const PORT = process.env.PORT;

connectDB();