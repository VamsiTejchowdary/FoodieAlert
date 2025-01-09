const mongoose = require('mongoose');
const { Schema } = mongoose;

// Define the location schema
const locationSchema = new Schema(
  {
    business_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User', // Referencing the 'User' model for the business owner
      required: true,
    },
    name: {
      type: String,
      required: true,
      trim: true, // Removes whitespace from name
    },
    address: {
      type: String,
      required: true,
      trim: true, // Removes whitespace from address
    },
    adminstatus: { type: String, default: 'pending' },
    activestatus: { type: Boolean, default: true }
  },
  { timestamps: true } // Automatically adds createdAt and updatedAt fields
);

// Check if the model is already defined
const Location = mongoose.models.Location || mongoose.model('Location', locationSchema);

module.exports = Location;