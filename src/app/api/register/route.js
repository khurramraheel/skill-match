// import { connectDB } from "@/lib/db";
// import User from "@/model/user";
// import bcrypt from "bcryptjs";

// export async function POST(req) {
//   try {
//     await connectDB();
//     const { email, password } = await req.json();

//     // Check if user already exists
//     const existingUser = await User.findOne({ email});
//     if (existingUser) {
//       return Response.json({ error: "User already exists!" }, { status: 400 });
//     }

//     // Hash password
//     const hashedPassword = await bcrypt.hash(password, 10);
//     const newUser = new User({ email, password: hashedPassword });

//     await newUser.save();
//     return Response.json({ message: "User registered successfully!" });
//   } catch (error) {
//     console.error("Registration Error:", error);
//     return Response.json({ error: "Something went wrong!" }, { status: 500 });
//   }
// }
