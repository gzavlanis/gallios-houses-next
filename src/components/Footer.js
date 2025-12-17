"use client";
import { useState } from 'react';
import Icon from './Icons';

export default function Footer({ dict }) {
    const [email, setEmail] = useState('');
    const t = dict?.footer || { email_title: "E-Mail", email_sub: "24/7", find_title: "Find Us", find_sub: "SOCIAL", newsletter_title: "Newsletter", newsletter_sub: "SIGN UP", placeholder: "E-mail", join: "JOIN", copyright: "© 2024" };

    return (
        <footer style={{ background: '#005777', color: 'white', padding: '100px 0 40px' }}>
            <div className="container">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '50px' }}>
                    <div>
                        <h4 style={{ fontFamily: 'var(--font-heading)', marginBottom: '25px', color: 'white' }}>{t.email_title}</h4>
                        <span style={{ color: '#cba135', fontSize: '11px', letterSpacing: '2px', fontWeight: 'bold' }}>{t.email_sub}</span>
                        <a href="mailto:info@gallioshouses.gr" style={{ display: 'block', fontSize: '1.4rem', borderBottom: '1px solid #cba135', width: 'fit-content', marginTop: '10px' }}>info@gallioshouses.gr</a>
                    </div>
                    <div>
                        <h4 style={{ fontFamily: 'var(--font-heading)', marginBottom: '25px', color: 'white' }}>{t.find_title}</h4>
                        <span style={{ color: '#cba135', fontSize: '11px', letterSpacing: '2px', fontWeight: 'bold' }}>{t.find_sub}</span>
                        <div style={{ display: 'flex', gap: '15px', marginTop: '15px' }}>
                            <a href="#" target="_blank" style={{ width: '45px', height: '45px', border: '1px solid rgba(255,255,255,0.3)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Icon name="facebook" size={20} color="white" /></a>
                            <a href="#" target="_blank" style={{ width: '45px', height: '45px', border: '1px solid rgba(255,255,255,0.3)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Icon name="instagram" size={20} color="white" /></a>
                        </div>
                    </div>
                    <div>
                        <h4 style={{ fontFamily: 'var(--font-heading)', marginBottom: '25px', color: 'white' }}>{t.newsletter_title}</h4>
                        <span style={{ color: '#cba135', fontSize: '11px', letterSpacing: '2px', fontWeight: 'bold' }}>{t.newsletter_sub}</span>
                        <form style={{ marginTop: '15px', display: 'flex' }} onSubmit={(e) => e.preventDefault()}>
                            <input type="email" placeholder={t.placeholder} value={email} onChange={(e) => setEmail(e.target.value)} style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.2)', color: 'white', padding: '15px', width: '100%', outline: 'none' }} />
                            <button style={{ background: '#cba135', color: '#005777', border: 'none', padding: '0 25px', fontWeight: 'bold', cursor: 'pointer' }}>{t.join}</button>
                        </form>
                    </div>
                </div>
                <div style={{ marginTop: '80px', paddingTop: '30px', borderTop: '1px solid rgba(255,255,255,0.1)', textAlign: 'center', opacity: 0.6, fontSize: '13px' }}><p>{t.copyright}</p></div>
            </div>
        </footer>
    );
}