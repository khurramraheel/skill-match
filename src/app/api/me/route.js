// app/api/me/route.js
import { NextResponse } from "next/server";
import { authOptions } from "../auth/[...nextauth]/route";
import { getServerSession } from "next-auth";

export async function GET(req) {
  const session = await getServerSession(authOptions);
  
  
  if (!session) {
    return NextResponse.json({ error: "Not authenticated" }, { status: 401 });

  }



  // You can customize the user data you return
  return NextResponse.json({ user: session.user });

  
}
