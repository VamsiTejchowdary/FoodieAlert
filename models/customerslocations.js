import mongoose from "mongoose";

const locationCustomerSchema = new mongoose.Schema(
  {
    location_id: { 
      type: mongoose.Schema.Types.ObjectId, 
      ref: "Location", 
      required: true 
    },
    customer_id: { 
      type: mongoose.Schema.Types.ObjectId, 
      ref: "Customer", 
      required: true 
    },
    subscription: { type: Boolean, default: true }
  },
  { timestamps: true }
);

// Check if the model is already compiled, and use it if so
const LocationCustomer = mongoose.models.LocationCustomer || mongoose.model("LocationCustomer", locationCustomerSchema);

export default LocationCustomer;