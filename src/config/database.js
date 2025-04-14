import dotenv from "dotenv";
import mongoose from "mongoose";
import path from "path";
import { fileURLToPath } from "url";

// Required for `__dirname` in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Dynamically load environment variables based on the environment
const envFile = `.env.${process.env.NODE_ENV || "development"}`;
const envPath = path.resolve(__dirname, "./", envFile);
dotenv.config({ path: envPath });

// MongoDB connection function
const connectDB = async () => {
  try {
    const dbURL = process.env.DATABASE_URL;
    if (!dbURL) {
      throw new Error(
        "DATABASE_URL is not defined in the environment variables."
      );
    }

    // Connect to MongoDB using the URL
    await mongoose.connect(dbURL);
    console.log("✅ Connected to MongoDB");
  } catch (error) {
    console.error("❌ Error in DB Config: Failed to connect to MongoDB");
    console.error("Details:", error.message);
    process.exit(1);
  }
};

export default connectDB;
