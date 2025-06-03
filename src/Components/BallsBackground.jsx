import React, { useEffect, useState } from "react";

const balls = [
  { color: 'rgba(253, 220, 113, 0.7)', size: 280 }, 
  { color: 'rgba(253, 220, 113, 0.7)', size: 280 },   
  { color: 'rgba(213, 196, 224, 0.7)', size: 240 },  
  { color: 'rgba(249, 214, 193, 0.7)', size: 240 },   
  { color: 'rgba(255, 222, 173, 0.7)', size: 140 },  
  { color: 'rgba(255, 182, 193, 0.6)', size: 270 },   
  { color: 'rgba(186, 230, 213, 0.7)', size: 200 },   
];

function randPx(max, ballSize) {
  return Math.random() * (max - ballSize);
}

function Ball({ color, size, windowSize }) {
  const [pos, setPos] = useState({
    top: randPx(windowSize.height, size),
    left: randPx(windowSize.width, size),
  });

  const [duration, setDuration] = useState(3 + Math.random() * 3); 

  useEffect(() => {
    const interval = setInterval(() => {
      setPos({
        top: randPx(windowSize.height, size),
        left: randPx(windowSize.width, size),
      });
      setDuration(3 + Math.random() * 3);
    }, duration * 1000);
    return () => clearInterval(interval);
  }, [windowSize, size, duration]);

  return (
    <div
      style={{
        background: color,
        width: size,
        height: size,
        filter: "blur(80px)",
        position: "absolute",
        borderRadius: "50%",
        top: `${pos.top}px`,
        left: `${pos.left}px`,
        transition: `top ${duration}s linear, left ${duration}s linear`,
        pointerEvents: "none",
      }}
    />
  );
}

const BallsBackground = () => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className="balls-bg"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        zIndex: -1,
      }}
    >
      {balls.map((ball, i) => (
        <Ball
          key={i}
          color={ball.color}
          size={ball.size}
          windowSize={windowSize}
        />
      ))}
    </div>
  );
};

export default BallsBackground;
