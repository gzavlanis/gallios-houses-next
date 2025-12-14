import Icon from './Icons';

export default function ContactSection() {
    return (
        <section className="section-padding" style={{ background: '#fdfbf7' }}>
            <div className="container">
                <div className="text-center mb-16" style={{ marginBottom: '60px' }}>
                    <span style={{ color: '#cba135', letterSpacing: '3px', textTransform: 'uppercase', fontSize: '12px', fontWeight: 'bold' }}>Reservations</span>
                    <h2 style={{ fontSize: '3.5rem', color: '#005777', marginTop: '10px', fontFamily: 'var(--font-heading)' }}>Get In Touch</h2>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
                    <div style={{ flex: '0 0 45%', background: 'white', padding: '60px', boxShadow: '0 30px 60px rgba(0,0,0,0.1)', zIndex: 10 }} className="contact-card">
                        <h3 style={{ fontSize: '2rem', color: '#005777', marginBottom: '30px', fontFamily: 'var(--font-heading)' }}>Send a Message</h3>
                        <form style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
                            <input type="text" placeholder="Your Name" style={inputStyle} />
                            <input type="email" placeholder="E-Mail" style={inputStyle} />
                            <textarea placeholder="Message" rows="3" style={{ ...inputStyle, resize: 'none' }}></textarea>
                            <button type="submit" className="btn btn-primary" style={{ marginTop: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
                                SEND NOW <Icon name="paperPlane" size={12} />
                            </button>
                        </form>
                    </div>
                    <div style={{ flex: '0 0 65%', height: '600px', marginLeft: '-10%', zIndex: 1 }} className="contact-map">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3254.022829366195!2d24.58289917528341!3d35.35507974782242!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x149b0a68dd8a3443%3A0xb8ee873f45fe5127!2sLoutra%20Resort!5e0!3m2!1sen!2sgr!4v1702726602304!5m2!1sen!2sgr" width="100%" height="100%" style={{ border: 0, filter: 'grayscale(0.2)' }} loading="lazy"></iframe>
                    </div>
                </div>
            </div>
            <style jsx>{` @media (max-width: 992px) { .contact-card { flex: 0 0 90% !important; margin: -50px auto 0 !important; } .contact-map { flex: 0 0 100% !important; height: 350px; marginLeft: 0 !important; order: -1; } } `}</style>
        </section>
    );
}
const inputStyle = { width: '100%', border: 'none', borderBottom: '1px solid #ddd', padding: '15px 0', fontSize: '14px', outline: 'none' };