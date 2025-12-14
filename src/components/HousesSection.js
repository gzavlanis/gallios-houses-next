import Link from 'next/link';
import Icon from './Icons';

export default function HousesSection() {
    return (
        <section className="section-padding" style={{ background: '#fff' }}>
            <div className="container">
                <div className="text-center mb-20" style={{ marginBottom: '80px' }}>
                    <span style={{ color: '#cba135', letterSpacing: '3px', textTransform: 'uppercase', fontSize: '12px', fontWeight: 'bold' }}>Accommodation</span>
                    <h2 style={{ fontSize: '3.5rem', color: '#005777', marginTop: '10px', fontFamily: 'var(--font-heading)' }}>Our Exclusive Retreats</h2>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '100px' }}>
                    <HouseItem title="Chris House" img="/assets/images/a3-19-1080x720.jpeg" guests="4" size="55 m²" desc="Experience ground floor luxury with exclusive private garden access." link="/chris" align="left" />
                    <HouseItem title="Afroditi Suite" img="/assets/images/loutra-resort-b2-26-1080x721.jpeg" guests="6" size="75 m²" desc="Elevate your stay in this upper-floor masterpiece with private terrace." link="/afroditi" align="right" />
                </div>
            </div>
        </section>
    );
}

function HouseItem({ title, img, guests, size, desc, link, align }) {
    const isLeft = align === 'left';
    return (
        <div style={{ display: 'flex', flexDirection: isLeft ? 'row' : 'row-reverse', alignItems: 'center', flexWrap: 'wrap' }}>
            {/* Added class 'house-img-wrap' for CSS targeting */}
            <div className="house-img-wrap" style={{ flex: '0 0 60%', height: '500px', position: 'relative', overflow: 'hidden' }}>
                <img src={img} alt={title} className="hover-zoom" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            {/* Added class 'house-content-wrap' for CSS targeting */}
            <div className="house-content-wrap" style={{ flex: '0 0 50%', marginLeft: isLeft ? '-10%' : '0', marginRight: isLeft ? '0' : '-10%', background: 'white', padding: '60px', boxShadow: '0 30px 60px rgba(0,0,0,0.08)', position: 'relative', zIndex: 10 }}>
                <div style={{ display: 'flex', gap: '20px', marginBottom: '20px', color: '#cba135', fontWeight: 'bold', fontSize: '13px' }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Icon name="users" size={16} color="#cba135"/> {guests} GUESTS</span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Icon name="ruler" size={16} color="#cba135"/> {size}</span>
                </div>
                <h3 style={{ fontSize: '2.5rem', marginBottom: '20px', color: '#005777' }}>{title}</h3>
                <p style={{ color: '#666', marginBottom: '30px' }}>{desc}</p>
                <Link href={link} className="btn-text-arrow" style={{ color: '#005777', fontWeight: 'bold', textTransform: 'uppercase', fontSize: '13px' }}>CHECK AVAILABILITY</Link>
            </div>
        </div>
    );
}