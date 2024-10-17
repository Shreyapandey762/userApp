import React from "react";
import {Navigate} from 'react-router-dom';

const Protectedroute = ({component: Component}) => {
    const token = localStorage.getItem('token');
    return token ? <Component /> : <Navigate to="/login" />;
};

export default Protectedroute;