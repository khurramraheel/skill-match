import { connectDB } from "@/lib/db";
import User from "@/model/user";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken"; // JWT for authentication

export async function POST(req) {
  try {
    await connectDB();
    const { email, password } = await req.json();

    // Check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      return Response.json({ error: "User not found!" }, { status: 404 });
    }

    // Compare entered password with hashed password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return Response.json({ error: "Invalid credentials!" }, { status: 400 });
    }

    // Generate JWT Token
    const token = jwt.sign({ userId: user._id }, "SECRET_KEY", { expiresIn: "1h" });

    return Response.json({
      message: "Login successful!",
      token, // Frontend me is token ko localStorage ya cookies me store karna
    });
  } catch (error) {
    console.error("Login Error:", error);
    return Response.json({ error: "Something went wrong!" }, { status: 500 });
  }
}
