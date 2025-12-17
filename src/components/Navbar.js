"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Icon from './Icons';
import LangSwitcher from './LangSwitcher';

export default function Navbar({ dict }) {
    const pathname = usePathname();
    const lang = pathname?.split('/')[1] || 'el';
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        handleScroll();
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const t = dict?.nav || { home: "Home", houses: "Houses", chris: "Chris House", afroditi: "Afroditi Suite", location: "Location", book: "BOOK NOW" };

    return (
        <>
            <nav className={`navbar-custom ${scrolled ? 'scrolled' : ''}`}>
                <div className="container nav-container">
                    <Link href={`/${lang}`} className="logo-tab">
                        <img src="/assets/images/whatsapp-image-2023-12-27-at-08.44.38-removebg-192x144.png" alt="Gallios Houses" className="logo-img" />
                    </Link>
                    <div className="logo-spacer"></div>
                    <div className="desktop-menu">
                        <Link href={`/${lang}`} className={`nav-link ${scrolled ? 'dark' : 'white'}`}>{t.home}</Link>
                        <div className="dropdown-wrapper">
                            <span className={`nav-link ${scrolled ? 'dark' : 'white'}`} style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '5px' }}>{t.houses} <Icon name="chevronDown" size={10} /></span>
                            <div className="dropdown-content">
                                <Link href={`/${lang}/chris`}>{t.chris}</Link>
                                <Link href={`/${lang}/afroditi`}>{t.afroditi}</Link>
                            </div>
                        </div>
                        <Link href={`/${lang}/location`} className={`nav-link ${scrolled ? 'dark' : 'white'}`}>{t.location}</Link>
                        <Link href={`/${lang}/availability`} className="btn btn-primary">{t.book}</Link>
                        <LangSwitcher />
                    </div>
                    <div className="mobile-toggle">
                        <LangSwitcher />
                        <button onClick={() => setIsOpen(!isOpen)} className={`hamburger ${scrolled || isOpen ? 'dark' : 'white'}`}><Icon name={isOpen ? "close" : "menu"} size={28} /></button>
                    </div>
                </div>
            </nav>
            {/* Mobile Overlay */}
            <div className={`mobile-menu-overlay ${isOpen ? 'open' : ''}`}>
                <Link href={`/${lang}`} onClick={() => setIsOpen(false)} style={{ fontSize: '24px', fontFamily: 'var(--font-heading)', color: '#005777', fontWeight: '600' }}>{t.home}</Link>
                <button onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)} style={{ background: 'none', border: 'none', fontSize: '24px', fontFamily: 'var(--font-heading)', color: '#005777', fontWeight: '600', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '10px' }}>{t.houses} <Icon name={mobileDropdownOpen ? "chevronUp" : "chevronDown"} size={15} color="#cba135" /></button>
                {mobileDropdownOpen && (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', textAlign: 'center' }}>
                        <Link href={`/${lang}/chris`} onClick={() => setIsOpen(false)} style={{ fontSize: '18px', color: '#666' }}>{t.chris}</Link>
                        <Link href={`/${lang}/afroditi`} onClick={() => setIsOpen(false)} style={{ fontSize: '18px', color: '#666' }}>{t.afroditi}</Link>
                    </div>
                )}
                <Link href={`/${lang}/location`} onClick={() => setIsOpen(false)} style={{ fontSize: '24px', fontFamily: 'var(--font-heading)', color: '#005777', fontWeight: '600' }}>{t.location}</Link>
                <Link href={`/${lang}/availability`} onClick={() => setIsOpen(false)} className="btn btn-primary">{t.book}</Link>
            </div>
        </>
    );
}