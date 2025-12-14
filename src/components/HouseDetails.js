import Icon from './Icons';

export default function HouseDetails({ guests, size, bedroom, bathroom, pool }) {
    return (
        <section className="section-padding" style={{ background: '#fff' }}>
            <div className="container">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '60px' }}>

                    {/* Text Side */}
                    <div>
                        <h2 style={{ fontSize: '2.5rem', color: '#005777', marginBottom: '30px', fontFamily: 'var(--font-heading)' }}>
                            A Sanctuary of Comfort
                        </h2>
                        <p style={{ color: '#666', lineHeight: '1.8', fontSize: '1.1rem', marginBottom: '20px' }}>
                            Experience the perfect blend of Cretan tradition and modern luxury. Designed for privacy and relaxation, providing a true home-away-from-home experience.
                        </p>
                    </div>

                    {/* Icons Side */}
                    <div style={{ background: '#fdfbf7', padding: '40px', border: '1px solid #eee' }}>
                        <h4 style={{ color: '#005777', marginBottom: '25px', fontFamily: 'var(--font-heading)' }}>At a Glance</h4>

                        <ul style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                            <SpecItem icon="users" text={`${guests} Guests`} />
                            <SpecItem icon="ruler" text={size} />
                            <SpecItem icon="bed" text={`${bedroom} Bedroom`} />
                            <SpecItem icon="bath" text={`${bathroom} Bathroom`} />
                            <SpecItem icon="wind" text="Air Cond." />
                            <SpecItem icon="wifi" text="Free WiFi" />
                            {pool && <SpecItem icon="pool" text="Pool Access" />}
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
      <span style={{ color: '#cba135' }}>
        <Icon name={icon} size={20} />
      </span>
            <span style={{ fontSize: '14px', fontWeight: 'bold' }}>{text}</span>
        </li>
    );
}