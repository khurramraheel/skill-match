import bcrypt from "bcryptjs";
import { connectDB } from "@/lib/db";  // Ensure your MongoDB connection file path is correct
import User from "@/model/user"; // Ensure you have a User model

export async function POST(req) {
  try {
    await connectDB(); // Connect to MongoDB
    const { email, password } = await req.json();

    const hashedPassword = await bcrypt.hash(password, 10);

    // Update user password in the database
    const user = await User.findOneAndUpdate(
      { email }, 
      { password: hashedPassword }, 
      { new: true, upsert: true }
    );

    return Response.json({ message: "Password saved successfully!", hashedPassword }, { status: 200 });
  } catch (error) {
    return Response.json({ error: "Server error", details: error.message }, { status: 500 });
  }
}
