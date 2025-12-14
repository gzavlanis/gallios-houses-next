import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import ContactSection from '../../components/ContactSection';
import HouseHero from '../../components/HouseHero';
import Link from 'next/link';
import Icon from '../../components/Icons';

export default function ChrisHouse() {
    return (
        <main style={{ background: 'white' }}>
            <Navbar />
            <HouseHero title="CHRIS HOUSE" subtitle="AFFORDABLE LUXURY" img="/assets/images/a3-19-1080x720.jpeg" />

            <section className="section-padding" style={{ paddingBottom: '60px' }}>
                <div className="container">
                    <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
                        <span style={{ color: '#cba135', letterSpacing: '3px', textTransform: 'uppercase', fontSize: '12px', fontWeight: 'bold' }}>The Experience</span>
                        <div style={{ marginTop: '40px', color: '#666', fontSize: '1.2rem', lineHeight: '1.9', fontStyle: 'italic' }}>
                            <p style={{ marginBottom: '30px' }}>&#34;The apartment consists of <strong>1 bedroom</strong> with a double bed, TV and A/C, fully equipped kitchen and a living room with a sofa bed. <strong>The place is ideal for families.</strong>&#34;</p>
                            <p>&#34;Guests will have access to all areas indoor and outdoor and full privacy inside the house.&#34;</p>
                        </div>
                    </div>
                </div>
            </section>

            <section style={{ background: '#fdfbf7', padding: '100px 0' }}>
                <div className="container">
                    <div className="text-center mb-16" style={{ marginBottom: '50px' }}>
                        <h3 style={{ fontFamily: 'var(--font-heading)', color: '#005777', fontSize: '2.5rem' }}>Facilities</h3>
                        <div style={{ width: '60px', height: '2px', background: '#cba135', margin: '20px auto' }}></div>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '30px' }}>
                        <Amenity name="users" title="Entire home" />
                        <Amenity name="ruler" title="55 m²" />
                        <Amenity name="kitchen" title="Kitchen" />
                        <Amenity name="tv" title="Smart TV" />
                        <Amenity name="tree" title="Garden" />
                        <Amenity name="parking" title="Free parking" />
                        <Amenity name="pool" title="2 Outdoor pools" />
                        <Amenity name="laundry" title="Washing machine" />
                        <Amenity name="wifi" title="Free WiFi" />
                        <Amenity name="chair" title="Terrace" />
                        <Amenity name="sun" title="Solar water" />
                        <Amenity name="family" title="Family rooms" />
                    </div>
                </div>
            </section>

            <section className="section-padding">
                <div className="container">
                    <div className="text-center mb-16" style={{ marginBottom: '50px' }}>
                        <h3 style={{ color: '#005777', fontSize: '2.5rem', fontFamily: 'var(--font-heading)' }}>Gallery</h3>
                    </div>
                    <div className="gallery-grid">
                        <GalleryImg src="/assets/images/a3-13-2000x1333.webp" alt="Living" span={2} />
                        <GalleryImg src="/assets/images/a3-1-2000x1333.webp" alt="Bedroom" span={1} />
                        <GalleryImg src="/assets/images/a3-15-2000x1333.webp" alt="Kitchen" span={1} />
                        <GalleryImg src="/assets/images/loutra-resort-b2-32-2000x1335.jpeg" alt="Pool" span={2} />
                    </div>
                </div>
            </section>

            <section style={{ background: '#005777', padding: '100px 0', textAlign: 'center', color: 'white' }}>
                <div className="container">
                    <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '3rem', marginBottom: '30px' }}>Ready for a Memorable Stay?</h2>
                    <Link href="/availability" className="btn" style={{ background: '#cba135', color: '#005777', border: 'none', padding: '20px 60px', fontSize: '14px', fontWeight: 'bold' }}>CHECK AVAILABILITY</Link>
                </div>
            </section>

            <ContactSection />
            <Footer />
        </main>
    );
}

function Amenity({ name, title }) {
    return (
        <div style={{ background: 'white', padding: '30px 20px', borderRadius: '4px', textAlign: 'center', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', transition: 'transform 0.3s' }} className="hover-card">
            <div style={{ marginBottom: '20px', display: 'flex', justifyContent: 'center' }}><Icon name={name} size={40} color="#cba135" /></div>
            <h4 style={{ color: '#333', fontSize: '1.1rem', fontWeight: 'bold' }}>{title}</h4>
            <style jsx>{` .hover-card:hover { transform: translateY(-5px); } `}</style>
        </div>
    );
}

function GalleryImg({ src, alt, span }) {
    return (
        <div style={{ gridColumn: `span ${span}`, height: '400px', position: 'relative', overflow: 'hidden', borderRadius: '2px' }} className="gallery-item-wrapper">
            <img src={src} alt={alt} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.8s ease' }} className="hover-zoom" />
        </div>
    );
}