"use client";
import Icon from './Icons';

export default function BookingPerks({ dict }) {
    // Fallbacks in case dictionary keys are missing
    const t = dict?.booking || {
        perks_title: "Why Book Direct?",
        perks_1_title: "Best Rates Guaranteed",
        perks_1_desc: "We match any lower price found online.",
        perks_2_title: "No Hidden Fees",
        perks_2_desc: "Transparent pricing with no surprise charges.",
        perks_3_title: "Personalized Guide",
        perks_3_desc: "Receive our curated guide to Rethymno upon booking."
    };

    return (
        <div style={{ marginTop: '50px', padding: '0 20px' }}>
            <h4 style={{
                fontSize: '1.3rem',
                color: '#005777',
                marginBottom: '30px',
                fontFamily: 'var(--font-heading)',
                borderBottom: '1px solid #eee',
                paddingBottom: '15px'
            }}>
                {t.perks_title}
            </h4>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
                <PerkItem icon="star" title={t.perks_1_title} desc={t.perks_1_desc} />
                <PerkItem icon="shield" title={t.perks_2_title} desc={t.perks_2_desc} /> {/* Using shield or similar */}
                <PerkItem icon="globe" title={t.perks_3_title} desc={t.perks_3_desc} />
            </div>
        </div>
    );
}

function PerkItem({ icon, title, desc }) {
    return (
        <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
            <div style={{
                color: '#cba135',
                background: 'white',
                boxShadow: '0 5px 15px rgba(0,0,0,0.05)',
                borderRadius: '50%',
                width: '40px',
                height: '40px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
            }}>
                <Icon name={icon} size={18} />
            </div>
            <div>
                <h5 style={{ fontSize: '1rem', fontWeight: '700', color: '#333', marginBottom: '5px' }}>
                    {title}
                </h5>
                <p style={{ fontSize: '0.9rem', color: '#666', lineHeight: '1.5' }}>
                    {desc}
                </p>
            </div>
        </div>
    );
}