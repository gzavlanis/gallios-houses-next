"use client";
import Link from 'next/link';

export default function FeaturesSection({ dict, lang }) {
    // 1. Get the current language, defaulting to 'el' if missing
    const currentLang = lang || 'el';

    const t = dict?.home?.features || {
        city: "City Life", city_sub: "RETHYMNO", city_text: "Easy access to the city...",
        beach: "Beaches", beach_sub: "SEA", beach_text: "Discover hidden secrets...",
        culture: "History", culture_sub: "ANCIENT", culture_text: "Visit historical sites...",
        explore: "EXPLORE"
    };

    const features = [
        {
            id: 1,
            title: t.city,
            subtitle: t.city_sub,
            desc: t.city_text,
            img: "/assets/images/rethymno30-1140x650.jpeg",
            // 2. Build the correct link: /el/location, /en/location, etc.
            link: `/${currentLang}/location`
        },
        {
            id: 2,
            title: t.beach,
            subtitle: t.beach_sub,
            desc: t.beach_text,
            img: "/assets/images/episkopi-beach-858x482.webp",
            link: `/${currentLang}/location`
        },
        {
            id: 3,
            title: t.culture,
            subtitle: t.culture_sub,
            desc: t.culture_text,
            img: "/assets/images/arcadi-monastery-858x493.webp",
            link: `/${currentLang}/location`
        }
    ];

    return (
        <section>
            <div className="features-gallery">
                {features.map((f) => (
                    <div key={f.id} className="feature-card">
                        <img src={f.img} alt={f.title} className="feature-bg" />

                        <div className="feature-content">
              <span style={{ color: '#cba135', fontSize: '11px', letterSpacing: '2px', fontWeight: 'bold', textTransform: 'uppercase' }}>
                {f.subtitle}
              </span>
                            <h3 style={{ fontSize: '2rem', fontFamily: 'var(--font-heading)', margin: '10px 0', color: 'white' }}>
                                {f.title}
                            </h3>

                            <div className="feature-desc">
                                <p style={{ fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '20px', opacity: 0.9 }}>
                                    {f.desc}
                                </p>
                                {/* 3. Use the dynamic link here */}
                                <Link href={f.link} className="btn-outline-white">
                                    {t.explore}
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}