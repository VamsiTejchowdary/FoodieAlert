import mongoose from "mongoose";

const customerSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String, required: true },
  },
  { timestamps: true }
);

// Check if the model is already compiled, and use it if so
const Customer = mongoose.models.Customer || mongoose.model("Customer", customerSchema);

export default Customer;