const form_model = require("../models/formModel");

require("dotenv").config();

const AddDataController = async(req , res) =>{
    try {
      const newData = await form_model({ ...req.body});
      await newData.save();
      res.status(201).send({
        success: true,
        message: "Data Added Successfully",
      });
    } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        error,
        message: "Error While adding data",
      });
    }
  }; 


const getAllFormData = async(req,res) =>{
  try{
    console.log("hey")
    const data = await form_model.find({});

    return res.status(201).send(data);
  }catch(e){
    res.status(500).send(e);
  }
}


  
  module.exports = {AddDataController,getAllFormData}