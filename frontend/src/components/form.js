import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Add = () => {

  const navigate = useNavigate();

  const [formData,setFormData]= useState({
    firstName:'',
    lastName:'',
    pincode:'',
    city:'',
    state:''
  });
  const getDetailsFromPincode= async ()=>{
    try{
      const response = await axios.get(`/pincode/${formData.pincode}`);
      setFormData(prev=>({...prev, city: response.data[0].PostOffice[0].District , state: response.data[0].PostOffice[0].State}))
    }catch(e){
      console.log(e);
    }
  }

  useEffect(()=>{  
      if(formData.pincode.length===6){
        getDetailsFromPincode();
      }
  },[formData.pincode])


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`http://localhost:5000/route/AddData`,formData);
      navigate('/data')
      
    } catch (error) {
      console.error('Failed to login:', error);
    }
  };


  const containerStyle = {
    maxWidth: "500px",
    margin: "0 auto", // Centers the form horizontally
    padding: "20px",
    borderRadius: "10px",
    backgroundColor: "#f9f9f9",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
    fontFamily: "Arial, sans-serif",
  };

  // Inline CSS for input fields
  const inputStyle = {
    width: "100%",
    padding: "10px",
    margin: "10px 0",
    borderRadius: "5px",
    border: "1px solid #ccc",
    boxSizing: "border-box",
    fontSize: "16px",
  };

  // Inline CSS for the button
  const buttonStyle = {
    width: "100%",
    padding: "10px",
    backgroundColor: "#4CAF50",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    fontSize: "16px",
    cursor: "pointer",
  };

  // Inline CSS for the heading
  const headingStyle = {
    textAlign: "center",
    marginBottom: "20px",
    color: "#333",
  };

  // Inline CSS for displaying the city and state
  const infoStyle = {
    margin: "10px 0",
    fontSize: "16px",
    color: "#555",
  };

  return (
    <div  style={containerStyle}>
      <form onSubmit={handleSubmit}>
      <h2 style={headingStyle}>User Data</h2>
      <input style={inputStyle} type="input" placeholder="First Name" value={formData.firstName} name='firstName'  onChange={(e)=>setFormData(prev=>({...prev, [e.target.name]:e.target.value}))}/>
      <input style={inputStyle} type="input" placeholder="Last Name" value={formData.lastName} name='lastName'  onChange={(e)=>setFormData(prev=>({...prev, [e.target.name]:e.target.value}))}/>
      <input style={inputStyle} type="input" placeholder="Pincode" value={formData.pincode} name='pincode' onChange={(e)=>setFormData(prev=>({...prev, [e.target.name]:e.target.value}))} />
      <div style={infoStyle}><span><strong>City208022</strong> : {formData.city}</span></div>
      <div style={infoStyle}><span><strong>State</strong> : {formData.state}</span></div>
      <button type="submit" style={buttonStyle}>Submit</button>
    </form>
    </div>
  );
};

export default Add;