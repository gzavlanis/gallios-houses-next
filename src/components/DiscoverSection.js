import Link from 'next/link';
import { FaMapMarkedAlt, FaCompass } from 'react-icons/fa';

export default function DiscoverSection() {
    return (
        <section className="discover-geo-section">

            {/* --- BACKGROUND SHAPES (No Images!) --- */}
            <div className="geo-shape-circle shape-gold-ring"></div>
            <div className="geo-shape-circle shape-white-blob"></div>

            {/* Giant Watermark Icon behind text */}
            <div className="geo-watermark">
                <FaCompass />
            </div>

            <div className="container" style={{ position: 'relative', zIndex: 2 }}>

                {/* Decorative Top Icon */}
                <div style={{ marginBottom: '20px', color: '#cba135' }}>
                    <FaMapMarkedAlt size={40} />
                </div>

                <span style={{
                    color: '#cba135', // Gold Accent
                    textTransform: 'uppercase',
                    letterSpacing: '4px',
                    fontSize: '12px',
                    fontWeight: 'bold',
                    display: 'block',
                    marginBottom: '20px'
                }}>
          Explore Crete
        </span>

                <h2 style={{
                    fontSize: '3.5rem',
                    fontFamily: 'var(--font-heading)',
                    marginBottom: '30px',
                    color: '#fff'
                }}>
                    The Perfect Base
                </h2>

                <div style={{ width: '60px', height: '1px', background: 'rgba(255,255,255,0.3)', margin: '0 auto 30px' }}></div>

                <p style={{
                    fontSize: '1.2rem',
                    lineHeight: '1.8',
                    maxWidth: '600px',
                    margin: '0 auto',
                    color: 'rgba(255,255,255,0.9)',
                    fontWeight: '300'
                }}>
                    Strategically located in the peaceful village of Loutra, just 15 minutes from the vibrant Rethymno city.
                    Your gateway to the hidden gems of the island.
                </p>

                <Link href="/location" className="btn-outline-white">
                    Discover the Area
                </Link>
            </div>
        </section>
    );
}