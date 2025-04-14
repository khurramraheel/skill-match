import bcrypt from "bcryptjs";
import { connectDB } from "@/lib/db";

import jwt from "jsonwebtoken";
import { sendResetEmail } from "@/app/utils/emailService"; // ✅ Ensure this function exists
import User from "@/model/user";




export async function POST(req) {

  

  await connectDB(); 

  try {
    const body = await req.json();  
    console.log("req body",body);
    
    const { action, email, password ,token} = body;

    if (!action) {
      return Response.json({ error: "Action is required!" }, { status: 400 });
    }

    switch (action) {
      case "login": {
        const user = await User.findOne({ email });
        if (!user) {
          return Response.json({ error: "User not found!" }, { status: 404 });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
          return Response.json({ error: "Invalid credentials!" }, { status: 400 });
        }

        const token = jwt.sign(
          { userId: user._id }, 
          process.env.JWT_SECRET || "fallback_secret", 
          { expiresIn: "1h" }
        );

        return Response.json({
          message: "Login successful!",
          token,
        });
      }

    case "reset-password":{
   
      // sendResetEmail(body.email)
//  return Response.json({message:"reset succefully"})

 if (!token || !password) {
  return Response.json({ error: "Token and new password are required!" }, { status: 400 });
}

let decoded;
try {
  decoded = jwt.verify(token, process.env.JWT_SECRET || "fallback_secret");
} catch (error) {
  return Response.json({ error: "Invalid or expired token!" }, { status: 400 });
}

const user = await User.findById(decoded.userId);
if (!user) {
  return Response.json({ error: "User not found!" }, { status: 404 });
}

// Hash the new password
const hashedPassword = await bcrypt.hash(password, 10);
user.password = hashedPassword;
await user.save();

return Response.json({ message: "Password reset successfully! You can now log in." });
}




    

      case "register": {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
          return Response.json({ error: "User already exists!" }, { status: 400 });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ email, password: hashedPassword });

        await newUser.save();
        return Response.json({ message: "User registered successfully!" });
      }

      case "forgot-password": {
        const user = await User.findOne({ email });
        if (!user) {
          return Response.json({ error: "User not found!" }, { status: 404 });
        }

        // Generate Reset Token
        const resetToken = jwt.sign(
          { userId: user._id },
          process.env.JWT_SECRET || "fallback_secret",
          { expiresIn: "15m" }
        );
        
        // Create Reset Link
        const resetLink = `${process.env.FRONTEND_URL}/reset-password?token=${resetToken}`;
        console.log("FRONTEND_URL:", process.env.FRONTEND_URL);
        console.log("JWT_SECRET:", process.env.JWT_SECRET);
        
        
        // Send Reset Email
    
        console.log("Reset link:", resetLink);
        console.log("Sending email to:", user.email);
        
        try {
 
  await sendResetEmail(user.email, resetLink);
  console.log("Email sent successfully!");
} catch (err) {
  console.error("Email sending error:", err);
}


        return Response.json({ message: "Reset link sent! Check your email." });
      }

      default:
        return Response.json({ error: "Invalid action!" }, { status: 400 });
    }
  } catch (error) {
    console.error("API Error:", error.message, error.stack);
    return Response.json({ error: error.message || "Something went wrong!" }, { status: 500 });
  }

}
