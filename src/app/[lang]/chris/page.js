import {getDictionary} from "@/dictionaries/get-dictionary";
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import ContactSection from '../../../components/ContactSection';
import HouseHero from '../../../components/HouseHero';
import Icon from '../../../components/Icons';
import Testimonials from '../../../components/Testimonials';
import Reveal from '../../../components/Reveal';
import Link from 'next/link';

export default async function ChrisHouse({ params }) {
    const { lang } = await params;
    const dict = await getDictionary(lang);

    return (
        <main style={{ background: 'white' }}>
            <Navbar dict={dict} />

            <HouseHero title="CHRIS HOUSE" subtitle={dict.chris.hero_sub} img="/assets/images/a3-19-1080x720.jpeg" />

            {/* 1. NARRATIVE */}
            <section className="section-padding">
                <div className="container">
                    <div className="split-layout">
                        <div className="split-text">
                            <Reveal>
                                <span style={{ color: '#cba135', letterSpacing: '3px', textTransform: 'uppercase', fontSize: '12px', fontWeight: 'bold' }}>{dict.chris.narrative_sub}</span>
                                <h2 style={{ fontSize: '3rem', color: '#005777', marginTop: '15px', marginBottom: '30px', fontFamily: 'var(--font-heading)' }}>{dict.chris.narrative_title}</h2>
                            </Reveal>
                            <Reveal delay={0.1}><p style={{ color: '#666', fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '20px' }}>{dict.chris.narrative_text_1}</p></Reveal>
                            <Reveal delay={0.2}><div className="quote-block">"{dict.chris.quote}"</div></Reveal>
                            <Reveal delay={0.3}><p style={{ color: '#666', fontSize: '1.1rem', lineHeight: '1.8' }}>{dict.chris.narrative_text_2}</p></Reveal>
                        </div>
                        <div className="tall-image-container">
                            <Reveal delay={0.4} height="100%"><img src="/assets/images/a3-13-2000x1333.webp" alt="Chris House Living" style={{ width: '100%', height: '100%', objectFit: 'cover' }} /></Reveal>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. FACILITIES */}
            <section style={{ background: '#fdfbf7', padding: '100px 0' }}>
                <div className="container">
                    <Reveal>
                        <div className="text-center mb-16" style={{ marginBottom: '60px' }}>
                            <h3 style={{ fontFamily: 'var(--font-heading)', color: '#005777', fontSize: '2.5rem' }}>{dict.chris.facilities_title}</h3>
                        </div>
                    </Reveal>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '40px' }}>
                        <AmenityFloating name="users" title={`4 ${dict.amenities.users}`} />
                        <AmenityFloating name="ruler" title={`55 ${dict.amenities.ruler}`} />
                        <AmenityFloating name="kitchen" title={dict.amenities.kitchen} />
                        <AmenityFloating name="tv" title={dict.amenities.tv} />
                        <AmenityFloating name="tree" title={dict.amenities.tree} />
                        <AmenityFloating name="parking" title={dict.amenities.parking} />
                        <AmenityFloating name="pool" title={dict.amenities.pool} />
                        <AmenityFloating name="wifi" title={dict.amenities.wifi} />
                        <AmenityFloating name="chair" title={dict.amenities.chair} />
                        <AmenityFloating name="sun" title={dict.amenities.sun} />
                        <AmenityFloating name="laundry" title={dict.amenities.laundry} />
                        <AmenityFloating name="family" title={dict.amenities.family} />
                    </div>
                </div>
            </section>

            {/* 3. RESTORED MOSAIC GALLERY */}
            <section className="section-padding">
                <div className="container">
                    <Reveal>
                        <div style={{ marginBottom: '50px', textAlign: 'center' }}>
                            <h3 style={{ color: '#005777', fontSize: '2.5rem', fontFamily: 'var(--font-heading)' }}>{dict.chris.gallery_living}</h3>
                        </div>
                    </Reveal>

                    {/* THE MOSAIC GRID */}
                    <div className="gallery-grid">
                        <GalleryImg span={2} src="/assets/images/a3-13-2000x1333.webp" alt="Living Room Wide" delay={0} />
                        <GalleryImg span={1} src="/assets/images/a3-14-2000x1333.webp" alt="Living Room Detail" delay={0.1} />

                        <GalleryImg span={1} src="/assets/images/a3-15-2000x1333.webp" alt="Kitchen" delay={0.2} />
                        <GalleryImg span={1} src="/assets/images/a3-4-2000x1333.webp" alt="Dining Area" delay={0.3} />
                        <GalleryImg span={1} src="/assets/images/a3-3-2000x1333.webp" alt="Lounge" delay={0.4} />

                        <GalleryImg span={2} src="/assets/images/a3-6-2000x1333.webp" alt="Sofa Bed" delay={0.5} />
                        <GalleryImg span={1} src="/assets/images/a3-8-2000x1333.webp" alt="Bedroom" delay={0.6} />
                    </div>

                    <Reveal>
                        <div style={{ marginBottom: '50px', marginTop: '80px', textAlign: 'center' }}>
                            <h3 style={{ color: '#005777', fontSize: '2.5rem', fontFamily: 'var(--font-heading)' }}>{dict.chris.gallery_outdoors}</h3>
                        </div>
                    </Reveal>

                    <div className="gallery-grid">
                        <GalleryImg span={1} src="/assets/images/a3-17-2000x1333.jpeg" alt="Patio" delay={0} />
                        <GalleryImg span={2} src="/assets/images/a3-19-1080x720.jpeg" alt="Garden Wide" delay={0.1} />
                        <GalleryImg span={3} src="/assets/images/loutra resort b2-2-1500x1500.jpeg" alt="Pool Area" delay={0.2} />
                    </div>

                </div>
            </section>

            {/* 4. REVIEWS & CTA */}
            <Reveal>
                <Testimonials title={dict.chris.reviews_title} reviews={dict.chris.reviews_list} />
            </Reveal>

            <section style={{ position: 'relative', backgroundImage: 'url("/assets/images/loutra resort b2-29-1500x1000.jpeg")', backgroundAttachment: 'fixed', backgroundSize: 'cover', backgroundPosition: 'center', padding: '150px 0', color: 'white', textAlign: 'center' }}>
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(0,87,119,0.85), rgba(0,87,119,0.6))' }}></div>
                <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                    <Reveal>
                        <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '30px', color: 'white' }}>{dict.chris.cta_title}</h2>
                        <p style={{ fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto 50px', opacity: 0.95 }}>{dict.chris.cta_text}</p>
                        <Link href={`/${lang}/availability`} className="btn-parallax">{dict.nav.book}</Link>
                    </Reveal>
                </div>
            </section>

            <ContactSection dict={dict} />
            <Footer dict={dict} />
        </main>
    );
}

// Helper Components defined at the bottom of the file
function AmenityFloating({ name, title }) {
    return (
        <Reveal>
            <div className="amenity-float">
                <div style={{ display: 'flex', justifyContent: 'center' }}><Icon name={name} size={45} color="#cba135" /></div>
                <h4 style={{ fontWeight: 'bold' }}>{title}</h4>
            </div>
        </Reveal>
    );
}

// The component that recreates your old style
function GalleryImg({ src, alt, span, delay = 0 }) {
    return (
        <div className={`gallery-col-${span}`} style={{ gridColumn: `span ${span}`, height: '100%' }}>
            <Reveal delay={delay} width="100%" height="100%">
                <div className="gallery-item-wrapper">
                    <img src={src} alt={alt} className="hover-zoom" />
                </div>
            </Reveal>
        </div>
    );
}