"use client";
import { useState } from 'react';
import Icon from './Icons';

export default function BookingForm({ dict }) {
    const [house, setHouse] = useState('Chris House');
    const [status, setStatus] = useState('');

    const t = dict?.booking || {
        form_title: "Direct Inquiry",
        labels: { name: "Full Name", arrival: "Arrival", departure: "Departure", requests: "Special Requests", btn: "SEND REQUEST" }
    };
    const tNav = dict?.nav || { chris: "Chris House", afroditi: "Afroditi Suite" };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending');

        try {
            // We send the data to the PHP file in your public folder
            const res = await fetch('/sendmail.php', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    type: 'booking',
                    house, // 'Chris House' or 'Afroditi Suite'
                    name: e.target[4].value, // Assuming name is the 5th input, or use state
                    email: e.target[6].value, // Assuming email input
                    arrival: e.target[2].value,
                    departure: e.target[3].value,
                    adults: 2, // You can hook this up to state if needed
                    children: 0,
                    requests: e.target[7].value
                }),
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
                </div>
            ) : (
                <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '20px' }}>

                    {/* House Selector */}
                    <div style={{ display: 'flex', gap: '10px', background: '#f5f5f5', padding: '5px', borderRadius: '4px' }}>
                        <button type="button" onClick={() => setHouse('Chris House')} style={{ flex: 1, padding: '10px', border: 'none', background: house === 'Chris House' ? 'white' : 'transparent', boxShadow: house === 'Chris House' ? '0 2px 5px rgba(0,0,0,0.1)' : 'none', fontWeight: 'bold', color: '#005777', cursor: 'pointer', transition: 'all 0.3s' }}>{tNav.chris}</button>
                        <button type="button" onClick={() => setHouse('Afroditi Suite')} style={{ flex: 1, padding: '10px', border: 'none', background: house === 'Afroditi Suite' ? 'white' : 'transparent', boxShadow: house === 'Afroditi Suite' ? '0 2px 5px rgba(0,0,0,0.1)' : 'none', fontWeight: 'bold', color: '#005777', cursor: 'pointer', transition: 'all 0.3s' }}>{tNav.afroditi}</button>
                    </div>

                    <input type="text" placeholder={t.labels.name} className="modern-input" required />

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                        <input type="date" className="modern-input" required />
                        <input type="date" className="modern-input" required />
                    </div>

                    <textarea placeholder={t.labels.requests} rows="3" className="modern-input" style={{ resize: 'none' }}></textarea>

                    <button className="btn btn-primary" style={{ width: '100%', padding: '15px', marginTop: '10px' }}>
                        {status === 'sending' ? '...' : t.labels.btn}
                    </button>
                </form>
            )}
        </div>
    );
}