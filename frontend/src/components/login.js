import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/route/login', { email, password });
      localStorage.setItem('token', response.data.token);
      axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}`;
      navigate('/addData');
    } catch (error) {
      console.error('Failed to login:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={formStyle}>
      <h2 style={headingStyle}>Login</h2>
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}  style={inputStyle}/>
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}  style={inputStyle}/>
      <button type="submit" style={buttonStyle}>Login</button>
    </form>
  );
};

export default Login;
