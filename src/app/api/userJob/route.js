import Job from "@/model/userjob"
import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db"; // Ensure ke DB connected ho

export async function POST(req) {
    try {
        await connectDB(); // ✅ Database se pehle connect ho

        const { logo, description, name, need,needs } = await req.json();
   
        const newJob = new Job({
            logo,
            description,
            name,
            need,
            needs
        });

        await newJob.save();

        return NextResponse.json(newJob, { status: 201 });
    } catch (error) {
        console.error("❌ Error adding job:", error);
        return NextResponse.json({ error: "Failed to add job" }, { status: 500 });
    }
}

// ✅ GET API for Fetching Jobs
export async function GET() {
    try {
        await connectDB(); // ✅ Ensure database is connected
        const jobs = await Job.find(); // ✅ Saari jobs fetch karo
        return NextResponse.json(jobs, { status: 200 });
    } catch (error) {
        console.error("❌ Error fetching jobs:", error);
        return NextResponse.json({ error: "Failed to fetch jobs" }, { status: 500 });
    }
}
