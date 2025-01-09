import mongoose from "mongoose";

const customerSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    phone: { type: Number, required: true },
    email: { type: String, required: true , lowercase: true},
    favfood: { type: String },
  },
  { timestamps: true }
);

customerSchema.pre("save", function (next) {
    this.email = this.email.toLowerCase();
    next();
  });

// Check if the model is already compiled, and use it if so
const Customer = mongoose.models.Customer || mongoose.model("Customer", customerSchema);

export default Customer;