import mongoose from "mongoose";

export const connectMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to MongoDB");
    console.log("process.env.MONGODB_URI:", process.env.REACT_APP_SERVICE_ID)
  } catch (error) {
    console.log("Error connecting to MongoDB: ", error);
  }
};