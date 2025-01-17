import mongoose from "mongoose";

const messageSchema = new mongoose.Schema(
  {
    business_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",  // Assuming you have a 'User' model to reference the business
      required: true
    },
    location_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Location",  // Reference to Location model
      required: true
    },
    message: {
        type: String,
        default: '',
        required: false,
      },
    time_from: {
      type: String,  // Represented as a string in HH:MM format
      required: true,
      note: 'Start time of availability'
    },
    time_to: {
      type: String,  // Represented as a string in HH:MM format
      required: true,
      note: 'End time of availability'
    },
  },
  { timestamps: { createdAt: "created_at" } }
);

// Check if the model is already compiled, and use it if so
const Message = mongoose.models.Message || mongoose.model("Message", messageSchema);

export default Message;