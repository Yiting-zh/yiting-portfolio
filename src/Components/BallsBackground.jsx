
import React from "react";

const balls = [
  { color: 'rgba(253, 220, 113, 0.6)', size: 260, duration: 12 },
  { color: 'rgba(213, 196, 224, 0.6)', size: 220, duration: 14 },
  { color: 'rgba(249, 214, 193, 0.6)', size: 200, duration: 10 },
  { color: 'rgba(186, 230, 213, 0.6)', size: 180, duration: 12 },
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
  filter: "blur(40px)",
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
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  // 移动端：静止圆球，随机位置，无动画，保留渐变背景
  const [mobileBalls, setMobileBalls] = React.useState([]);
  React.useEffect(() => {
    if (!isMobile) return;
    // 计算圆球随机位置（vw/vh），每次刷新都不同
    const positions = balls.map(ball => {
      const vw = 100 - ball.size / window.innerWidth * 100;
      const vh = 100 - ball.size / window.innerHeight * 100;
      return {
        left: Math.random() * vw,
        top: Math.random() * vh,
        ...ball
      };
    });
    setMobileBalls(positions);
  }, [isMobile]);

  // PC端动画球
  React.useEffect(() => {
    if (isMobile) return;
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
    // 只用主题背景 + 静止圆球
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
        }}
      >
        {mobileBalls.map((ball, i) => (
          <div
            key={i}
            className="ball-bg"
            style={{
              background: ball.color,
              width: ball.size,
              height: ball.size,
              filter: "blur(40px)",
              position: "absolute",
              borderRadius: "50%",
              pointerEvents: "none",
              top: `${ball.top}vh`,
              left: `${ball.left}vw`,
            }}
          />
        ))}
      </div>
    );
  }

  // PC端动画球
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
