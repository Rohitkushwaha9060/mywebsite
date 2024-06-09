import mongoose from "mongoose";

const ContactSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    phone: String,
    message: String,
  },
  {
    timestamps: true,
  }
);

export const Contact =
  mongoose.models.Contact || mongoose.model("Contact", ContactSchema);
