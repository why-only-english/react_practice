import { useState, useEffect } from 'react';

function StopWatch() {
  const [time, setTime] = useState(0); 
  const [isActive, setIsActive] = useState(false); 

  useEffect(() => {
    let interval = null;

    if (isActive) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    } else if (!isActive && time !== 0) {
      clearInterval(interval);
    }

    return () => clearInterval(interval); 
  }, [isActive, time]);

  const handleStart = () => {
    setIsActive(true);
  };

  const handleStop = () => {
    setIsActive(false);
  };

  const handleReset = () => {
    setIsActive(false);
    setTime(0);
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>StopWatch: {time}초</h1>
      <div>
        <button onClick={handleStart} style={buttonStyle}>Start</button>
        <button onClick={handleStop} style={buttonStyle}>Stop</button>
        <button onClick={handleReset} style={buttonStyle}>Reset</button>
      </div>
    </div>
  );
}

const buttonStyle = {
  margin: '10px',
  padding: '10px 20px',
  fontSize: '16px',
  cursor: 'pointer'
};

export default StopWatch;