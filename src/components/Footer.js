"use client";

import { FaFacebookF, FaInstagram, FaAirbnb } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer className="footer-modern">
            <div className="container">

                {/* Footer Grid */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '50px' }}>

                    {/* Column 1: Contact */}
                    <div>
                        <h4 className="footer-heading">E-Mail</h4>
                        <span className="footer-sub">24 HOURS A DAY</span>
                        <a href="mailto:info@gallioshouses.gr" style={{ fontSize: '1.4rem', borderBottom: '1px solid #cba135', paddingBottom: '5px' }}>
                            info@gallioshouses.gr
                        </a>
                    </div>

                    {/* Column 2: Socials */}
                    <div>
                        <h4 className="footer-heading">Find Us</h4>
                        <span className="footer-sub">OUR SOCIAL AND PARTNERS</span>
                        <div style={{ display: 'flex', gap: '15px', marginTop: '10px' }}>
                            <SocialIcon href="https://www.facebook.com/gallioshouses/" icon={<FaFacebookF />} />
                            <SocialIcon href="https://www.instagram.com/gallioshouses" icon={<FaInstagram />} />
                            <SocialIcon href="https://www.airbnb.gr/users/show/273504277" icon={<FaAirbnb />} />
                        </div>
                    </div>

                    {/* Column 3: Newsletter */}
                    <div>
                        <h4 className="footer-heading">Newsletter</h4>
                        <span className="footer-sub">SIGN UP TO SEE WHAT'S NEW</span>
                        <form style={{ marginTop: '15px', display: 'flex' }} onSubmit={(e) => e.preventDefault()}>
                            <input type="email" placeholder="Your E-mail" className="newsletter-input" />
                            <button style={{
                                background: '#cba135', color: '#005777', border: 'none', padding: '0 25px',
                                fontWeight: 'bold', cursor: 'pointer', textTransform: 'uppercase', fontSize: '12px'
                            }}>
                                Join
                            </button>
                        </form>
                    </div>

                </div>

                {/* Copyright */}
                <div style={{
                    marginTop: '80px', paddingTop: '30px',
                    borderTop: '1px solid rgba(255,255,255,0.1)',
                    textAlign: 'center', color: 'rgba(255,255,255,0.5)', fontSize: '13px'
                }}>
                    <p>© 2026 Gallios Houses - All Rights Reserved</p>
                </div>

            </div>
        </footer>
    );
}

// Helper for Social Icons
function SocialIcon({ href, icon }) {
    return (
        <a href={href} target="_blank" style={{
            width: '45px', height: '45px',
            border: '1px solid rgba(255,255,255,0.3)',
            borderRadius: '50%',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            transition: 'all 0.3s ease',
            color: 'white'
        }}
            // These events require the "use client" directive at the top of the file
           onMouseOver={(e) => { e.currentTarget.style.borderColor = '#cba135'; e.currentTarget.style.color = '#cba135'; }}
           onMouseOut={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)'; e.currentTarget.style.color = 'white'; }}
        >
            {icon}
        </a>
    );
}