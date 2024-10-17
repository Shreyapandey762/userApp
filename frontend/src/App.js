import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/login';
import Register from './components/register';
import ProtectedRoute from './components/protectedRoute';
import Form from './components/form'
import ListData from './components/ListData';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/addData" element={<ProtectedRoute component={Form} />} />
        <Route path="/data" element ={<ProtectedRoute component={ListData}/>} />
      </Routes>
    </Router>
  );
};

export default App;
