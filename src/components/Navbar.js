"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes, FaChevronDown, FaChevronUp } from 'react-icons/fa';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false); // Mobile Menu State
    const [scrolled, setScrolled] = useState(false); // Scroll State
    const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false); // Mobile Dropdown State

    // Handle Scroll Effect
    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Lock body scroll when mobile menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isOpen]);

    const TEAL = '#005777';
    const GOLD = '#cba135';

    return (
        <>
            <nav style={{
                position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                backgroundColor: scrolled || isOpen ? 'rgba(255, 255, 255, 0.95)' : 'transparent',
                backdropFilter: scrolled || isOpen ? 'blur(10px)' : 'none',
                boxShadow: scrolled ? '0 4px 30px rgba(0, 0, 0, 0.05)' : 'none',
                padding: scrolled ? '10px 0' : '20px 0'
            }}>
                <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>

                    {/* LOGO */}
                    <Link href="/" style={{ position: 'relative', zIndex: 1001 }}>
                        <img
                            src="/assets/images/whatsapp-image-2023-12-27-at-08.44.38-removebg-192x144.png"
                            alt="Gallios Houses"
                            style={{ height: scrolled ? '50px' : '70px', transition: 'height 0.3s' }}
                        />
                    </Link>

                    {/* --- DESKTOP MENU --- */}
                    <div className="hidden-mobile" style={{ display: 'flex', alignItems: 'center', gap: '40px' }}>
                        <Link href="/" className={`nav-link-modern ${scrolled ? 'text-dark' : 'text-white'}`}>Home</Link>

                        {/* Desktop Dropdown (Hover) */}
                        <div className="dropdown-wrapper" style={{ position: 'relative', height: '100%', display: 'flex', alignItems: 'center' }}>
              <span className={`nav-link-modern ${scrolled ? 'text-dark' : 'text-white'}`} style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '5px' }}>
                Houses <FaChevronDown size={10} />
              </span>
                            <div className="dropdown-content">
                                <Link href="/chris">Chris House</Link>
                                <Link href="/afroditi">Afroditi Suite</Link>
                            </div>
                        </div>

                        <Link href="/location" className={`nav-link-modern ${scrolled ? 'text-dark' : 'text-white'}`}>Location</Link>
                        <Link href="/gallery" className={`nav-link-modern ${scrolled ? 'text-dark' : 'text-white'}`}>Gallery</Link>

                        <Link href="/availability" className="btn btn-primary" style={{ padding: '10px 25px', fontSize: '12px' }}>
                            BOOK NOW
                        </Link>
                    </div>

                    {/* --- MOBILE TOGGLE BUTTON --- */}
                    <button
                        className="lg-hidden"
                        onClick={() => setIsOpen(!isOpen)}
                        style={{
                            background: 'transparent', border: 'none', cursor: 'pointer',
                            position: 'relative', zIndex: 1001, color: (scrolled || isOpen) ? TEAL : 'white'
                        }}
                    >
                        {isOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
                    </button>
                </div>
            </nav>

            {/* --- MOBILE MENU OVERLAY --- */}
            <div style={{
                position: 'fixed', top: 0, left: 0, width: '100%', height: '100vh',
                background: 'white', zIndex: 999,
                display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                transform: isOpen ? 'translateX(0)' : 'translateX(100%)',
                transition: 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                paddingTop: '60px'
            }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '30px', width: '100%' }}>

                    <Link href="/" onClick={() => setIsOpen(false)} style={mobileLinkStyle}>Home</Link>

                    {/* Mobile Dropdown (Click to Expand) */}
                    <div style={{ width: '100%', textAlign: 'center' }}>
                        <button
                            onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
                            style={{ ...mobileLinkStyle, background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', width: '100%' }}
                        >
                            Houses {mobileDropdownOpen ? <FaChevronUp size={15} color={GOLD}/> : <FaChevronDown size={15} color={GOLD}/>}
                        </button>

                        {/* The Expandable List */}
                        <div style={{
                            height: mobileDropdownOpen ? 'auto' : '0',
                            overflow: 'hidden',
                            transition: 'all 0.3s ease',
                            display: 'flex', flexDirection: 'column', gap: '15px',
                            marginTop: mobileDropdownOpen ? '15px' : '0'
                        }}>
                            <Link href="/chris" onClick={() => setIsOpen(false)} style={{ fontSize: '18px', color: '#666' }}>Chris House</Link>
                            <Link href="/afroditi" onClick={() => setIsOpen(false)} style={{ fontSize: '18px', color: '#666' }}>Afroditi Suite</Link>
                        </div>
                    </div>

                    <Link href="/location" onClick={() => setIsOpen(false)} style={mobileLinkStyle}>Location</Link>
                    <Link href="/gallery" onClick={() => setIsOpen(false)} style={mobileLinkStyle}>Gallery</Link>

                    <Link href="/availability" onClick={() => setIsOpen(false)} className="btn btn-primary" style={{ marginTop: '20px', padding: '15px 40px', fontSize: '14px' }}>
                        CHECK AVAILABILITY
                    </Link>
                </div>
            </div>
        </>
    );
}

const mobileLinkStyle = {
    fontSize: '24px',
    fontFamily: 'var(--font-heading)',
    color: '#005777',
    fontWeight: '600',
    textDecoration: 'none'
};