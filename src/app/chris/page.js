import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import ContactSection from '../../components/ContactSection';
import HouseHero from '../../components/HouseHero';
import Link from 'next/link';
import Icon from '../../components/Icons';
import Testimonials from '../../components/Testimonials';

export default function ChrisHouse() {
    return (
        <main style={{ background: 'white' }}>
            <Navbar />

            <HouseHero
                title="CHRIS HOUSE"
                subtitle="AFFORDABLE LUXURY"
                img="/assets/images/a3-19-1080x720.jpeg"
            />

            {/* 1. NARRATIVE */}
            <section className="section-padding">
                <div className="container">
                    <div className="split-layout">
                        <div className="split-text">
                            <span style={{ color: '#cba135', letterSpacing: '3px', textTransform: 'uppercase', fontSize: '12px', fontWeight: 'bold' }}>The Residence</span>
                            <h2 style={{ fontSize: '3rem', color: '#005777', marginTop: '15px', marginBottom: '30px', fontFamily: 'var(--font-heading)' }}>Ground Floor Sanctuary</h2>
                            <p style={{ color: '#666', fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '20px' }}>
                                Located in a complex of houses in Loutra, Rethymno, in a beautifully landscaped area with gardens and swimming pools. You will enjoy a well-decorated ground-floor house with both a front and rear garden.
                            </p>
                            <div className="quote-block">
                                &#34;The apartment consists of 1 bedroom with a double bed, TV, and A/C, a fully equipped kitchen, and a living room with a sofa bed. <strong>The place is ideal for families.</strong>&#34;
                            </div>
                            <p style={{ color: '#666', fontSize: '1.1rem', lineHeight: '1.8' }}>
                                Guests will have access to all areas indoor and outdoor and full privacy inside the house.
                            </p>
                        </div>
                        <div className="tall-image-container">
                            <img src="/assets/images/a3-13-2000x1333.webp" alt="Chris House Living Room" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. FACILITIES */}
            <section style={{ background: '#fdfbf7', padding: '100px 0' }}>
                <div className="container">
                    <div className="text-center mb-16" style={{ marginBottom: '60px' }}>
                        <span style={{ color: '#cba135', letterSpacing: '2px', textTransform: 'uppercase', fontSize: '11px', fontWeight: 'bold' }}>Everything You Need</span>
                        <h3 style={{ fontFamily: 'var(--font-heading)', color: '#005777', fontSize: '2.5rem', marginTop: '10px' }}>Premium Facilities</h3>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '40px' }}>
                        <AmenityFloating name="users" title="Entire home" />
                        <AmenityFloating name="ruler" title="55 m² Spacious" />
                        <AmenityFloating name="kitchen" title="Full Kitchen" />
                        <AmenityFloating name="tv" title="Smart TV" />
                        <AmenityFloating name="tree" title="Private Gardens" />
                        <AmenityFloating name="parking" title="Free Parking" />
                        <AmenityFloating name="pool" title="2 Outdoor Pools" />
                        <AmenityFloating name="laundry" title="Washing Machine" />
                        <AmenityFloating name="wifi" title="Fast WiFi" />
                        <AmenityFloating name="chair" title="Terrace Seating" />
                        <AmenityFloating name="sun" title="Eco Solar Water" />
                        <AmenityFloating name="family" title="Family Friendly" />
                    </div>
                </div>
            </section>

            {/* 3. GALLERY: LIVING SPACES */}
            <section className="section-padding">
                <div className="container">
                    <div style={{ marginBottom: '50px', textAlign: 'center' }}>
                        <h3 style={{ color: '#005777', fontSize: '2.5rem', fontFamily: 'var(--font-heading)' }}>Living Spaces</h3>
                        <p style={{color:'#888'}}>A spacious open plan design filled with light.</p>
                    </div>
                    <div className="gallery-grid">
                        <GalleryImg src="/assets/images/a3-13-2000x1333.webp" alt="Living Room Wide" span={2} />
                        <GalleryImg src="/assets/images/a3-14-2000x1333.webp" alt="Living Room Detail" span={1} />
                        <GalleryImg src="/assets/images/a3-15-2000x1333.webp" alt="Kitchen" span={1} />
                        <GalleryImg src="/assets/images/a3-4-2000x1333.webp" alt="Dining Area" span={1} />
                        <GalleryImg src="/assets/images/a3-3-2000x1333.webp" alt="Lounge" span={1} />
                        <GalleryImg src="/assets/images/a3-6-2000x1333.webp" alt="Sofa Bed" span={2} />
                    </div>
                </div>
            </section>

            {/* 4. GALLERY: BEDROOM & BATH */}
            <section className="section-padding" style={{ background: '#fff' }}>
                <div className="container">
                    <div style={{ marginBottom: '50px', textAlign: 'center' }}>
                        <h3 style={{ color: '#005777', fontSize: '2.5rem', fontFamily: 'var(--font-heading)' }}>Rest & Refresh</h3>
                        <p style={{color:'#888'}}>Comfortable bedding and modern amenities.</p>
                    </div>
                    <div className="gallery-grid">
                        <GalleryImg src="/assets/images/a3-1-2000x1333.webp" alt="Master Bedroom" span={2} />
                        <GalleryImg src="/assets/images/a3-2-2000x1333.webp" alt="Bedroom Angle 2" span={1} />
                        <GalleryImg src="/assets/images/a3-7-2000x1333.webp" alt="Wardrobe" span={1} />
                        <GalleryImg src="/assets/images/a3-9-2000x1333.webp" alt="Bathroom" span={1} />
                        <GalleryImg src="/assets/images/a3-8-2000x1333.webp" alt="Bedroom Detail" span={1} />
                        <GalleryImg src="/assets/images/a3-11-2000x1333.webp" alt="Decor" span={2} />
                    </div>
                </div>
            </section>

            {/* 5. GALLERY: OUTDOORS */}
            <section className="section-padding" style={{ background: '#f0f8ff' }}>
                <div className="container">
                    <div style={{ marginBottom: '50px', textAlign: 'center' }}>
                        <h3 style={{ color: '#005777', fontSize: '2.5rem', fontFamily: 'var(--font-heading)' }}>Garden & Pool</h3>
                        <p style={{color:'#888'}}>Your private patio and the shared resort pools.</p>
                    </div>
                    <div className="gallery-grid">
                        <GalleryImg src="/assets/images/loutra-resort-b2-32-1500x1001.webp" alt="Pool Day" span={2} />
                        <GalleryImg src="/assets/images/a3-10-2000x1333.webp" alt="Terrace" span={1} />
                        <GalleryImg src="/assets/images/a3-36-2000x1333.webp" alt="Garden Path" span={1} />
                        <GalleryImg src="/assets/images/a3-37-2000x1333.webp" alt="Greenery" span={1} />
                        <GalleryImg src="/assets/images/a3-38-2000x1333.webp" alt="Patio" span={1} />
                        <GalleryImg src="/assets/images/loutra-resort-b2-29-1500x1000.webp" alt="Pool Evening" span={2} />
                        <GalleryImg src="/assets/images/a3-26-2000x1333.webp" alt="Outdoor Seating" span={1} />
                    </div>
                </div>
            </section>

            {/* 5. REAL REVIEWS (Custom Component) */}
            <Testimonials />

            {/* 6. BOOKING CTA - CINEMATIC PARALLAX STYLE */}
            <section style={{
                position: 'relative',
                backgroundImage: 'url("/assets/images/loutra-resort-b2-29-1500x1000.jpeg")', // Stunning Night Shot
                backgroundAttachment: 'fixed', // Parallax Effect
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                padding: '150px 0',
                color: 'white',
                textAlign: 'center',
                overflow: 'hidden'
            }}>
                {/* Dark Teal Gradient Overlay for readability */}
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(0,87,119,0.85), rgba(0,87,119,0.6))' }}></div>

                <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                <span style={{
                    display: 'block', textTransform: 'uppercase', letterSpacing: '4px',
                    fontSize: '14px', fontWeight: 'bold', marginBottom: '20px', color: '#cba135'
                }}>
                    Reserve Your Sanctuary
                </span>

                    <h2 style={{
                        fontFamily: 'var(--font-heading)', fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                        marginBottom: '30px', color: 'white', textShadow: '0 10px 30px rgba(0,0,0,0.3)'
                    }}>
                        Ready for a Memorable Stay?
                    </h2>

                    <p style={{
                        fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto 50px',
                        opacity: 0.95, lineHeight: '1.8', fontWeight: '300'
                    }}>
                        Book your dates now and secure your private haven in Loutra. Experience the perfect blend of luxury and authentic Cretan hospitality.
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

// SUB-COMPONENTS
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