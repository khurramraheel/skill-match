import mongoose from "mongoose";

const MONGO_URI = process.env.MONGO_URI; // ✅ Ensure environment variable is set

export const connectDB = async () => {
    if (mongoose.connection.readyState >= 1) {
        return; // ✅ Already connected
    }

    try {
        await mongoose.connect(MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("✅ MongoDB Connected Successfully");
    } catch (error) {
        console.error("❌ MongoDB Connection Error:", error);
        process.exit(1);
    }
};
