import bcrypt from "bcryptjs";
import { connectDB } from "@/lib/db";  // Ensure your MongoDB connection file path is correct
import User from "@/model/user"; // Ensure you have a User model
import jwt from "jsonwebtoken";


export async function POST(req) {
  await connectDB();  // ✅ Ensure DB connection is established

  try {
      const body = await req.json();  // ✅ Read request body only once
      const { action, email, password } = body;

      if (!action) {
          return Response.json({ error: "Action is required!" }, { status: 400 });
      }

      switch (action) {
          case "login": {
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
    const token = jwt.sign(
      { userId: user._id }, 
      process.env.JWT_SECRET || "fallback_secret", 
      { expiresIn: "1h" }
  );

    return Response.json({
      message: "Login successful!",
      token, // Frontend me is token ko localStorage ya cookies me store karna
    });
  } 

          case "register": {
              const existingUser = await User.findOne({ email });
              if (existingUser) return Response.json({ error: "User already exists!" }, { status: 400 });

              const hashedPassword = await bcrypt.hash(password, 10);
              const newUser = new User({ email, password: hashedPassword });

              await newUser.save();
              return Response.json({ message: "User registered successfully!" });
          }

          default:
              return Response.json({ error: "Invalid action!" }, { status: 400 });
      }
  } catch (error) {
      console.error("API Error:", error);
      return Response.json({ error: "Something went wrong!" }, { status: 500 });
  }
}
