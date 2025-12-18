import {getDictionary} from "@/dictionaries/get-dictionary";
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import HouseHero from '../../../components/HouseHero';
import BookingSelection from '../../../components/BookingSelection';
import BookingPerks from '../../../components/BookingPerks';
import BookingForm from '../../../components/BookingForm';
import Reveal from '../../../components/Reveal';

export default async function AvailabilityPage({ params }) {
    const { lang } = await params;
    const dict = await getDictionary(lang);

    return (
        <main style={{ background: '#fdfbf7' }}> {/* Off-white background for the whole page */}
            <Navbar dict={dict} />

            <HouseHero
                title={dict.booking.hero_title}
                subtitle={dict.booking.hero_sub}
                img="/assets/images/loutra resort b2-2-1500x1500.jpeg"
            />

            <section className="section-padding">
                <div className="container">

                    {/* Header */}
                    <Reveal>
                        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                            <h2 style={{ fontSize: '2.5rem', color: '#005777', fontFamily: 'var(--font-heading)' }}>
                                {dict.booking.gateway_title}
                            </h2>
                            <p style={{ color: '#666', maxWidth: '600px', margin: '15px auto 0', fontSize: '1.1rem' }}>
                                {dict.booking.gateway_text}
                            </p>
                        </div>
                    </Reveal>

                    {/* Main Layout: Cards Left, Form Right */}
                    <div className="booking-layout" style={{ alignItems: 'start' }}>

                        {/* Left: House Cards */}
                        <div className="booking-left">
                            <BookingSelection dict={dict} />
                        </div>

                        {/* Right: Sticky Form */}
                        <div className="booking-right" style={{ position: 'sticky', top: '120px' }}>
                            <Reveal delay={0.3}>
                                <BookingForm dict={dict} />
                            </Reveal>

                            <Reveal delay={0.4}>
                                <BookingPerks dict={dict} />
                            </Reveal>

                            {/* Simple Help Text below form */}
                            <div style={{ marginTop: '30px', textAlign: 'center', color: '#888', fontSize: '0.9rem' }}>
                                <p>Need help? Call us at <a href="tel:+306971234567" style={{ color: '#005777', fontWeight: 'bold' }}>+30 697 123 4567</a></p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <Footer dict={dict} />
        </main>
    );
}

export async function generateStaticParams() {
    return [{ lang: 'el' }, { lang: 'en' }, { lang: 'fr' }, { lang: 'de' }, { lang: 'it' }];
}