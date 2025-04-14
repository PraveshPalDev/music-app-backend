import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

// Required for `__dirname` in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Set the correct path to the .env files inside src/
const envFile = `.env.${process.env.NODE_ENV || "development"}`;
const envPath = path.resolve(__dirname, "./", envFile);

dotenv.config({ path: envPath }).parsed;

// Log loaded environment variables for debugging
console.log(`Loaded environment: ${process.env.NODE_ENV}`);
console.log(`DATABASE_URL: ${process.env.DATABASE_URL}`);

const config = {
  port: process.env.PORT || 8000,
  dbUrl: process.env.DATABASE_URL,
  jwtSecret: process.env.JWT_SECRET,
};

export default config;
