import bcrypt from "bcryptjs";
import { connectDB } from "@/lib/db";  // Ensure your MongoDB connection file path is correct
import User from "@/model/user"; // Ensure you have a User model

export async function POST(req) {
  
    const { action } = await req.json();

  switch(action){

   case "login":{

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

      }

      case "signup":{

        const { email, password } = await req.json();

        // Check if user already exists
        const existingUser = await User.findOne({ email});
        if (existingUser) {
          return Response.json({ error: "User already exists!" }, { status: 400 });
        }
    
        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ email, password: hashedPassword });
    
        await newUser.save();
        return Response.json({ message: "User registered successfully!" });
      } catch (error) {
        console.error("Registration Error:", error);
        return Response.json({ error: "Something went wrong!" }, { status: 500 });
      }
      
      
      
      }
        
        
      }
      
    
