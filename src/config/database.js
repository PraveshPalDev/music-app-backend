import dotenv from "dotenv";
import mongoose from "mongoose";
const env = dotenv.config().parsed;

const connectDB = async () => {
  try {
    await mongoose.connect(env.DATABASE_URL);
    console.log("✅ Connected to MongoDB");
  } catch (error) {
    console.error("❌ Error in DB Config: Failed to connect to MongoDB");
    console.error("Details:", error.message);
    process.exit(1);
  }
};

export default connectDB;
