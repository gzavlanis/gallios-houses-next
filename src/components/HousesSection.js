import Link from 'next/link';
import { FaUserFriends, FaRulerCombined, FaArrowRight } from 'react-icons/fa';

export default function HousesSection() {
    return (
        <section className="section-padding" style={{ background: '#fff' }}>
            <div className="container">

                {/* Section Header */}
                <div className="text-center mb-20">
          <span style={{ color: '#cba135', letterSpacing: '3px', textTransform: 'uppercase', fontSize: '12px', fontWeight: 'bold' }}>
            Accommodation
          </span>
                    <h2 style={{ fontSize: '3.5rem', color: '#005777', marginTop: '10px', fontFamily: 'var(--font-heading)' }}>
                        Our Exclusive Retreats
                    </h2>
                    <div style={{ width: '60px', height: '1px', background: '#cba135', margin: '30px auto' }}></div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '100px' }}>

                    {/* HOUSE 1: Chris House (Image Left, Text Right) */}
                    <HouseItem
                        title="Chris House"
                        img="/assets/images/a3-19-1080x720.jpeg"
                        guests="4"
                        size="55 m²"
                        desc="Experience ground floor luxury with exclusive private garden access. A sanctuary of comfort designed for relaxation, featuring an independent entrance for your complete privacy."
                        link="/chris"
                        align="left"
                    />

                    {/* HOUSE 2: Afroditi Suite (Image Right, Text Left) */}
                    <HouseItem
                        title="Afroditi Suite"
                        img="/assets/images/loutra-resort-b2-26-1080x721.jpeg"
                        guests="6"
                        size="75 m²"
                        desc="Elevate your stay in this upper-floor masterpiece. Featuring a stunning private terrace with a hot tub and panoramic views, it is the ultimate setting for unforgettable moments."
                        link="/afroditi"
                        align="right"
                    />

                </div>
            </div>
        </section>
    );
}

function HouseItem({ title, img, guests, size, desc, link, align }) {
    const isLeft = align === 'left';

    return (
        <div className="house-item-wrapper" style={{
            flexDirection: isLeft ? 'row' : 'row-reverse', // This sets desktop direction, CSS overrides for mobile
        }}>

            {/* 1. The Image Side */}
            <div style={{ flex: '0 0 60%', height: '500px', position: 'relative', overflow: 'hidden' }}>
                <img
                    src={img}
                    alt={title}
                    className="hover-zoom"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,87,119,0.1)' }}></div>
            </div>

            {/* 2. The Content Side */}
            <div style={{
                flex: '0 0 50%',
                marginLeft: isLeft ? '-10%' : '0',
                marginRight: isLeft ? '0' : '-10%',
                background: 'white',
                padding: '60px',
                boxShadow: '0 30px 60px rgba(0,0,0,0.08)',
                position: 'relative',
                zIndex: 10
            }}>

                {/* Decorative Vertical Gold Line */}
                <div style={{
                    position: 'absolute',
                    left: isLeft ? '0' : 'auto',
                    right: isLeft ? 'auto' : '0',
                    top: '40px', bottom: '40px',
                    width: '4px', background: '#cba135'
                }}></div>

                <div style={{ display: 'flex', gap: '20px', marginBottom: '20px', color: '#cba135', fontWeight: 'bold', fontSize: '13px', letterSpacing: '1px' }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><FaUserFriends size={16}/> {guests} GUESTS</span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><FaRulerCombined size={16}/> {size}</span>
                </div>

                <h3 style={{ fontSize: '2.5rem', marginBottom: '20px', color: '#005777' }}>{title}</h3>

                <p style={{ color: '#666', lineHeight: '1.8', marginBottom: '30px', fontSize: '1.05rem' }}>
                    {desc}
                </p>

                <Link href="/availability" className="btn-text-arrow">
                    CHECK AVAILABILITY <FaArrowRight style={{ marginLeft: '10px', fontSize: '12px' }} />
                </Link>
            </div>
        </div>
    );
}