import { FaPaperPlane } from 'react-icons/fa';

export default function ContactSection() {
    return (
        <section className="section-padding" style={{ background: '#fdfbf7', overflow: 'hidden' }}>
            <div className="container">

                {/* Header */}
                <div className="text-center mb-16">
          <span style={{ color: '#cba135', letterSpacing: '3px', textTransform: 'uppercase', fontSize: '12px', fontWeight: 'bold' }}>
            Reservations
          </span>
                    <h2 style={{ fontSize: '3.5rem', color: '#005777', marginTop: '10px', fontFamily: 'var(--font-heading)' }}>
                        Get In Touch
                    </h2>
                    <p style={{ color: '#666', marginTop: '20px', maxWidth: '500px', margin: '20px auto 0' }}>
                        To book a reservation and ask any questions you might have.
                    </p>
                </div>

                <div className="contact-container-wrapper">

                    {/* 1. The Floating Form Card */}
                    <div className="contact-card">
                        <h3 style={{ fontSize: '2rem', color: '#005777', marginBottom: '30px', fontFamily: 'var(--font-heading)' }}>
                            Send a Message
                        </h3>

                        <form style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
                            <input type="text" placeholder="Your Name" className="input-chic" required />
                            <input type="email" placeholder="E-Mail" className="input-chic" required />
                            <input type="tel" placeholder="Your Phone" className="input-chic" />
                            <textarea placeholder="Message" rows="3" className="input-chic" style={{ resize: 'none' }}></textarea>

                            <button type="submit" className="btn btn-primary" style={{ marginTop: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
                                SEND NOW <FaPaperPlane size={12} />
                            </button>
                        </form>
                    </div>

                    {/* 2. The Map (Overlapped) */}
                    <div className="contact-map-wrapper">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3254.022829366195!2d24.58289917528341!3d35.35507974782242!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x149b0a68dd8a3443%3A0xb8ee873f45fe5127!2sLoutra%20Resort!5e0!3m2!1sen!2sgr!4v1702726602304!5m2!1sen!2sgr"
                            width="100%"
                            height="100%"
                            style={{ border: 0, filter: 'grayscale(0.2)' }} // Slight styling to map
                            allowFullScreen=""
                            loading="lazy">
                        </iframe>
                    </div>

                </div>
            </div>
        </section>
    );
}