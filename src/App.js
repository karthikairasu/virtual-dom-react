import React, { useEffect, useState } from 'react';
import './App.css';

const App = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  
  useEffect(() =>{
    const timer = setInterval(() =>{
      setCurrentTime(new Date());
    }, 1000);

    // Cleanup function to clear the timer when component unmounts
    return () => clearInterval(timer);

  }, [])

  return (
    <div>
      <h1>Example of Virtual DOM Rendering</h1>
      <h1>Hello World</h1>
      <h2>Now the time is</h2>
      <p>{currentTime.toLocaleTimeString()}</p>
    </div>
  )
}

export default App