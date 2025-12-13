import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import ContactSection from '../../components/ContactSection';
import HouseHero from '../../components/HouseHero';
import Link from 'next/link';
import {
    FaUserFriends, FaRulerCombined, FaBed, FaWifi,
    FaSwimmingPool, FaTv, FaParking, FaSun, FaUtensils, FaTree, FaChair
} from 'react-icons/fa';
import { MdLocalLaundryService } from 'react-icons/md';

export default function ChrisHouse() {
    return (
        <main style={{ background: 'white' }}>
            <Navbar />

            {/* 1. HERO SECTION
          - Image: Using the main cover image
          - Title: CHRIS HOUSE
          - Sub: AFFORDABLE LUXURY (from your HTML)
      */}
            <HouseHero
                title="Chris House"
                subtitle="AFFORDABLE LUXURY"
                img="/assets/images/a3-19-1080x720.jpeg"
            />

            {/* 2. DESCRIPTION & INTRO */}
            <section className="section-padding" style={{ paddingBottom: '50px' }}>
                <div className="container">
                    <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
            <span style={{ color: '#cba135', letterSpacing: '3px', textTransform: 'uppercase', fontSize: '12px', fontWeight: 'bold' }}>
              The Residence
            </span>
                        <h2 style={{ fontSize: '3rem', color: '#005777', marginTop: '15px', marginBottom: '40px', fontFamily: 'var(--font-heading)' }}>
                            Ground Floor Sanctuary
                        </h2>

                        <div style={{ textAlign: 'left', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px', color: '#666', fontSize: '1.1rem', lineHeight: '1.8' }}>
                            <div>
                                <p style={{ marginBottom: '20px' }}>
                                    The apartment consists of <strong>1 bedroom</strong> with a double bed, TV, and A/C, a fully equipped kitchen, and a living room with a sofa bed. <strong>The place is ideal for families.</strong>
                                </p>
                                <p>
                                    Guests will have access to all areas indoor and outdoor and full privacy inside the house.
                                </p>
                            </div>
                            <div>
                                <p>
                                    Located in a complex of houses in Loutra, Rethymno, in a beautifully landscaped area with <strong>gardens and swimming pools</strong>. You will enjoy a well-decorated ground-floor house with both a front and rear garden.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. FACILITIES GRID (Matching your HTML icons) */}
            <section style={{ background: '#fdfbf7', padding: '100px 0' }}>
                <div className="container">
                    <div className="text-center mb-16">
                        <h3 style={{ fontFamily: 'var(--font-heading)', color: '#005777', fontSize: '2.5rem' }}>Facilities</h3>
                        <div style={{ width: '60px', height: '2px', background: '#cba135', margin: '20px auto' }}></div>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '30px' }}>
                        <Amenity icon={<FaUserFriends />} title="Entire Home" sub="Full Privacy" />
                        <Amenity icon={<FaRulerCombined />} title="55 m²" sub="Spacious" />
                        <Amenity icon={<FaUtensils />} title="Kitchen" sub="Fully Equipped" />
                        <Amenity icon={<FaTv />} title="Smart TV" sub="Entertainment" />
                        <Amenity icon={<FaTree />} title="Private Garden" sub="Front & Rear" />
                        <Amenity icon={<FaParking />} title="Free Parking" sub="On Site" />
                        <Amenity icon={<FaSwimmingPool />} title="2 Outdoor Pools" sub="Complex Access" />
                        <Amenity icon={<MdLocalLaundryService />} title="Washing Machine" sub="Available" />
                        <Amenity icon={<FaWifi />} title="Free WiFi" sub="High Speed" />
                        <Amenity icon={<FaChair />} title="Terrace" sub="Outdoor Seating" />
                        <Amenity icon={<FaSun />} title="Solar Water" sub="Eco Friendly" />
                        <Amenity icon={<FaUserFriends />} title="Family Rooms" sub="Ideal for Kids" />
                    </div>
                </div>
            </section>

            {/* 4. CINEMATIC GALLERY */}
            <section className="section-padding">
                <div className="container">
                    <div className="text-center mb-16">
                        <h3 style={{ color: '#005777', fontSize: '2.5rem', fontFamily: 'var(--font-heading)' }}>Indoors & Outdoors</h3>
                        <p style={{ color: '#888' }}>Explore the interiors and surroundings</p>
                    </div>

                    {/* A Modern Masonry-style Grid with your images */}
                    <div className="gallery-grid">
                        {/* Main Living Area - Spans 2 columns */}
                        <GalleryImg src="/assets/images/a3-13-2000x1333.webp" alt="Living Room" span={2} />

                        {/* Bedroom - Spans 1 column */}
                        <GalleryImg src="/assets/images/a3-1-2000x1333.webp" alt="Bedroom" span={1} />

                        {/* Kitchen - Spans 1 column */}
                        <GalleryImg src="/assets/images/a3-15-2000x1333.webp" alt="Kitchen" span={1} />

                        {/* Pool Area - Spans 2 columns */}
                        <GalleryImg src="/assets/images/loutra-resort-b2-32-2000x1335.jpeg" alt="Pool" span={2} />

                        {/* Terrace - Spans 1 column */}
                        <GalleryImg src="/assets/images/a3-10-2000x1333.webp" alt="Terrace" span={1} />

                        {/* Exterior/Night - Spans 1 column */}
                        <GalleryImg src="/assets/images/loutra-resort-b2-29-1500x1000.jpeg" alt="Exterior" span={1} />

                        {/* Detail Shot - Spans 1 column */}
                        <GalleryImg src="/assets/images/a3-9-2000x1333.webp" alt="Bathroom" span={1} />
                    </div>
                </div>
            </section>

            {/* 5. TESTIMONIALS WIDGET */}
            <section style={{ padding: '80px 0', background: '#fff' }}>
                <div className="container text-center">
                    <h3 style={{ color: '#005777', marginBottom: '40px', fontFamily: 'var(--font-heading)' }}>What Our Customers Say</h3>
                    <div style={{ boxShadow: '0 20px 50px rgba(0,0,0,0.05)', borderRadius: '10px', overflow: 'hidden', padding: '20px' }}>
                        {/* Using your specific ElfSight ID */}
                        <iframe
                            src="https://b3b96956314240aa807caf097d77fa60.elf.site"
                            style={{ width: '100%', height: '400px', border: 'none' }}
                            loading="lazy"
                        ></iframe>
                    </div>
                </div>
            </section>

            {/* 6. BOOKING CTA */}
            <section style={{ background: '#005777', padding: '100px 0', textAlign: 'center', color: 'white' }}>
                <div className="container">
                    <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '3rem', marginBottom: '20px' }}>Ready for a Memorable Stay?</h2>
                    <p style={{ opacity: 0.9, marginBottom: '40px', maxWidth: '600px', margin: '0 auto 40px', fontSize: '1.2rem' }}>
                        Book your dates now and secure your private haven in Loutra.
                    </p>
                    <Link href="/availability" className="btn" style={{ background: '#cba135', color: '#005777', border: 'none', padding: '20px 60px', fontSize: '14px' }}>
                        CHECK AVAILABILITY
                    </Link>
                </div>
            </section>

            {/* 7. CONTACT & FOOTER */}
            <ContactSection />
            <Footer />
        </main>
    );
}

// --- SUB-COMPONENTS FOR THIS PAGE ---

function Amenity({ icon, title, sub }) {
    return (
        <div style={{
            background: 'white', padding: '30px 20px', borderRadius: '4px', textAlign: 'center',
            boxShadow: '0 10px 30px rgba(0,0,0,0.05)', transition: 'transform 0.3s'
        }} className="hover-card">
            <div style={{ fontSize: '2.5rem', color: '#cba135', marginBottom: '20px', display: 'flex', justifyContent: 'center' }}>
                {icon}
            </div>
            <h4 style={{ color: '#333', fontSize: '1.1rem', marginBottom: '5px', fontWeight: 'bold' }}>{title}</h4>
            <p style={{ color: '#999', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '1px' }}>{sub}</p>
        </div>
    );
}

function GalleryImg({ src, alt, span }) {
    return (
        <div style={{
            gridColumn: `span ${span}`,
            height: '400px',
            position: 'relative',
            overflow: 'hidden',
            borderRadius: '2px'
        }} className="gallery-item-wrapper">
            <img
                src={src}
                alt={alt}
                style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.8s ease' }}
                className="hover-zoom"
            />
        </div>
    );
}