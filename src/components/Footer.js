"use client";
import Icon from './Icons';

export default function Footer() {
    return (
        <footer style={{ background: '#005777', color: 'white', padding: '100px 0 40px' }}>
            <div className="container">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '50px' }}>
                    <div>
                        <h4 style={{ fontFamily: 'var(--font-heading)', marginBottom: '25px' }}>E-Mail</h4>
                        <span style={{ color: '#cba135', fontSize: '11px', letterSpacing: '2px' }}>24 HOURS A DAY</span>
                        <a href="mailto:info@gallioshouses.gr" style={{ display: 'block', fontSize: '1.4rem', borderBottom: '1px solid #cba135', width: 'fit-content' }}>info@gallioshouses.gr</a>
                    </div>
                    <div>
                        <h4 style={{ fontFamily: 'var(--font-heading)', marginBottom: '25px' }}>Find Us</h4>
                        <span style={{ color: '#cba135', fontSize: '11px', letterSpacing: '2px' }}>OUR SOCIAL AND PARTNERS</span>
                        <div style={{ display: 'flex', gap: '15px', marginTop: '15px' }}>
                            <SocialLink href="#" icon="facebook" />
                            <SocialLink href="#" icon="instagram" />
                            <SocialLink href="#" icon="airbnb" />
                        </div>
                    </div>
                    <div>
                        <h4 style={{ fontFamily: 'var(--font-heading)', marginBottom: '25px' }}>Newsletter</h4>
                        <span style={{ color: '#cba135', fontSize: '11px', letterSpacing: '2px' }}>SIGN UP TO SEE WHAT'S NEW</span>
                        <form style={{ marginTop: '15px', display: 'flex' }} onSubmit={e => e.preventDefault()}>
                            <input type="email" placeholder="Your E-mail" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.2)', color: 'white', padding: '15px', width: '100%' }} />
                            <button style={{ background: '#cba135', color: '#005777', border: 'none', padding: '0 25px', fontWeight: 'bold' }}>JOIN</button>
                        </form>
                    </div>
                </div>
                <div style={{ marginTop: '80px', paddingTop: '30px', borderTop: '1px solid rgba(255,255,255,0.1)', textAlign: 'center', opacity: 0.6, fontSize: '13px' }}>
                    <p>© 2024 Gallios Houses - All Rights Reserved</p>
                </div>
            </div>
        </footer>
    );
}

function SocialLink({ href, icon }) {
    return (
        <a href={href} target="_blank" style={{ width: '45px', height: '45px', border: '1px solid rgba(255,255,255,0.3)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.3s' }}>
            <Icon name={icon} size={20} color="white" />
        </a>
    );
}