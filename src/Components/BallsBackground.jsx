
import React from "react";

const balls = [
  { color: 'rgba(253, 220, 113, 0.7)', size: 280, duration: 14 },
  { color: 'rgba(253, 220, 113, 0.7)', size: 280, duration: 12 },
  { color: 'rgba(213, 196, 224, 0.7)', size: 240, duration: 16 },
  { color: 'rgba(249, 214, 193, 0.7)', size: 240, duration: 14 },
  { color: 'rgba(255, 222, 173, 0.7)', size: 140, duration: 10 },
  { color: 'rgba(255, 182, 193, 0.6)', size: 270, duration: 18 },
  { color: 'rgba(186, 230, 213, 0.7)', size: 200, duration: 12 },
];

function Ball({ color, size, duration, index }) {
  // Each ball gets a unique animation name for staggered movement
  const animName = `ball-move-${index}`;
  return (
    <div
      className="ball-bg"
      style={{
        background: color,
        width: size,
        height: size,
        filter: "blur(80px)",
        position: "absolute",
        borderRadius: "50%",
        pointerEvents: "none",
        animation: `${animName} ${duration}s linear infinite alternate`,
        top: 0,
        left: 0,
      }}
    />
  );
}



const BallsBackground = () => {
  // 判断是否为移动端
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  React.useEffect(() => {
    if (isMobile) return; // 移动端不生成动画 keyframes
    const style = document.createElement('style');
    let keyframes = '';
    balls.forEach((ball, i) => {
      const vw = 100 - ball.size / window.innerWidth * 100;
      const vh = 100 - ball.size / window.innerHeight * 100;
      let frames = [];
      for (let k = 0; k < 5; k++) {
        const percent = Math.round((k / 4) * 100);
        const left = Math.random() * vw;
        const top = Math.random() * vh;
        frames.push(`${percent}% { left: ${left}vw; top: ${top}vh; }`);
      }
      keyframes += `@keyframes ball-move-${i} {\n  ${frames.join('\n  ')}\n}`;
    });
    style.innerHTML = keyframes;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, [isMobile]);

  if (isMobile) {
    // 移动端用简单渐变或纯色背景
    return (
      <div
        className="balls-bg"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          zIndex: -1,
          background: "linear-gradient(135deg, #fde471 0%, #d5c4e0 100%)"
        }}
      />
    );
  }

  // PC端显示动画球
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
          duration={ball.duration}
          index={i}
        />
      ))}
    </div>
  );
};

export default BallsBackground;
