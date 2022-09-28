import React from "react"
import  Navbar  from "./components/Navbar";
import './app.css';
import FilterList from "./components/Filter/FilterList"


function App() {
  return (
    <div>
      
     <Navbar/>
     <h1 style={
      {marginBottom:"25px", 
       marginLeft:"25%",
    
      }}>
      Search Properties to Rent
      </h1>

      <FilterList/>
    
    </div>
  );
}

export default App;
