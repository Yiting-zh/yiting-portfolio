// 预加载关键图片资源
export const preloadCriticalImages = () => {
  const imagesToPreload = [
    `${import.meta.env.BASE_URL}Hero.webp`,
    `${import.meta.env.BASE_URL}Yiting.webp`,
  ];

  return Promise.all(
    imagesToPreload.map((src) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = src;
        img.onload = resolve;
        img.onerror = reject;
      });
    })
  );
};

// 预加载组件
export const preloadComponent = (component) => {
  const preloadLink = document.createElement('link');
  preloadLink.rel = 'preload';
  preloadLink.as = 'script';
  preloadLink.href = component;
  document.head.appendChild(preloadLink);
};

// 优化字体加载
export const optimizeFontLoading = () => {
  if ('fonts' in document) {
    Promise.all([
      document.fonts.load('1em "Darumadrop One"'),
      document.fonts.load('1em "DM Serif Display"'),
    ]).then(() => {
      document.documentElement.classList.add('fonts-loaded');
    });
  }
};
