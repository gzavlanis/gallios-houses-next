"use client";
export default function AttractionCard({ img, title, desc, link }) {
    return (
        <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="hover-card"
            style={{
                display: 'block',
                position: 'relative',
                borderRadius: '4px',
                overflow: 'hidden',
                height: '350px',
                boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
            }}
        >
            {/* Background Image */}
            <img
                src={img}
                alt={title}
                style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.6s ease'
                }}
                className="hover-zoom"
            />

            {/* Gradient Overlay */}
            <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end',
                padding: '30px'
            }}>
                <h4 style={{ fontSize: '1.5rem', color: 'white', fontFamily: 'var(--font-heading)', marginBottom: '5px' }}>
                    {title}
                </h4>
                <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '0.95rem' }}>
                    {desc}
                </p>
            </div>
        </a>
    );
}