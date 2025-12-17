"use client";
import Icon from './Icons';
export default function BookingSelection({ dict }) {
    const tNav = dict?.nav || { chris: "Chris House", afroditi: "Afroditi Suite" };
    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
            <HouseBookingCard title={tNav.chris} type="Ground Floor" img="/assets/images/a3-19-1080x720.jpeg" link="https://www.airbnb.gr/rooms/36375065" />
            <HouseBookingCard title={tNav.afroditi} type="Upper Floor" img="/assets/images/loutra resort b2-26-1080x721.jpeg" link="https://www.airbnb.com/rooms/682514460285127836" />
        </div>
    );
}
function HouseBookingCard({ title, type, img, link }) {
    return (
        <div className="booking-card">
            <div className="booking-img-wrap"><img src={img} alt={title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} /></div>
            <div className="booking-content">
                <div><span style={{ fontSize: '11px', fontWeight: 'bold', color: '#999' }}>{type}</span><h3 style={{ fontFamily: 'var(--font-heading)', color: '#005777', fontSize: '1.8rem' }}>{title}</h3></div>
                <a href={link} target="_blank" className="platform-btn airbnb"><Icon name="airbnb" size={20} /> Airbnb</a>
            </div>
        </div>
    );
}