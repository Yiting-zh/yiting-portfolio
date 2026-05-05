import { useState } from "react";

function Photography({ dict }) {
    const [selectedImage, setSelectedImage] = useState(null);

    // 摄影作品数据
    const photos = dict.photos ? Object.values(dict.photos) : [];

    const openLightbox = (imageUrl) => {
        setSelectedImage(imageUrl);
    };

    const closeLightbox = () => {
        setSelectedImage(null);
    };

    const handleBackdropClick = (e) => {
        if (e.target === e.currentTarget) {
            closeLightbox();
        }
    };

    return (
        <section id="photography" className="photography-section" data-aos="fade-up">
            <div className="section-container">
                <h2 className="heading-h2">{dict.photographyTitle}</h2>
                
                <div className="photography-grid">
                    {photos.map((photo, index) => (
                        <div 
                            className="photo-item" 
                            key={index}
                            data-aos="fade-up"
                            data-aos-delay={index * 50}
                            onClick={() => openLightbox(photo.image)}
                        >
                            <div className="photo-wrapper">
                                <img 
                                    src={photo.thumbnail || photo.image} 
                                    alt={`Photo ${index + 1}`}
                                    loading="lazy"
                                />
                            </div>
                        </div>
                    ))}
                </div>

                {/* Lightbox 模态框 */}
                {selectedImage && (
                    <div className="lightbox" onClick={handleBackdropClick}>
                        <button className="lightbox-close" onClick={closeLightbox}>
                            ✕
                        </button>
                        <div className="lightbox-content">
                            <img 
                                src={selectedImage} 
                                alt="Photography"
                            />
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}

export default Photography;
