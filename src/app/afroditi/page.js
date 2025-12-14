import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import ContactSection from '../../components/ContactSection';
import HouseHero from '../../components/HouseHero';
import Link from 'next/link';
import Icon from '../../components/Icons';
import TestimonialsAfroditi from '../../components/TestimonialsAfroditi';

export default function AfroditiSuite() {
    return (
        <main style={{ background: 'white' }}>
            <Navbar />

            {/* 1. HERO SECTION
          Updated extension to .webp
      */}
            <HouseHero
                title="AFRODITI SUITE"
                subtitle="ELEVATED LUXURY"
                img="/assets/images/loutra-resort-b2-26-1080x721.webp"
            />

            {/* 2. NARRATIVE */}
            <section className="section-padding">
                <div className="container">
                    <div className="split-layout">
                        <div className="split-text">
                            <span style={{ color: '#cba135', letterSpacing: '3px', textTransform: 'uppercase', fontSize: '12px', fontWeight: 'bold' }}>The Experience</span>
                            <h2 style={{ fontSize: '3rem', color: '#005777', marginTop: '15px', marginBottom: '30px', fontFamily: 'var(--font-heading)' }}>Your Private Rooftop Oasis</h2>
                            <p style={{ color: '#666', fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '20px' }}>
                                Afroditi Suite is a calm, modern, and luxurious retreat located on the upper floor, offering commanding views of the resort and countryside.
                            </p>
                            <div className="quote-block">
                                "Enjoy calm moments in your <strong>private hot tub</strong> or host an unforgettable BBQ night on the expansive terrace."
                            </div>
                            <p style={{ color: '#666', fontSize: '1.1rem', lineHeight: '1.8' }}>
                                The suite features a convenient living room to relax in, a fully equipped kitchen, and two spacious bedrooms. It is the perfect choice for couples or families seeking privacy and style.
                            </p>
                        </div>
                        <div className="tall-image-container">
                            {/* Updated extension to .webp */}
                            <img src="/assets/images/loutra-resort-b2-19-1140x766.webp" alt="Afroditi Living" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. FACILITIES */}
            <section style={{ background: '#fdfbf7', padding: '100px 0' }}>
                <div className="container">
                    <div className="text-center mb-16" style={{ marginBottom: '60px' }}>
                        <span style={{ color: '#cba135', letterSpacing: '2px', textTransform: 'uppercase', fontSize: '11px', fontWeight: 'bold' }}>Amenities</span>
                        <h3 style={{ fontFamily: 'var(--font-heading)', color: '#005777', fontSize: '2.5rem', marginTop: '10px' }}>Suite Features</h3>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '40px' }}>
                        <AmenityFloating name="users" title="5 Guests" />
                        <AmenityFloating name="ruler" title="75 m² Suite" />
                        <AmenityFloating name="pool" title="Private Hot Tub" />
                        <AmenityFloating name="chair" title="Huge Terrace" />
                        <AmenityFloating name="kitchen" title="Full Kitchen" />
                        <AmenityFloating name="tv" title="Smart TV" />
                        <AmenityFloating name="sun" title="BBQ Facilities" />
                        <AmenityFloating name="parking" title="Free Parking" />
                        <AmenityFloating name="pool" title="Resort Pools" />
                        <AmenityFloating name="wifi" title="Fast WiFi" />
                        <AmenityFloating name="laundry" title="Washing Machine" />
                        <AmenityFloating name="wind" title="Air Conditioning" />
                    </div>
                </div>
            </section>

            {/* 4. GALLERY: INTERIORS (Updated to .webp) */}
            <section className="section-padding">
                <div className="container">
                    <div style={{ marginBottom: '50px', textAlign: 'center' }}>
                        <h3 style={{ color: '#005777', fontSize: '2.5rem', fontFamily: 'var(--font-heading)' }}>Living & Sleeping</h3>
                        <p style={{color:'#888'}}>Spacious interiors with modern design.</p>
                    </div>

                    <div className="gallery-grid">
                        {/* Living Area */}
                        <GalleryImg src="/assets/images/loutra-resort-b2-26-1080x721.webp" alt="Living Room" span={2} />
                        <GalleryImg src="/assets/images/loutra-resort-b2-19-1140x766.webp" alt="Open Plan" span={1} />

                        {/* Kitchen & Dining */}
                        <GalleryImg src="/assets/images/loutra-resort-b2-13-1500x1001.webp" alt="Kitchen" span={1} />
                        <GalleryImg src="/assets/images/loutra-resort-b2-20-1500x1001.webp" alt="Dining Table" span={1} />
                        <GalleryImg src="/assets/images/loutra-resort-b2-14-1500x1001.webp" alt="Kitchen Detail" span={1} />

                        {/* Bedroom 1 (Double) */}
                        <GalleryImg src="/assets/images/loutra-resort-b2-6-1500x1001.webp" alt="Master Bedroom" span={2} />
                        <GalleryImg src="/assets/images/loutra-resort-b2-5-1500x1001.webp" alt="Master Detail" span={1} />

                        {/* Bedroom 2 (Twins) */}
                        <GalleryImg src="/assets/images/loutra-resort-b2-7-1500x1001.webp" alt="Twin Bedroom" span={1} />
                        <GalleryImg src="/assets/images/loutra-resort-b2-8-1500x1001.webp" alt="Twin Detail" span={1} />
                        <GalleryImg src="/assets/images/loutra-resort-b2-9-1500x1001.webp" alt="Twin Angle" span={1} />

                        {/* Bathroom */}
                        <GalleryImg src="/assets/images/loutra-resort-b2-11-1500x1001.webp" alt="Bathroom" span={1} />
                        <GalleryImg src="/assets/images/loutra-resort-b2-12-1500x1001.webp" alt="Shower" span={1} />
                    </div>
                </div>
            </section>

            {/* 5. GALLERY: THE TERRACE (Updated to .webp) */}
            <section className="section-padding" style={{ background: '#f0f8ff' }}>
                <div className="container">
                    <div style={{ marginBottom: '50px', textAlign: 'center' }}>
                        <h3 style={{ color: '#005777', fontSize: '2.5rem', fontFamily: 'var(--font-heading)' }}>The Private Terrace</h3>
                        <p style={{color:'#888'}}>Your exclusive outdoor living room with Hot Tub & BBQ.</p>
                    </div>

                    <div className="gallery-grid">
                        <GalleryImg src="/assets/images/loutra-resort-b2-30-1500x1001.webp" alt="Terrace Dining" span={2} />
                        <GalleryImg src="/assets/images/loutra-resort-b2-23-1500x1001.webp" alt="Hot Tub" span={1} />
                        <GalleryImg src="/assets/images/loutra-resort-b2-24-1500x1001.webp" alt="Relax Area" span={1} />
                        <GalleryImg src="/assets/images/loutra-resort-b2-25-1500x1001.webp" alt="Sun Loungers" span={2} />
                        <GalleryImg src="/assets/images/loutra-resort-b2-22-1500x1001.webp" alt="BBQ Area" span={1} />
                        <GalleryImg src="/assets/images/loutra-resort-b2-21-1500x1001.webp" alt="Terrace View" span={1} />
                    </div>
                </div>
            </section>

            {/* 6. GALLERY: POOL & RESORT (Updated to .webp) */}
            <section className="section-padding">
                <div className="container">
                    <div style={{ marginBottom: '50px', textAlign: 'center' }}>
                        <h3 style={{ color: '#005777', fontSize: '2.5rem', fontFamily: 'var(--font-heading)' }}>Pool & Gardens</h3>
                        <p style={{color:'#888'}}>Beautifully landscaped resort grounds.</p>
                    </div>
                    <div className="gallery-grid">
                        <GalleryImg src="/assets/images/loutra-resort-b2-32-2000x1335.webp" alt="Pool Day" span={2} />
                        <GalleryImg src="/assets/images/loutra-resort-b2-29-1500x1000.webp" alt="Pool Night" span={1} />
                        <GalleryImg src="/assets/images/loutra-resort-b2-331-2000x1333.webp" alt="Gardens" span={1} />
                        <GalleryImg src="/assets/images/loutra-resort-b2-2-1500x1001.webp" alt="Exterior" span={2} />
                    </div>
                </div>
            </section>

            {/* 7. REVIEWS & CTA */}
            <TestimonialsAfroditi />

            <section style={{
                position: 'relative',
                backgroundImage: 'url("/assets/images/loutra-resort-b2-29-1500x1000.webp")', // Night shot .webp
                backgroundAttachment: 'fixed',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                padding: '150px 0',
                color: 'white',
                textAlign: 'center',
                overflow: 'hidden'
            }}>
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(0,87,119,0.85), rgba(0,87,119,0.6))' }}></div>

                <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <span style={{ display: 'block', textTransform: 'uppercase', letterSpacing: '4px', fontSize: '14px', fontWeight: 'bold', marginBottom: '20px', color: '#cba135' }}>
            Elevate Your Vacation
          </span>
                    <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '30px', color: 'white', textShadow: '0 10px 30px rgba(0,0,0,0.3)' }}>
                        Experience the Afroditi Suite
                    </h2>
                    <p style={{ fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto 50px', opacity: 0.95, lineHeight: '1.8', fontWeight: '300' }}>
                        A private terrace, a hot tub under the stars, and modern comfort await you.
                    </p>
                    <Link href="/availability" className="btn-parallax">
                        CHECK AVAILABILITY
                    </Link>
                </div>
            </section>

            <ContactSection />
            <Footer />
        </main>
    );
}

// --- SUB-COMPONENTS ---
function AmenityFloating({ name, title }) {
    return (
        <div className="amenity-float">
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Icon name={name} size={45} color="#cba135" />
            </div>
            <h4 style={{ fontWeight: 'bold' }}>{title}</h4>
        </div>
    );
}

function GalleryImg({ src, alt, span }) {
    return (
        <div style={{ gridColumn: `span ${span}`, height: '400px', position: 'relative', overflow: 'hidden', borderRadius: '4px', boxShadow: '0 10px 20px rgba(0,0,0,0.05)' }} className="gallery-item-wrapper">
            <img src={src} alt={alt} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.8s ease' }} className="hover-zoom" />
        </div>
    );
}