import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import FeaturesSection from '../components/FeaturesSection';
import HousesSection from '../components/HousesSection';
import InfoIcons from '../components/InfoIcons';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

export default function Home() {
    return (
        <main>
            <Navbar />
            <Hero />
            <section className="section-padding" style={{ paddingBottom: '60px' }}>
                <div className="container text-center">
                    <h1 style={{ fontSize: '3rem', marginBottom: '40px', color: '#2c3e50', fontFamily: 'var(--font-heading)' }}>
                        Your personal haven of <span style={{ color: '#005777', fontStyle: 'italic' }}>Tranquility</span>
                    </h1>
                    <p style={{ maxWidth: '800px', margin: '0 auto', color: '#666', fontSize: '1.1rem' }}>
                        Welcome to our website. The accommodation we offer is located at a very convenient location for any of your excursions, in the village of Loutra.
                    </p>
                </div>
            </section>
            <FeaturesSection />
            <HousesSection />
            <InfoIcons />
            <ContactSection />
            <Footer />
        </main>
    );
}