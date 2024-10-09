import mongoose from "mongoose";
import "dotenv/config";

const uri = process.env.MONGO_URI as string;

export const db = mongoose.connect(uri);
