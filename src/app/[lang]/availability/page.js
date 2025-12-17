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
        <main style={{ background: 'white' }}>
            <Navbar dict={dict} />
            <HouseHero title={dict.booking.hero_title} subtitle={dict.booking.hero_sub} img="/assets/images/loutra resort b2-2-1500x1500.jpeg" />

            <section className="section-padding">
                <div className="container">
                    <Reveal>
                        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                            <h2 style={{ fontSize: '2.5rem', color: '#005777', fontFamily: 'var(--font-heading)' }}>{dict.booking.gateway_title}</h2>
                            <p style={{ color: '#666', maxWidth: '600px', margin: '15px auto 0' }}>{dict.booking.gateway_text}</p>
                        </div>
                    </Reveal>
                    <div className="booking-layout">
                        <div className="booking-left"><Reveal delay={0.2}><BookingSelection dict={dict} /></Reveal></div>
                        <div className="booking-right"><Reveal delay={0.4}><BookingPerks dict={dict} /></Reveal></div>
                    </div>
                </div>
            </section>

            <section style={{ background: '#fdfbf7', padding: '100px 0' }}>
                <div className="container">
                    <Reveal>
                        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
                            <h3 style={{ fontSize: '2.5rem', color: '#005777', fontFamily: 'var(--font-heading)' }}>{dict.booking.form_title}</h3>
                            <p style={{ color: '#888' }}>{dict.booking.form_text}</p>
                        </div>
                    </Reveal>
                    <div style={{ maxWidth: '700px', margin: '0 auto' }}>
                        <Reveal delay={0.2}><BookingForm dict={dict} /></Reveal>
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