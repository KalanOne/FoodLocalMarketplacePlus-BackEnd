import dotenv from "dotenv";

dotenv.config();

export const corsOptions = {
  origin: process.env.FRONTEND_URL,
};

export const saltRounds = 10;
