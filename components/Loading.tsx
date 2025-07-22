import React, { useEffect, useState } from 'react';

function Loading() {
  const [seconds, setSeconds] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(prev => {
        if (prev >= 1) {
          clearInterval(interval);
          setFadeOut(true); // Trigger fade out
          return prev;
        }
        return prev + 1;
      });
    }, 1); // 100ms interval

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`loadingPage ${fadeOut ? 'fade-out' : ''}`}>
      {/*<h1>Loading {seconds}</h1>*/}
    </div>
  );
}

export default Loading;
