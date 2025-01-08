import mongoose, { Schema, models } from "mongoose";

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true, // Ensuring email is unique
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      default: 'user', // Default value for role
    },
    status: {
      type: String,
      default: 'pending', // Default value for status
    },
  },
  { timestamps: true }
);

const User = models.User || mongoose.model("User", userSchema);
export default User;
