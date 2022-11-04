import React, { useEffect, useState } from "react"

import './app.css';

function App() {

  const[seconds, setSeconds] = useState(0);
  const[minutes, setMinutes] = useState(0);
  const[hour, setHour] = useState(0);
  const[list, setList] = useState([]);

  let timer = 0;
   useEffect(() =>{

    timer = setInterval(()=>{
       setSeconds(seconds + 1);

       if(seconds === 59){
          setMinutes(minutes + 1);
          setSeconds(0);
      }
       if(minutes === 59){
        setHour(hour + 1);
        setMinutes(0);
       }

    },1000)

    return () => {
      clearInterval(timer);
    }
  })

  const handleStart = () =>{
    setMinutes(minutes + 1);
    setSeconds(0);
  }
  
  const handlePause = () =>{
    return(
     clearInterval(timer)
    )
  }


  const handleSave = (id) => {
    list.push({id:id, list:{hour, minutes, seconds}});
    setList(list);
  }
   

  return (
    <div className="App">
      <div className="container">
        <h1 className="time_text">Timer</h1>
        <div className="display_time">
          <h1>{hour}:</h1>
        <h1>{minutes}:</h1>
         <h1>{seconds}</h1>
          </div> 
         <button onClick={handleStart}>Start</button>
         <button onClick={handlePause}>Pause</button>
         <button onclick={(id) => handleSave(id)}>Save</button>
      </div>
       <ul className="tarckList">
       {list.map((li) => {
        return(
          <li className="sinlgeTrack" key={li.id} >
          <h1>Title:</h1>
          <span>Description:</span>
          <span>Tracked time:{li.hour}: {li.minutes}: {li.seconds}</span>
           <button>Edit</button>
           <button>Delete</button>
          </li>
        )
       })}    
       </ul>
    </div>
      
  );
}

export default App;
