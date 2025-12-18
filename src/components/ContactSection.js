"use client";
import { useState } from 'react';
import Icon from './Icons';

export default function ContactSection({ dict }) {
    const [status, setStatus] = useState(''); // '', 'sending', 'success', 'error'

    const t = dict?.home || {
        contact_title: "Get In Touch",
        contact_sub: "RESERVATIONS",
        form_title: "Send a Message",
        form_name: "Name",
        form_email: "E-Mail",
        form_message: "Message",
        form_btn: "SEND"
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending');

        // Capture data using the 'name' attributes of inputs
        const payload = {
            type: 'contact',
            name: e.target.elements.name.value,
            email: e.target.elements.email.value,
            message: e.target.elements.message.value
        };

        try {
            const res = await fetch('/sendmail.php', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });

            if (res.ok) {
                setStatus('success');
                e.target.reset(); // Clear the form
            } else {
                setStatus('error');
            }
        } catch (error) {
            console.error(error);
            setStatus('error');
        }
    };

    return (
        <section className="section-padding" style={{ background: '#fdfbf7' }}>
            <div className="container">
                <div className="text-center mb-16" style={{ marginBottom: '60px' }}>
                    <span style={{ color: '#cba135', letterSpacing: '3px', textTransform: 'uppercase', fontSize: '12px', fontWeight: 'bold' }}>{t.contact_sub}</span>
                    <h2 style={{ fontSize: '3.5rem', color: '#005777', marginTop: '10px', fontFamily: 'var(--font-heading)' }}>{t.contact_title}</h2>
                </div>

                <div className="d-flex" style={{ flexWrap: 'wrap', alignItems: 'center' }}>

                    {/* LEFT SIDE: FORM CARD */}
                    <div className="contact-card" style={{ flex: '0 0 45%', background: 'white', padding: '60px', boxShadow: '0 30px 60px rgba(0,0,0,0.1)', zIndex: 10 }}>
                        <h3 style={{ fontSize: '2rem', color: '#005777', marginBottom: '30px', fontFamily: 'var(--font-heading)' }}>{t.form_title}</h3>

                        {/* Success Message */}
                        {status === 'success' ? (
                            <div style={{ textAlign: 'center', padding: '40px 0', color: 'green' }}>
                                <Icon name="paperPlane" size={50} />
                                <h4 style={{ marginTop: '20px', fontSize: '1.2rem' }}>Message Sent Successfully!</h4>
                                <p style={{ color: '#666', marginTop: '10px' }}>We will get back to you shortly.</p>
                                <button onClick={() => setStatus('')} style={{ marginTop: '20px', textDecoration: 'underline', border: 'none', background: 'none', cursor: 'pointer', color: '#999' }}>Send another</button>
                            </div>
                        ) : (
                            /* The Form */
                            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
                                <input
                                    type="text"
                                    name="name" // Vital for the payload
                                    placeholder={t.form_name}
                                    required
                                    style={{ width: '100%', border: 'none', borderBottom: '1px solid #ddd', padding: '15px 0', outline: 'none' }}
                                />
                                <input
                                    type="email"
                                    name="email" // Vital for the payload
                                    placeholder={t.form_email}
                                    required
                                    style={{ width: '100%', border: 'none', borderBottom: '1px solid #ddd', padding: '15px 0', outline: 'none' }}
                                />
                                <textarea
                                    name="message" // Vital for the payload
                                    placeholder={t.form_message}
                                    rows="3"
                                    required
                                    style={{ width: '100%', border: 'none', borderBottom: '1px solid #ddd', padding: '15px 0', resize: 'none', outline: 'none' }}
                                ></textarea>

                                <button
                                    className="btn btn-primary"
                                    disabled={status === 'sending'}
                                    style={{ marginTop: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', opacity: status === 'sending' ? 0.7 : 1 }}
                                >
                                    {status === 'sending' ? 'Sending...' : t.form_btn}
                                    <Icon name="paperPlane" size={12} />
                                </button>

                                {status === 'error' && <p style={{ color: 'red', fontSize: '0.9rem', textAlign: 'center' }}>Something went wrong. Please try again.</p>}
                            </form>
                        )}
                    </div>

                    {/* RIGHT SIDE: MAP */}
                    <div className="contact-map" style={{ flex: '0 0 65%', height: '600px', marginLeft: '-10%', zIndex: 1 }}>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3246.687399234863!2d24.567!3d35.367!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzXCsDIyJzAwLjAiTiAyNMKwMzQnMDAuMCJF!5e0!3m2!1sen!2sgr!4v1600000000000!5m2!1sen!2sgr"
                            width="100%"
                            height="100%"
                            style={{ border: 0, filter: 'grayscale(0.2)' }}
                            loading="lazy"
                            allowFullScreen=""
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
}