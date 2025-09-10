// 使用 Intersection Observer 检测视频是否进入视口
export const setupLazyVideoLoad = () => {
    const options = {
        root: null,
        rootMargin: '50px',
        threshold: 0.1
    };

    const handleIntersection = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const video = entry.target;
                if (video.hasAttribute('data-autoplay')) {
                    // 确保所有项目封面图片都已加载
                    const projectCard = video.closest('.project-card');
                    if (projectCard) {
                        const coverImage = projectCard.querySelector('img');
                        const allProjectImages = document.querySelectorAll('.project-card img');
                        
                        // 检查所有项目封面图片是否已加载
                        const allImagesLoaded = Array.from(allProjectImages).every(img => img.complete);
                        
                        if (allImagesLoaded && coverImage.complete) {
                            // 所有封面图片都已加载，直接开始播放视频
                            video.play().catch(() => {
                                // 处理可能的自动播放限制
                                video.muted = true;
                                video.play();
                            });
                        } else {
                            // 等待所有图片加载完成
                            Promise.all(
                                Array.from(allProjectImages)
                                    .filter(img => !img.complete)
                                    .map(img => new Promise(resolve => {
                                        img.onload = resolve;
                                    }))
                            ).then(() => {
                                // 所有图片加载完成后立即播放视频
                                video.play().catch(() => {
                                    video.muted = true;
                                    video.play();
                                });
                            });
                        }
                    }
                }
                observer.unobserve(video);
            }
        });
    };

    const observer = new IntersectionObserver(handleIntersection, options);
    const videos = document.querySelectorAll('video[data-autoplay]');
    videos.forEach(video => observer.observe(video));
};
