import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import FeaturesSection from '../components/FeaturesSection';
import DiscoverSection from '../components/DiscoverSection'; // Import the new component
import HousesSection from '../components/HousesSection';
import InfoIcons from '../components/InfoIcons';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

export default function Home() {
    return (
        <main style={{ backgroundColor: '#fff' }}>
            <Navbar />

            <Hero />

            {/* --- INTRO --- */}
            <section className="section-padding" style={{ paddingBottom: '60px' }}>
                <div className="container text-center">
                    <h1 style={{ fontSize: '3rem', marginBottom: '40px', color: '#2c3e50' }}>
                        Your personal haven of <span style={{ color: '#005777', fontStyle: 'italic' }}>Tranquility</span>
                    </h1>
                    <div style={{ maxWidth: '800px', margin: '0 auto', color: '#666', fontSize: '1.1rem', lineHeight: '1.8' }}>
                        <p>
                            Welcome to our website. The accommodation we offer is located at a very convenient location for any of your excursions.
                            It is located in a village 15 minutes away from Rethymno city, named Loutra.
                        </p>
                    </div>
                </div>
            </section>

            {/* --- FEATURES --- */}
            <FeaturesSection />

            {/* --- NEW SPECTACULAR DISCOVER SECTION --- */}
            <DiscoverSection />

            {/* --- HOUSES --- */}
            <HousesSection />

            {/* --- AMENITIES --- */}
            <InfoIcons />

            {/* --- CONTACT --- */}
            <ContactSection />

            <Footer />
        </main>
    );
}