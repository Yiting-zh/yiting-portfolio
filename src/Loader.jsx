import { useEffect, useRef } from "react";

const Loader = ({ onFinish }) => {
  const logoRef = useRef();

  useEffect(() => {
    const appearTimer = setTimeout(() => {
      const loaderLogo = logoRef.current;
      const navbarLogo = document.getElementById("navbar-logo");
      if (loaderLogo && navbarLogo) {
        // 1. 移除呼吸动画
        loaderLogo.classList.remove("loader-logo-breath");
        // 2. 强制 reflow
        void loaderLogo.offsetWidth;
        // 3. 计算目标位置
        const loaderRect = loaderLogo.getBoundingClientRect();
        const navbarRect = navbarLogo.getBoundingClientRect();
        const deltaX = navbarRect.left - loaderRect.left;
        const deltaY = navbarRect.top - loaderRect.top;
        const scale = navbarRect.width / loaderRect.width;
        // 4. 设置 transform-origin
        loaderLogo.style.transformOrigin = "top left";
        // 5. 设置 transform 飞入动画
        loaderLogo.style.transition = "transform 1.2s ease";
        loaderLogo.style.transform = `translate(${deltaX}px, ${deltaY}px) scale(${scale})`;
        // 6. 动画结束后卸载 Loader
        setTimeout(onFinish, 1200);
      } else {
        onFinish();
      }
    }, 800); // 呼吸动画停留时间，可调整

    return () => clearTimeout(appearTimer);
  }, [onFinish]);

  return (
    <div className="loader-overlay">
      <img
        src={`${import.meta.env.BASE_URL}Logo.svg`}
        alt="Logo"
        className="loader-logo loader-logo-breath"
        ref={logoRef}
        id="loader-logo"
      />
    </div>
  );
};

export default Loader;