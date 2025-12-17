"use client";
export default function PlaceCard({ img, title, desc, link }) {
    return (
        <a href={link} target="_blank" rel="noopener noreferrer" className="hover-card" style={{ display: 'block', background: 'white', borderRadius: '4px', overflow: 'hidden', boxShadow: '0 10px 20px rgba(0,0,0,0.05)' }}>
            <div style={{ height: '250px', overflow: 'hidden' }}>
                <img src={img} alt={title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s' }} className="hover-zoom" />
            </div>
            <div style={{ padding: '20px' }}>
                <h4 style={{ fontSize: '1.2rem', color: '#005777', fontWeight: 'bold' }}>{title}</h4>
                <p style={{ color: '#777', fontSize: '0.9rem' }}>{desc}</p>
            </div>
        </a>
    );
}