const mongoose = require("mongoose");

const formSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, "First Name is required"],
    },
    lastName: {
        type: String,
        required: [true, "last Name is required"],
    },    
    pincode: {
      type: String,
      required: [true, "pincode is required"],
    },
    city: {
      type: String,
      required: [true, "city is required"],
    }, 
    state: {
      type: String, 
      required: [true, "state is required"],
    }
}) 

const form_model = mongoose.model("Form", formSchema);

module.exports = form_model;