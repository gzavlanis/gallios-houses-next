import {getDictionary} from "@/dictionaries/get-dictionary";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactSection from '@/components/ContactSection';
import HouseHero from '@/components/HouseHero';
import Icon from '@/components/Icons';
import Testimonials from '@/components/Testimonials';
import Reveal from '@/components/Reveal';
import Link from 'next/link';

export default async function AfroditiSuite({ params }) {
    const { lang } = await params;
    const dict = await getDictionary(lang);

    return (
        <main style={{ background: 'white' }}>
            <Navbar dict={dict} />

            <HouseHero title="AFRODITI SUITE" subtitle={dict.afroditi.hero_sub} img="/assets/images/loutra resort b2-26-1080x721.jpeg" />

            {/* 1. NARRATIVE */}
            <section className="section-padding">
                <div className="container">
                    <div className="split-layout">
                        <div className="split-text">
                            <Reveal>
                                <span style={{ color: '#cba135', letterSpacing: '3px', textTransform: 'uppercase', fontSize: '12px', fontWeight: 'bold' }}>{dict.afroditi.narrative_sub}</span>
                                <h2 style={{ fontSize: '3rem', color: '#005777', marginTop: '15px', marginBottom: '30px', fontFamily: 'var(--font-heading)' }}>{dict.afroditi.narrative_title}</h2>
                            </Reveal>
                            <Reveal delay={0.1}><p style={{ color: '#666', fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '20px' }}>{dict.afroditi.narrative_text_1}</p></Reveal>
                            <Reveal delay={0.2}><div className="quote-block">&#34;{dict.afroditi.quote}&#34;</div></Reveal>
                            <Reveal delay={0.3}><p style={{ color: '#666', fontSize: '1.1rem', lineHeight: '1.8' }}>{dict.afroditi.narrative_text_2}</p></Reveal>
                        </div>
                        <div className="tall-image-container">
                            <Reveal delay={0.4} height="100%"><img src="/assets/images/loutra resort b2-19-1500x1008.jpeg" alt="Afroditi Living" style={{ width: '100%', height: '100%', objectFit: 'cover' }} /></Reveal>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. FACILITIES */}
            <section style={{ background: '#fdfbf7', padding: '100px 0' }}>
                <div className="container">
                    <Reveal>
                        <div className="text-center mb-16" style={{ marginBottom: '60px' }}>
                            <h3 style={{ fontFamily: 'var(--font-heading)', color: '#005777', fontSize: '2.5rem' }}>{dict.afroditi.facilities_title}</h3>
                        </div>
                    </Reveal>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '40px' }}>
                        <AmenityFloating name="users" title={`5 ${dict.amenities.users}`} />
                        <AmenityFloating name="ruler" title={`75 ${dict.amenities.ruler}`} />
                        <AmenityFloating name="pool" title={dict.amenities.hottub} />
                        <AmenityFloating name="chair" title={dict.amenities.chair} />
                        <AmenityFloating name="kitchen" title={dict.amenities.kitchen} />
                        <AmenityFloating name="tv" title={dict.amenities.tv} />
                        <AmenityFloating name="sun" title={dict.amenities.bbq} />
                        <AmenityFloating name="parking" title={dict.amenities.parking} />
                        <AmenityFloating name="wifi" title={dict.amenities.wifi} />
                        <AmenityFloating name="laundry" title={dict.amenities.laundry} />
                        <AmenityFloating name="wind" title={dict.amenities.ac} />
                    </div>
                </div>
            </section>

            {/* 3. RESTORED MOSAIC GALLERY */}
            <section className="section-padding">
                <div className="container">
                    <Reveal>
                        <div style={{ marginBottom: '50px', textAlign: 'center' }}>
                            <h3 style={{ color: '#005777', fontSize: '2.5rem', fontFamily: 'var(--font-heading)' }}>{dict.afroditi.gallery_living}</h3>
                        </div>
                    </Reveal>

                    <div className="gallery-grid">
                        <GalleryImg span={2} src="/assets/images/loutra resort b2-26-1080x721.jpeg" alt="Living Room" delay={0} />
                        <GalleryImg span={1} src="/assets/images/loutra resort b2-19-1500x1008.jpeg" alt="Open Plan" delay={0.1} />
                        <GalleryImg span={1} src="/assets/images/loutra resort b2-13-1500x1001.jpeg" alt="Kitchen" delay={0.2} />
                        <GalleryImg span={1} src="/assets/images/loutra resort b2-20-1500x1001.jpeg" alt="Dining" delay={0.3} />
                        <GalleryImg span={1} src="/assets/images/loutra resort b2-14-1500x1001.jpeg" alt="Details" delay={0.4} />
                        <GalleryImg span={2} src="/assets/images/loutra resort b2-6-1500x1001.jpeg" alt="Master Bed" delay={0.5} />
                        <GalleryImg span={1} src="/assets/images/loutra resort b2-7-1500x1001.jpeg" alt="Twin Bed" delay={0.6} />
                    </div>

                    <Reveal>
                        <div style={{ marginBottom: '50px', marginTop: '80px', textAlign: 'center' }}>
                            <h3 style={{ color: '#005777', fontSize: '2.5rem', fontFamily: 'var(--font-heading)' }}>{dict.afroditi.gallery_terrace}</h3>
                        </div>
                    </Reveal>

                    <div className="gallery-grid">
                        <GalleryImg span={2} src="/assets/images/loutra resort b2-22-1500x1001.jpeg" alt="Terrace Dining" delay={0} />
                        <GalleryImg span={1} src="/assets/images/loutra resort b2-23-1001x1500.jpeg" alt="Hot Tub" delay={0.1} />
                        <GalleryImg span={1} src="/assets/images/loutra resort b2-24-1500x1001.jpeg" alt="Relax Area" delay={0.2} />
                        <GalleryImg span={2} src="/assets/images/loutra resort b2-25-1500x1001.jpeg" alt="Sun Loungers" delay={0.3} />
                    </div>
                </div>
            </section>

            {/* 4. REVIEWS & CTA */}
            <Reveal>
                <Testimonials title={dict.afroditi.reviews_title} reviews={dict.afroditi.reviews_list} />
            </Reveal>

            <section style={{ position: 'relative', backgroundImage: 'url("/assets/images/loutra resort b2-29-1500x1000.jpeg")', backgroundAttachment: 'fixed', backgroundSize: 'cover', backgroundPosition: 'center', padding: '150px 0', color: 'white', textAlign: 'center' }}>
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(0,87,119,0.85), rgba(0,87,119,0.6))' }}></div>
                <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                    <Reveal>
                        <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '30px', color: 'white' }}>{dict.afroditi.cta_title}</h2>
                        <p style={{ fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto 50px', opacity: 0.95 }}>{dict.afroditi.cta_text}</p>
                        <Link href={`/${lang}/availability`} className="btn-parallax">{dict.nav.book}</Link>
                    </Reveal>
                </div>
            </section>

            <ContactSection dict={dict} />
            <Footer dict={dict} />
        </main>
    );
}

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