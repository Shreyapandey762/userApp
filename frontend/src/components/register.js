import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        await axios.post('http://localhost:5000/route/register', { username, email, password });
        navigate('/login'); // Redirect to login page after successful registration
    } catch (error) {
      console.error('Failed to register:', error);
    }
  };

  
  const formStyle = {
    maxWidth: "400px",
    margin: "50px auto", // Centers the form
    padding: "20px",
    borderRadius: "8px",
    backgroundColor: "#f9f9f9",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
  };

  const inputStyle = {
    width: "100%",
    padding: "10px",
    margin: "10px 0",
    borderRadius: "5px",
    border: "1px solid #ccc",
    boxSizing: "border-box",
    fontSize: "16px",
  };

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

  const headingStyle = {
    textAlign: "center",
    marginBottom: "20px",
    fontFamily: "Arial, sans-serif",
    color: "#333",
  };

  return (
    <form onSubmit={handleSubmit} style={formStyle}>
      <h2 style={headingStyle}>Register</h2>
      <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} style={inputStyle}/>
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} style={inputStyle}/>
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} style={inputStyle}/>
      <button type="submit" style={buttonStyle}>Register</button>
    </form>
  );
};

export default Register;