export default function GalleryGrid() {
    // Using images from your uploaded list
    const images = [
        "/assets/images/a3-19-1080x720.jpeg", // Main
        "/assets/images/face1.jpg",
        "/assets/images/loutra-resort-b2-19-1140x766.jpeg", // Interior?
        "/assets/images/loutra-resort-b2-331-2000x1333.jpeg" // Pool
    ];

    return (
        <section style={{ paddingBottom: '100px' }}>
            <div className="container">
                <h3 style={{ textAlign: 'center', color: '#005777', marginBottom: '40px', fontFamily: 'var(--font-heading)' }}>
                    Visual Tour
                </h3>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
                    {images.map((img, index) => (
                        <div key={index} style={{ height: '300px', overflow: 'hidden', cursor: 'pointer' }} className="gallery-item">
                            <img
                                src={img}
                                alt={`Gallery ${index}`}
                                style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s' }}
                                className="hover-zoom"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}