"use client";
import Icon from './Icons';
export default function BookingPerks({ dict }) {
    const t = dict?.booking || { perks_title: "Secure Reservation" };
    return (
        <div className="perks-container">
            <h2 style={{ fontSize: '2.5rem', fontFamily: 'var(--font-heading)', color: '#005777', marginBottom: '40px' }}>{t.perks_title}</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
                <PerkItem icon="sun" title="Best Rates" desc="Competitive prices guaranteed." />
                <PerkItem icon="ruler" title="Instant Confirmation" desc="Secure your dates immediately." />
            </div>
        </div>
    );
}
function PerkItem({ icon, title, desc }) {
    return (
        <div style={{ display: 'flex', gap: '20px' }}><div style={{ color: '#cba135' }}><Icon name={icon} size={32} /></div><div><h4 style={{ fontSize: '1.1rem', fontWeight: 'bold' }}>{title}</h4><p style={{ fontSize: '0.9rem', color: '#777' }}>{desc}</p></div></div>
    );
}