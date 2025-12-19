"use client";
import { useState } from 'react';
import Icon from './Icons';

export default function BookingForm({ dict }) {
    const [house, setHouse] = useState('Chris House');
    const [status, setStatus] = useState('');

    const t = dict?.booking || {
        form_title: "Direct Inquiry",
        labels: { name: "Full Name", email: "E-Mail", arrival: "Arrival", departure: "Departure", requests: "Special Requests", btn: "SEND REQUEST" }
    };
    const tNav = dict?.nav || { chris: "Chris House", afroditi: "Afroditi Suite" };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending');

        const formData = new FormData(e.currentTarget);

        const payload = {
            type: 'booking',
            house: house,
            name: formData.get('name'),
            email: formData.get('email'),
            arrival: formData.get('arrival'),
            departure: formData.get('departure'),
            requests: formData.get('requests'),
            adults: 2,
            children: 0
        };

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload),
            });

            if (res.ok) {
                setStatus('success');
            } else {
                setStatus('error');
            }
        } catch (error) {
            console.error(error);
            setStatus('error');
        }
    };

    return (
        <div className="form-container">
            <div style={{ textAlign: 'center', marginBottom: '30px' }}>
                <h3 style={{ fontSize: '1.8rem', fontFamily: 'var(--font-heading)', color: '#005777' }}>
                    {t.form_title}
                </h3>
                <p style={{ fontSize: '0.9rem', color: '#888' }}>Best rates for direct booking</p>
            </div>

            {status === 'success' ? (
                <div style={{ textAlign: 'center', padding: '40px 0', color: 'green' }}>
                    <Icon name="paperPlane" size={40} />
                    <h4 style={{ marginTop: '20px' }}>Message Sent!</h4>
                    <p style={{ fontSize: '0.9rem', color: '#666', marginTop: '10px' }}>We will contact you shortly.</p>
                </div>
            ) : (
                <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '20px' }}>

                    {/* House Selector */}
                    <div className="house-selector">
                        <button type="button" onClick={() => setHouse('Chris House')} className={`house-btn ${house === 'Chris House' ? 'active' : ''}`}>
                            {tNav.chris}
                        </button>
                        <button type="button" onClick={() => setHouse('Afroditi Suite')} className={`house-btn ${house === 'Afroditi Suite' ? 'active' : ''}`}>
                            {tNav.afroditi}
                        </button>
                    </div>

                    <input type="text" name="name" placeholder={t.labels.name} className="modern-input" required />
                    <input type="email" name="email" placeholder={t.labels.email || "E-Mail"} className="modern-input" required />

                    <div className="date-grid">
                        <div>
                            <label style={{fontSize: '11px', fontWeight: 'bold', color: '#005777', textTransform: 'uppercase', display:'block', marginBottom:'5px'}}>{t.labels.arrival}</label>
                            <input type="date" name="arrival" className="modern-input" required />
                        </div>
                        <div>
                            <label style={{fontSize: '11px', fontWeight: 'bold', color: '#005777', textTransform: 'uppercase', display:'block', marginBottom:'5px'}}>{t.labels.departure}</label>
                            <input type="date" name="departure" className="modern-input" required />
                        </div>
                    </div>

                    <textarea name="requests" placeholder={t.labels.requests} rows="3" className="modern-input" style={{ resize: 'none' }}></textarea>

                    <button className="btn btn-primary" disabled={status === 'sending'} style={{ width: '100%', padding: '15px', marginTop: '10px', opacity: status === 'sending' ? 0.7 : 1 }}>
                        {status === 'sending' ? 'Sending...' : t.labels.btn}
                    </button>
                </form>
            )}
        </div>
    );
}