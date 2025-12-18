"use client";
import Link from 'next/link';
import Reveal from './Reveal';

// FIX: Define this subcomponent OUTSIDE the main function
const GoldBar = () => (
    <div style={{
        width: '60px',
        height: '3px',
        background: '#cba135',
        marginTop: '5px',
        marginBottom: '25px'
    }}></div>
);

export default function HousesSection({ dict, lang }) {
    // 1. Get current language (defaults to 'el')
    const currentLang = lang || 'el';

    const tHome = dict?.home || {};
    const tNav = dict?.nav || {};

    return (
        <section className="section-padding" style={{ background: '#fdfbf7' }}>
            <div className="container">
                <div className="text-center mb-16" style={{ marginBottom: '80px' }}>
                    <Reveal>
            <span style={{ color: '#cba135', letterSpacing: '3px', textTransform: 'uppercase', fontSize: '12px', fontWeight: 'bold' }}>
              {tHome.houses_sub || "ACCOMMODATION"}
            </span>
                        <h2 style={{ fontSize: '3.5rem', color: '#005777', marginTop: '10px', fontFamily: 'var(--font-heading)' }}>
                            {tHome.houses_title || "Our Exclusive Retreats"}
                        </h2>
                    </Reveal>
                </div>

                {/* --- CHRIS HOUSE --- */}
                <div className="house-card-row">
                    <div className="house-img-side">
                        <Reveal width="100%" height="100%">
                            <img src="/assets/images/a3-19-1080x720.jpeg" alt="Chris House" className="house-cover-img" />
                        </Reveal>
                    </div>
                    <div className="house-content-side">
                        <Reveal delay={0.2}>
                            <h3 style={{ fontSize: '2.5rem', marginBottom: '10px', fontFamily: 'var(--font-heading)', color: '#005777' }}>
                                {tNav.chris}
                            </h3>

                            {/* GOLD BAR */}
                            <GoldBar />

                            <p style={{ color: '#666', marginBottom: '30px', lineHeight: '1.8' }}>
                                {tHome.chris_desc}
                            </p>

                            <Link href={`/${currentLang}/availability`} className="btn btn-primary">
                                {tHome.check_btn}
                            </Link>
                        </Reveal>
                    </div>
                </div>

                {/* --- AFRODITI SUITE --- */}
                <div className="house-card-row reversed">
                    <div className="house-img-side">
                        <Reveal width="100%" height="100%">
                            <img src="/assets/images/loutra resort b2-26-1080x721.jpeg" alt="Afroditi Suite" className="house-cover-img" />
                        </Reveal>
                    </div>
                    <div className="house-content-side">
                        <Reveal delay={0.2}>
                            <h3 style={{ fontSize: '2.5rem', marginBottom: '10px', fontFamily: 'var(--font-heading)', color: '#005777' }}>
                                {tNav.afroditi}
                            </h3>

                            {/* GOLD BAR */}
                            <GoldBar />

                            <p style={{ color: '#666', marginBottom: '30px', lineHeight: '1.8' }}>
                                {tHome.afroditi_desc}
                            </p>

                            <Link href={`/${currentLang}/availability`} className="btn btn-primary">
                                {tHome.check_btn}
                            </Link>
                        </Reveal>
                    </div>
                </div>

            </div>
        </section>
    );
}