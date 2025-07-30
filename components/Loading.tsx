import React, { useEffect, useState } from 'react';



function Loading() {
  const [seconds, setSeconds] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(prev => {
        if (prev >= 1) {
          clearInterval(interval);
          setFadeOut(true); 
          return prev;
        }
        return prev + 1;
      });
    }, 1); // no interval now

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`loadingPage ${fadeOut ? 'fade-out' : ''}`}>
    </div>
  );
}

export default Loading;
