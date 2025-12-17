"use client";
import Reveal from './Reveal';

export default function GalleryGrid({ images }) {
    if (!images) return null;

    return (
        <div className="gallery-layout">
            {images.map((img, index) => (
                <div key={index} className="gallery-item" style={{ gridColumn: `span ${img.span || 1}` }}>
                    <Reveal delay={img.delay || 0} width="100%" height="100%">
                        <div className="img-wrapper">
                            <img
                                src={img.src}
                                alt={img.alt || "Gallery Image"}
                                className="hover-zoom"
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            />
                        </div>
                    </Reveal>
                </div>
            ))}
        </div>
    );
}