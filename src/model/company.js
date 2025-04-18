import mongoose from "mongoose";

const JobSchema = new mongoose.Schema({
  owner:{
    ref:"User",
    type:mongoose.SchemaTypes.ObjectId
  },
  logo: { type: String, required: true },
  description: { type: String, required: true },
  name: { type: String, required:true, }, 

  needs: { type: String, required: true },
  company: { type: mongoose.Schema.Types.ObjectId, ref: "Company", required: true } // Relational Reference
});

export default mongoose.models.Company || mongoose.model("Company", JobSchema);
