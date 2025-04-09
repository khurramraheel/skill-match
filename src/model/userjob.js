import mongoose from "mongoose";

const JobSchema = new mongoose.Schema({
  logo: { type: String, required: true },
  description: { type: String, required: true },
  name: { type: String, required:true, }, 
  need: { type: String, required: true },
  needs: { type: String, required: true },
  company: { type: mongoose.Schema.Types.ObjectId, ref: "Company", required: true } // Relational Reference
});

export default mongoose.models.Job || mongoose.model("Job", JobSchema);
