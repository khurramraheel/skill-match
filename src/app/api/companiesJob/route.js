import Company from "@/model/company";
import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db"; // Ensure ke DB connected ho

export async function POST(req) {
    try {
        await connectDB(); // ✅ Database se pehle connect ho

        const { logo, description, title,needs, userId } = await req.json();
   
        const newCompany = new Company({
            logo,
            description,
            title,
            owner:userId,
            needs
        });

        await newCompany.save();

        return NextResponse.json(newCompany, { status: 201 });
    } catch (error) {
        console.error("❌ Error adding job:", error);
        return NextResponse.json({ error: "Failed to add job" }, { status: 500 });
    }
}

// ✅ GET API for Fetching Jobs
export async function GET() {
    try {
        await connectDB(); // ✅ Ensure database is connected
        const company = await Company.find(); // ✅ Saari jobs fetch karo
        return NextResponse.json(company, { status: 200 });
    } catch (error) {
        console.error("❌ Error fetching jobs:", error);
        return NextResponse.json({ error: "Failed to fetch jobs" }, { status: 500 });
    }
}
