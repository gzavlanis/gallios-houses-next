import {getDictionary} from "@/dictionaries/get-dictionary";
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import ContactSection from '../../../components/ContactSection';
import HouseHero from '../../../components/HouseHero';
import PlaceCard from '../../../components/PlaceCard';
import Reveal from '../../../components/Reveal';
import Icon from '../../../components/Icons';
import AttractionCard from "@/components/AttractionCard";

export default async function LocationPage({ params }) {
    const { lang } = await params;
    const dict = await getDictionary(lang);

    // Shortcut for cleaner code below
    const t = dict.location.places;

    return (
        <main style={{ background: 'white' }}>
            <Navbar dict={dict} />

            <HouseHero
                title={dict.location.hero_title}
                subtitle={dict.location.hero_sub}
                img="/assets/images/loutra.jpg"
            />

            {/* 1. INTRO: THE VILLAGE */}
            <section className="section-padding">
                <div className="container">
                    <div className="split-layout">
                        <div className="split-text">
                            <Reveal>
                <span style={{ color: '#cba135', letterSpacing: '3px', textTransform: 'uppercase', fontSize: '12px', fontWeight: 'bold' }}>
                  {dict.location.village_sub}
                </span>
                                <h2 style={{ fontSize: '3rem', color: '#005777', marginTop: '15px', marginBottom: '30px', fontFamily: 'var(--font-heading)' }}>
                                    {dict.location.village_title}
                                </h2>
                            </Reveal>
                            <Reveal delay={0.1}>
                                <p style={{ color: '#666', fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '20px' }}>
                                    {dict.location.village_text}
                                </p>
                            </Reveal>
                        </div>
                        <div className="tall-image-container">
                            <Reveal delay={0.3} height="100%">
                                <img src="/assets/images/loutra-alley.jpg" alt="Loutra" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </Reveal>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. DISTANCES (Static numbers, translated titles) */}
            <section style={{ background: '#fdfbf7', padding: '80px 0' }}>
                <div className="container">
                    <Reveal>
                        <div className="text-center mb-16" style={{ marginBottom: '60px' }}>
                            <h3 style={{ fontFamily: 'var(--font-heading)', color: '#005777', fontSize: '2.5rem' }}>
                                {dict.location.distances_title}
                            </h3>
                        </div>
                    </Reveal>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px' }}>
                        <DistanceCard icon="home" title="Rethymno" dist="10 km" time="15 min" />
                        <DistanceCard icon="beach" title="Beach" dist="5 km" time="8 min" />
                        <DistanceCard icon="paperPlane" title="Heraklion Airport" dist="75 km" time="1 hr" />
                        <DistanceCard icon="paperPlane" title="Chania Airport" dist="80 km" time="1 hr 10 min" />
                        <DistanceCard icon="star" title="Panormo" dist="12 km" time="15 min" />
                        <DistanceCard icon="globe" title="Arkadi" dist="8 km" time="12 min" />
                    </div>
                </div>
            </section>

            {/* 3. GASTRONOMY (9 Restored Places) */}
            <section className="section-padding">
                <div className="container">
                    <Reveal>
                        <div className="text-center mb-16" style={{ marginBottom: '60px' }}>
              <span style={{ color: '#cba135', letterSpacing: '2px', textTransform: 'uppercase', fontSize: '11px', fontWeight: 'bold' }}>
                {dict.location.dining_sub}
              </span>
                            <h3 style={{ fontFamily: 'var(--font-heading)', color: '#005777', fontSize: '2.5rem', marginTop: '10px' }}>
                                {dict.location.dining_title}
                            </h3>
                        </div>
                    </Reveal>

                    <div className="gallery-grid">
                        {/* Row 1 */}
                        <Reveal delay={0}><PlaceCard img="/assets/images/agrimia-restaurant-old-1-858x611.webp" title="Agrimia" desc={t.agrimia} link="https://www.agrimia.gr/" /></Reveal>
                        <Reveal delay={0.1}><PlaceCard img="/assets/images/arokaria-858x644.webp" title="Arokaria" desc={t.arokaria} link="https://www.facebook.com/Arokaria" /></Reveal>
                        <Reveal delay={0.2}><PlaceCard img="/assets/images/bakalogatos-550x310.webp" title="Bakalogatos" desc={t.bakalogatos} link="https://www.facebook.com/bakalogatos.rethymno" /></Reveal>

                        {/* Row 2 */}
                        <Reveal delay={0}><PlaceCard img="/assets/images/galera-800x520.webp" title="Galera" desc={t.galera} link="https://galera-restaurant.gr/en" /></Reveal>
                        <Reveal delay={0.1}><PlaceCard img="/assets/images/nafpigio-858x644.webp" title="Nafpigio" desc={t.nafpigio} link="https://www.facebook.com/nafpigio" /></Reveal>
                        <Reveal delay={0.2}><PlaceCard img="/assets/images/paprika-858x453.webp" title="Paprika" desc={t.paprika} link="https://www.facebook.com/people/Red-Paprika/100057530867822/" /></Reveal>

                        {/* Row 3 */}
                        <Reveal delay={0}><PlaceCard img="/assets/images/pigadi-858x483.webp" title="Pigadi" desc={t.pigadi} link="https://www.pigadi-crete.com/en/" /></Reveal>
                        <Reveal delay={0.1}><PlaceCard img="/assets/images/thraka-858x483.webp" title="Thraka" desc={t.thraka} link="https://www.facebook.com/thrakarethymno" /></Reveal>
                        <Reveal delay={0.2}><PlaceCard img="/assets/images/tsoukali-2-550x228.webp" title="Tsoukali" desc={t.tsoukali} link="https://www.facebook.com/to.tsoukali" /></Reveal>
                    </div>
                </div>
            </section>

            {/* 4. NIGHTLIFE (3 Restored Places) */}
            <section style={{ background: '#fdfbf7', padding: '100px 0' }}>
                <div className="container">
                    <Reveal>
                        <div className="text-center mb-16" style={{ marginBottom: '60px' }}>
              <span style={{ color: '#cba135', letterSpacing: '2px', textTransform: 'uppercase', fontSize: '11px', fontWeight: 'bold' }}>
                {dict.location.nightlife_sub}
              </span>
                            <h3 style={{ fontFamily: 'var(--font-heading)', color: '#005777', fontSize: '2.5rem', marginTop: '10px' }}>
                                {dict.location.nightlife_title}
                            </h3>
                        </div>
                    </Reveal>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
                        <Reveal delay={0}>
                            <PlaceCard img="/assets/images/baya-858x477.webp" title="Baja Beach Club" desc={t.baja} link="https://bajabeach.gr/" />
                        </Reveal>
                        <Reveal delay={0.1}>
                            <PlaceCard img="/assets/images/baraki-563x380.webp" title="Raki Ba Raki" desc={t.baraki} link="https://www.avli.gr/raki-baraki/" />
                        </Reveal>
                        <Reveal delay={0.2}>
                            <PlaceCard img="/assets/images/nuvel-858x644.webp" title="Nuvel" desc={t.nuvel} link="https://www.facebook.com/Nuvel-215103951838243/" />
                        </Reveal>
                    </div>
                </div>
            </section>

            {/* 5. CULTURE & SIGHTS (6 Restored Places with Mosaic) */}
            <section className="section-padding">
                <div className="container">
                    <Reveal>
                        <div className="text-center mb-16" style={{ marginBottom: '60px' }}>
              <span style={{ color: '#cba135', letterSpacing: '2px', textTransform: 'uppercase', fontSize: '11px', fontWeight: 'bold' }}>
                {dict.location.explore_sub}
              </span>
                            <h3 style={{ fontFamily: 'var(--font-heading)', color: '#005777', fontSize: '2.5rem', marginTop: '10px' }}>
                                {dict.location.explore_title}
                            </h3>
                        </div>
                    </Reveal>

                    <div className="gallery-grid">
                        <div style={{ gridColumn: 'span 2' }}>
                            <Reveal delay={0}><AttractionCard img="/assets/images/arcadi-monastery-858x493.webp" title="Arkadi" desc={t.arkadi} link="https://arkadimonastery.gr/" /></Reveal>
                        </div>
                        <div style={{ gridColumn: 'span 1' }}>
                            <Reveal delay={0.1}><AttractionCard img="/assets/images/fortezza-858x572.webp" title="Fortezza" desc={t.fortezza} link="https://www.rethymno.gr/en/city/fortezza" /></Reveal>
                        </div>
                        <div style={{ gridColumn: 'span 1' }}>
                            <Reveal delay={0.2}><AttractionCard img="/assets/images/mouseia-858x496.webp" title="Eleutherna" desc={t.eleutherna} link="https://mae.com.gr/" /></Reveal>
                        </div>
                        <div style={{ gridColumn: 'span 2' }}>
                            <Reveal delay={0.3}><AttractionCard img="/assets/images/melidoni-cave-858x572.webp" title="Melidoni" desc={t.melidoni} link="https://www.tripadvisor.com" /></Reveal>
                        </div>
                        <div style={{ gridColumn: 'span 1' }}>
                            <Reveal delay={0.4}><AttractionCard img="/assets/images/psiloritis-1-858x568.webp" title="Psiloritis" desc={t.psiloritis} link="#" /></Reveal>
                        </div>
                        <div style={{ gridColumn: 'span 1' }}>
                            <Reveal delay={0.5}><AttractionCard img="/assets/images/episkopi-beach-858x482.webp" title="Episkopi" desc={t.episkopi} link="#" /></Reveal>
                        </div>
                    </div>
                </div>
            </section>

            <ContactSection dict={dict} />
            <Footer dict={dict} />
        </main>
    );
}

// Sub-Component for Distances
function DistanceCard({ icon, title, dist, time }) {
    return (
        <div className="hover-card" style={{ background: 'white', padding: '30px 20px', borderRadius: '4px', textAlign: 'center', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
            <div style={{ color: '#cba135', marginBottom: '15px', display: 'flex', justifyContent: 'center' }}><Icon name={icon} size={36} /></div>
            <h4 style={{ fontSize: '1.2rem', color: '#005777', fontWeight: 'bold' }}>{title}</h4>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginTop: '10px', fontSize: '0.9rem', fontWeight: 'bold', color: '#333' }}>
                <span>{dist}</span><span style={{ color: '#ccc' }}>|</span><span>{time}</span>
            </div>
        </div>
    );
}

export async function generateStaticParams() {
    return [{ lang: 'el' }, { lang: 'en' }, { lang: 'fr' }, { lang: 'de' }, { lang: 'it' }];
}