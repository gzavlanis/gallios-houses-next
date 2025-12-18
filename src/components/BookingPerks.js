"use client";
import Icon from './Icons';

export default function BookingPerks({ dict }) {
    // Safely access the booking section, or default to empty object
    const t = dict?.booking || {};
    const content = {
        title: t.perks_title || "Why Book Direct?",
        p1_title: t.perks_1_title || "Best Rates Guaranteed",
        p1_desc: t.perks_1_desc || "We match any lower price found online.",
        p2_title: t.perks_2_title || "No Hidden Fees",
        p2_desc: t.perks_2_desc || "Transparent pricing with no surprise charges.",
        p3_title: t.perks_3_title || "Personalized Guide",
        p3_desc: t.perks_3_desc || "Receive our curated guide to Rethymno upon booking."
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
                {content.title}
            </h4>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
                <PerkItem icon="star" title={content.p1_title} desc={content.p1_desc} />
                <PerkItem icon="shield" title={content.p2_title} desc={content.p2_desc} />
                <PerkItem icon="globe" title={content.p3_title} desc={content.p3_desc} />
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