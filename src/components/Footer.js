"use client";
import { useState } from 'react';
import Icon from './Icons';
import moment from 'moment';

export default function Footer({ dict }) {
    const [email, setEmail] = useState('');
    const currentYear = moment().year();
    const t = dict?.footer || {
        email_title: "E-Mail",
        email_sub: "24/7",
        find_title: "Find Us",
        find_sub: "SOCIAL",
        newsletter_title: "Newsletter",
        newsletter_sub: "SIGN UP",
        placeholder: "E-mail",
        join: "JOIN",
        copyright: `© ${moment().year}`
    };

    // Shared style for all social buttons
    const socialBtnStyle = {
        width: '45px',
        height: '45px',
        border: '1px solid rgba(255,255,255,0.3)',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'all 0.3s ease',
        color: 'white'
    };

    return (
        <footer style={{ background: '#005777', color: 'white', padding: '100px 0 40px' }}>
            <div className="container">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '50px' }}>

                    {/* 1. Email Section */}
                    <div>
                        <h4 style={{ fontFamily: 'var(--font-heading)', marginBottom: '25px', color: 'white' }}>{t.email_title}</h4>
                        <span style={{ color: '#cba135', fontSize: '11px', letterSpacing: '2px', fontWeight: 'bold' }}>{t.email_sub}</span>
                        <a href="mailto:info@gallioshouses.gr" style={{ display: 'block', fontSize: '1.4rem', borderBottom: '1px solid #cba135', width: 'fit-content', marginTop: '10px' }}>info@gallioshouses.gr</a>
                    </div>

                    {/* 2. Find Us (Socials + OTA) */}
                    <div>
                        <h4 style={{ fontFamily: 'var(--font-heading)', marginBottom: '25px', color: 'white' }}>{t.find_title}</h4>
                        <span style={{ color: '#cba135', fontSize: '11px', letterSpacing: '2px', fontWeight: 'bold' }}>{t.find_sub}</span>

                        <div style={{ display: 'flex', gap: '15px', marginTop: '15px' }}>
                            {/* Facebook */}
                            <a href="#" target="_blank" style={socialBtnStyle}>
                                <Icon name="facebook" size={20} color="white" />
                            </a>

                            {/* Instagram */}
                            <a href="#" target="_blank" style={socialBtnStyle}>
                                <Icon name="instagram" size={20} color="white" />
                            </a>

                            {/* Airbnb */}
                            <a href="https://www.airbnb.com/rooms/36375065" target="_blank" style={socialBtnStyle}>
                                <Icon name="airbnb" size={20} color="white" />
                            </a>

                            {/* Booking.com */}
                            <a href="https://www.booking.com/hotel/gr/chris-house-loutra.html" target="_blank" style={socialBtnStyle}>
                                <Icon name="booking" size={20} color="white" />
                            </a>
                        </div>
                    </div>

                    {/* 3. Newsletter */}
                    <div>
                        <h4 style={{ fontFamily: 'var(--font-heading)', marginBottom: '25px', color: 'white' }}>{t.newsletter_title}</h4>
                        <span style={{ color: '#cba135', fontSize: '11px', letterSpacing: '2px', fontWeight: 'bold' }}>{t.newsletter_sub}</span>
                        <form style={{ marginTop: '15px', display: 'flex' }} onSubmit={(e) => e.preventDefault()}>
                            <input
                                type="email"
                                placeholder={t.placeholder}
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.2)', color: 'white', padding: '15px', width: '100%', outline: 'none' }}
                            />
                            <button style={{ background: '#cba135', color: '#005777', border: 'none', padding: '0 25px', fontWeight: 'bold', cursor: 'pointer' }}>
                                {t.join}
                            </button>
                        </form>
                    </div>
                </div>

                <div style={{ marginTop: '80px', paddingTop: '30px', borderTop: '1px solid rgba(255,255,255,0.1)', textAlign: 'center', opacity: 0.6, fontSize: '13px' }}>
                    <p>&copy; {currentYear} Gallios Houses. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}