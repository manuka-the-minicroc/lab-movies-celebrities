const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Define the Celebrity schema
const celebSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Hey, put a name please!'] // Name is required
  },
  occupation: {
    type: String,
    default: "Unknown", // Default value if not provided
  },
  catchphrase: {
    type: String,
    required: [true, 'Where is the catch phrase???'] // Catchphrase is required
  },
});

// Create the Celebrity model
const Celeb = mongoose.model("Celeb", celebSchema);

// Export the model
module.exports = Celeb;