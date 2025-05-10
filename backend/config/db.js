// config/db.js
import mongoose from "mongoose";
import dotenv from "dotenv";

// ✅ Load env vars BEFORE using process.env
dotenv.config();

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ DB Connected");
  } catch (error) {
    console.error("❌ DB Connection Error:", error.message);
    process.exit(1);
  }
};
