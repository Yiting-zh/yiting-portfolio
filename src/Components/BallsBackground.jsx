
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

function Ball({ color, size, top, left, animate, duration, index }) {
  // PC端动画，移动端静止
  const style = {
    background: color,
    width: size,
    height: size,
    filter: "blur(80px)",
    position: "absolute",
    borderRadius: "50%",
    pointerEvents: "none",
    top: top || 0,
    left: left || 0,
  };
  if (animate) {
    style.animation = `ball-move-${index} ${duration}s linear infinite alternate`;
  }
  return <div className="ball-bg" style={style} />;
}



const BallsBackground = () => {
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  // 移动端静止球：随机分布
  const [mobileBalls, setMobileBalls] = React.useState([]);

  React.useEffect(() => {
    if (isMobile) {
      // 生成随机位置的球
      const ballsWithPos = balls.map(ball => {
        const vw = window.innerWidth - ball.size;
        const vh = window.innerHeight - ball.size;
        return {
          ...ball,
          left: Math.random() * vw,
          top: Math.random() * vh,
        };
      });
      setMobileBalls(ballsWithPos);
      return;
    }
    // PC端动画球
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
    // 移动端静止球叠加渐变背景
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
          background:
            "radial-gradient(circle at 20% 30%, rgba(253,220,113,0.7) 0%, transparent 60%)," +
            "radial-gradient(circle at 80% 20%, rgba(213,196,224,0.7) 0%, transparent 60%)," +
            "radial-gradient(circle at 60% 70%, rgba(249,214,193,0.7) 0%, transparent 60%)," +
            "radial-gradient(circle at 40% 80%, rgba(255,222,173,0.7) 0%, transparent 60%)," +
            "radial-gradient(circle at 70% 50%, rgba(255,182,193,0.6) 0%, transparent 60%)," +
            "radial-gradient(circle at 30% 60%, rgba(186,230,213,0.7) 0%, transparent 60%)," +
            "linear-gradient(135deg, #fde471 0%, #d5c4e0 100%)"
        }}
      >
        {mobileBalls.map((ball, i) => (
          <Ball
            key={i}
            color={ball.color}
            size={ball.size}
            top={ball.top}
            left={ball.left}
            animate={false}
            index={i}
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
          animate={true}
          index={i}
        />
      ))}
    </div>
  );
};

export default BallsBackground;
