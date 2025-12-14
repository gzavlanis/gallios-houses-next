import Link from 'next/link';
import Icon from './Icons';

export default function FeaturesSection() {
    const features = [
        { id: 1, title: "City Life", subtitle: "RETHYMNO TOWN", img: "/assets/images/rethymno30-1140x650.jpeg", text: "The easy and quick access to the city of Rethymno gives you the opportunity to enjoy the pulse of a unique city." },
        { id: 2, title: "Heavenly Beaches", subtitle: "CRYSTAL WATERS", img: "/assets/images/psx-20220808-133623-1140x641.jpeg", text: "Discover the hidden secrets of the coast of Rethymno, just a few minutes from your accommodation." },
        { id: 3, title: "Culture & History", subtitle: "ANCIENT CRETE", img: "/assets/images/img-20210805-140800-1140x655.jpeg", text: "Visit historical sites and archaeological sites and take a trip to ancient Crete and the glorious past of the place." }
    ];

    return (
        <section className="section-padding" style={{ padding: 0, background: '#000' }}>
            <div className="features-gallery">
                {features.map((f) => (
                    <div key={f.id} className="feature-card">
                        <img src={f.img} alt={f.title} className="feature-bg" />
                        <div className="feature-content">
                            <span style={{ color: '#cba135', fontSize: '12px', letterSpacing: '2px', fontWeight: 'bold', textTransform: 'uppercase', display: 'block', marginBottom: '5px' }}>{f.subtitle}</span>
                            <h3 style={{ fontSize: '2.5rem', color: 'white', fontFamily: 'var(--font-heading)', margin: 0 }}>{f.title}</h3>
                            <div className="feature-desc">
                                <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1.1rem', marginBottom: '20px' }}>{f.text}</p>
                                <Link href="/location" style={{ color: 'white', textTransform: 'uppercase', fontSize: '12px', fontWeight: 'bold', borderBottom: '1px solid #cba135', paddingBottom: '3px', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                                    Explore <Icon name="arrowRight" size={12} color="white" />
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}