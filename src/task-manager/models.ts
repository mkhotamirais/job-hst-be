import mongoose from "mongoose";

const taskSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, unique: true },
    description: { type: String, required: true },
    status: { type: String, enum: ["pending", "in-progress", "completed"], default: "pending", required: true },
    dueDate: { type: Date, required: true, default: Date.now },
  },
  {
    timestamps: true,
  }
);

const Tasks = mongoose.model("Tasks", taskSchema);

export { Tasks };
