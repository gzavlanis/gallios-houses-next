import { FaUserFriends, FaRulerCombined, FaBed, FaBath, FaWifi, FaSwimmingPool, FaWind } from 'react-icons/fa';

export default function HouseDetails() {
    return (
        <section className="section-padding" style={{ background: '#fff' }}>
            <div className="container">

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '60px' }}>

                    {/* Left: Description */}
                    <div>
                        <h2 style={{ fontSize: '2.5rem', color: '#005777', marginBottom: '30px', fontFamily: 'var(--font-heading)' }}>
                            Ground Floor Sanctuary
                        </h2>
                        <p style={{ color: '#666', lineHeight: '1.8', fontSize: '1.1rem', marginBottom: '20px' }}>
                            Experience the perfect blend of comfort and Cretan style. Chris House is a beautifully designed ground-floor residence offering exclusive access to a lush private garden.
                        </p>
                        <p style={{ color: '#666', lineHeight: '1.8', fontSize: '1.1rem' }}>
                            Ideal for families or couples seeking privacy, this house features an independent entrance and direct access to the swimming pool area. The interiors are cool, spacious, and equipped with everything you need for a carefree holiday.
                        </p>
                    </div>

                    {/* Right: Amenities & Specs */}
                    <div style={{ background: '#fdfbf7', padding: '40px', border: '1px solid #eee' }}>
                        <h4 style={{ color: '#005777', marginBottom: '25px', fontFamily: 'var(--font-heading)' }}>At a Glance</h4>

                        <ul style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                            <SpecItem icon={<FaUserFriends />} text="4 Guests" />
                            <SpecItem icon={<FaRulerCombined />} text="55 m²" />
                            <SpecItem icon={<FaBed />} text="1 Bedroom" />
                            <SpecItem icon={<FaBath />} text="1 Bathroom" />
                            <SpecItem icon={<FaWind />} text="Air Cond." />
                            <SpecItem icon={<FaWifi />} text="Free WiFi" />
                            <SpecItem icon={<FaSwimmingPool />} text="Pool Access" />
                        </ul>

                        <div style={{ marginTop: '40px', borderTop: '1px solid #ddd', paddingTop: '20px' }}>
              <span style={{ display: 'block', fontSize: '12px', textTransform: 'uppercase', color: '#999', marginBottom: '5px' }}>
                Check-in / Check-out
              </span>
                            <span style={{ color: '#333', fontWeight: 'bold' }}>15:00 / 11:00</span>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

function SpecItem({ icon, text }) {
    return (
        <li style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#555' }}>
            <span style={{ color: '#cba135', fontSize: '1.2rem' }}>{icon}</span>
            <span style={{ fontSize: '14px', fontWeight: 'bold' }}>{text}</span>
        </li>
    );
}