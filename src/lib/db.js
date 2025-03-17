import mongoose from "mongoose";

const MONGODB_URI = process.env.DB_URI;

if (!MONGODB_URI) {
  throw new Error("❌ DB_URI environment variable not found in .env.local");
}

export const connectDB = async () => {
  if (mongoose.connection.readyState >= 1) {
    console.log("✅ Already connected to MongoDB");
    return;
  }

  try {
    await mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("✅ MongoDB Connected Successfully!");
  } catch (error) {
    console.error("❌ MongoDB Connection Error:", error);
  }
};

connectDB();
