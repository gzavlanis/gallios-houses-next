import Link from 'next/link';

export default function GalleryGrid({ images = [] }) {
    // If no images provided, use default placeholders
    const galleryImages = images.length > 0 ? images : [
        { src: "/assets/images/a3-13-2000x1333.webp", span: 2 },
        { src: "/assets/images/loutra-resort-b2-32-2000x1335.jpeg", span: 1 },
        { src: "/assets/images/a3-1-2000x1333.webp", span: 1 },
        { src: "/assets/images/a3-15-2000x1333.webp", span: 2 },
    ];

    return (
        <div className="gallery-grid">
            {galleryImages.map((img, index) => (
                <div key={index} className="gallery-item-wrapper" style={{
                    gridColumn: `span ${img.span || 1}`,
                    height: '400px',
                    position: 'relative',
                    overflow: 'hidden',
                    borderRadius: '2px'
                }}>
                    <img
                        src={img.src}
                        alt={`Gallery image ${index}`}
                        style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.8s ease' }}
                        className="hover-zoom"
                    />
                </div>
            ))}
        </div>
    );
}