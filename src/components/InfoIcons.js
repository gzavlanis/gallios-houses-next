"use client";
import Reveal from './Reveal';
import Icon from './Icons';

export default function InfoIcons({ dict }) {
    const t = dict?.home?.features || {
        city: "City Life", city_sub: "RETHYMNO TOWN", city_text: "Easy access to the city...",
        beach: "Heavenly Beaches", beach_sub: "CRYSTAL WATERS", beach_text: "Discover hidden secrets...",
        culture: "Culture & History", culture_sub: "ANCIENT CRETE", culture_text: "Visit historical sites..."
    };

    const items = [
        { icon: "city", title: t.city, sub: t.city_sub, text: t.city_text },
        { icon: "beach", title: t.beach, sub: t.beach_sub, text: t.beach_text },
        { icon: "culture", title: t.culture, sub: t.culture_sub, text: t.culture_text },
    ];

    return (
        <section className="section-padding" style={{ background: 'white' }}>
            <div className="container">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '50px' }}>
                    {items.map((item, index) => (
                        <Reveal key={index} delay={index * 0.2}>
                            <div className="amenity-card" style={{ textAlign: 'center', padding: '20px' }}>
                                <div style={{ color: '#cba135', marginBottom: '20px', display: 'flex', justifyContent: 'center' }}>
                                    <Icon name={item.icon} size={50} />
                                </div>
                                <span style={{ display: 'block', fontSize: '11px', fontWeight: 'bold', letterSpacing: '2px', color: '#999', marginBottom: '10px' }}>
                  {item.sub}
                </span>
                                <h3 style={{ fontSize: '1.8rem', color: '#005777', marginBottom: '15px', fontFamily: 'var(--font-heading)' }}>
                                    {item.title}
                                </h3>
                                <p style={{ color: '#666', lineHeight: '1.8' }}>
                                    {item.text}
                                </p>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}