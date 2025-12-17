"use client";
import { useState } from 'react';
import Icon from './Icons';

export default function BookingForm({ dict }) {
    const [house, setHouse] = useState('Chris House');
    const [status, setStatus] = useState('');
    const [formData, setFormData] = useState({ arrival: '', departure: '', adults: '2', children: '0', name: '', email: '', requests: '' });

    const t = dict?.booking || { form_title: "Request a Reservation", labels: { arrival: "Arrival", departure: "Departure", adults: "Adults", children: "Children", name: "Full Name", requests: "Special Requests", btn: "SEND REQUEST" } };
    const tNav = dict?.nav || { chris: "Chris House", afroditi: "Afroditi Suite" };

    const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
    const handleSubmit = async (e) => {
        e.preventDefault(); setStatus('sending');
        try {
            const res = await fetch('/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ type: 'booking', house, ...formData }) });
            if (res.ok) setStatus('success'); else setStatus('error');
        } catch { setStatus('error'); }
    };

    return (
        <div style={{ background: 'white', padding: '50px', borderRadius: '4px', boxShadow: '0 30px 60px rgba(0,0,0,0.08)' }}>
            <h3 style={{ fontSize: '2rem', fontFamily: 'var(--font-heading)', color: '#005777', marginBottom: '30px' }}>{t.form_title}</h3>
            {status === 'success' ? (
                <div style={{ textAlign: 'center', padding: '40px 0' }}>
                    <div style={{ color: 'green', marginBottom: '20px' }}><Icon name="paperPlane" size={50} /></div>
                    <h4 style={{ fontSize: '1.5rem', color: '#005777' }}>Sent Successfully!</h4>
                    <button onClick={() => setStatus('')} style={{ marginTop: '20px', textDecoration: 'underline', border: 'none', background: 'none', cursor: 'pointer', color: '#999' }}>New Request</button>
                </div>
            ) : (
                <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '25px' }}>
                    <div style={{ display: 'flex', gap: '20px', marginBottom: '10px' }}>
                        <button type="button" onClick={() => setHouse('Chris House')} className={house === 'Chris House' ? 'house-btn active' : 'house-btn'}>{tNav.chris}</button>
                        <button type="button" onClick={() => setHouse('Afroditi Suite')} className={house === 'Afroditi Suite' ? 'house-btn active' : 'house-btn'}>{tNav.afroditi}</button>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                        <div className="input-group"><label>{t.labels.arrival}</label><input type="date" name="arrival" required onChange={handleChange} className="modern-input" /></div>
                        <div className="input-group"><label>{t.labels.departure}</label><input type="date" name="departure" required onChange={handleChange} className="modern-input" /></div>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                        <div className="input-group"><label>{t.labels.adults}</label><select name="adults" onChange={handleChange} className="modern-input"><option>1</option><option>2</option><option>3</option><option>4</option></select></div>
                        <div className="input-group"><label>{t.labels.children}</label><select name="children" onChange={handleChange} className="modern-input"><option>0</option><option>1</option><option>2</option></select></div>
                    </div>
                    <div className="input-group"><label>{t.labels.name}</label><input type="text" name="name" required placeholder="" onChange={handleChange} className="modern-input" /></div>
                    <div className="input-group"><label>E-Mail</label><input type="email" name="email" required placeholder="" onChange={handleChange} className="modern-input" /></div>
                    <div className="input-group"><label>{t.labels.requests}</label><textarea name="requests" rows="4" onChange={handleChange} className="modern-input" style={{ resize: 'none' }}></textarea></div>
                    <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '18px', marginTop: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }} disabled={status === 'sending'}>
                        {status === 'sending' ? '...' : t.labels.btn} <Icon name="paperPlane" size={16} />
                    </button>
                </form>
            )}
        </div>
    );
}