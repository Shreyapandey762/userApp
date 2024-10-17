import axios from "axios";
import { useEffect,useState } from "react";



const ListData =()=>{

    const [data,setData]= useState([]);
    
    const fetchDataFromDatabase = async ()=>{
        try{
            const response = await axios.get('http://localhost:5000/route/listData');            
            setData(response.data);
        }catch(e){
            console.log(e);
        }
    }

    useEffect(()=>{
        fetchDataFromDatabase();
    });


    const gridStyle = {
        display: "grid",
        gridTemplateColumns: "repeat(5, 1fr)", // 5 columns for First Name, Last Name, Pincode, City, and State
        gap: "10px",
        padding: "10px",
        textAlign: "left",
        borderBottom: "1px solid #ddd", // Border for rows
      };
    
      const headerStyle = {
        fontWeight: "bold",
        textTransform: "uppercase",
      };

    return (
        <div>            
            <div style={{ ...gridStyle, ...headerStyle }}>
                <span>First Name</span>
                <span>Last Name</span>
                <span>Pincode</span>
                <span>City</span>
                <span>State</span>
            </div>
            
            {data.map(element => (          
                
                <div key={element._id} style={gridStyle}>
                    <span>{element.firstName}</span>
                    <span>{element.lastName}</span>
                    <span>{element.pincode}</span>
                    <span>{element.city}</span>
                    <span>{element.state}</span>
                </div>
            
            ))}        
        </div>
    )
}

export default ListData;