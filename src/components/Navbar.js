"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Icon from './Icons';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <nav style={{
                position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
                transition: 'all 0.4s',
                backgroundColor: scrolled || isOpen ? 'rgba(255, 255, 255, 0.95)' : 'transparent',
                backdropFilter: scrolled || isOpen ? 'blur(10px)' : 'none',
                boxShadow: scrolled ? '0 4px 30px rgba(0, 0, 0, 0.05)' : 'none',
                padding: scrolled ? '10px 0' : '20px 0'
            }}>
                <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Link href="/" style={{ position: 'relative', zIndex: 1001 }}>
                        <img src="/assets/images/whatsapp-image-2023-12-27-at-08.44.38-removebg-192x144.png" alt="Gallios Houses" style={{ height: scrolled ? '50px' : '70px', transition: 'height 0.3s' }} />
                    </Link>

                    <div className="hidden-mobile" style={{ display: 'flex', alignItems: 'center', gap: '40px' }}>
                        <Link href="/" className={`nav-link-modern ${scrolled ? 'text-dark' : 'text-white'}`}>Home</Link>
                        <div className="dropdown-wrapper">
              <span className={`nav-link-modern ${scrolled ? 'text-dark' : 'text-white'}`} style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '5px' }}>
                Houses <Icon name="chevronDown" size={10} />
              </span>
                            <div className="dropdown-content">
                                <Link href="/chris">Chris House</Link>
                                <Link href="/afroditi">Afroditi Suite</Link>
                            </div>
                        </div>
                        <Link href="/location" className={`nav-link-modern ${scrolled ? 'text-dark' : 'text-white'}`}>Location</Link>
                        <Link href="/availability" className="btn btn-primary" style={{ padding: '10px 25px', fontSize: '12px' }}>BOOK NOW</Link>
                    </div>

                    <button className="lg-hidden" onClick={() => setIsOpen(!isOpen)} style={{ background: 'transparent', border: 'none', cursor: 'pointer', position: 'relative', zIndex: 1001, color: (scrolled || isOpen) ? '#005777' : 'white' }}>
                        <Icon name={isOpen ? "close" : "menu"} size={28} />
                    </button>
                </div>
            </nav>

            <div style={{
                position: 'fixed', top: 0, left: 0, width: '100%', height: '100vh', background: 'white', zIndex: 999,
                transform: isOpen ? 'translateX(0)' : 'translateX(100%)', transition: 'transform 0.4s', paddingTop: '80px',
                display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '30px'
            }}>
                <Link href="/" onClick={() => setIsOpen(false)} style={mobileStyle}>Home</Link>
                <button onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)} style={{ ...mobileStyle, background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '10px' }}>
                    Houses <Icon name={mobileDropdownOpen ? "chevronUp" : "chevronDown"} size={15} color="#cba135" />
                </button>
                {mobileDropdownOpen && (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', textAlign: 'center' }}>
                        <Link href="/chris" onClick={() => setIsOpen(false)} style={{ fontSize: '18px', color: '#666' }}>Chris House</Link>
                        <Link href="/afroditi" onClick={() => setIsOpen(false)} style={{ fontSize: '18px', color: '#666' }}>Afroditi Suite</Link>
                    </div>
                )}
                <Link href="/location" onClick={() => setIsOpen(false)} style={mobileStyle}>Location</Link>
                <Link href="/availability" className="btn btn-primary">CHECK AVAILABILITY</Link>
            </div>
        </>
    );
}
const mobileStyle = { fontSize: '24px', fontFamily: 'var(--font-heading)', color: '#005777', fontWeight: '600' };