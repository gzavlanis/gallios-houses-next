import { FaUmbrellaBeach, FaHome, FaUsers, FaSolarPanel } from 'react-icons/fa';

export default function InfoIcons() {
    const items = [
        {
            title: "Near Beach",
            icon: <FaUmbrellaBeach />,
            img: "/assets/images/psx-20220808-133623-1140x641.jpeg"
        },
        {
            title: "Spacious Apartments",
            icon: <FaHome />,
            img: "/assets/images/loutra-resort-b2-19-1140x766.jpeg"
        },
        {
            title: "Family Friendly",
            icon: <FaUsers />,
            img: "/assets/images/loutra-resort-b2-32-2000x1335.jpeg"
        },
        {
            title: "Solar Heated Water",
            icon: <FaSolarPanel />,
            img: "/assets/images/loutra-resort-b2-29-1500x1000.jpeg"
        },
    ];

    return (
        <section>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>

                {items.map((item, index) => (
                    <div key={index} className="amenity-card">

                        {/* Background Image */}
                        <img src={item.img} alt={item.title} className="amenity-image" />

                        {/* Overlay */}
                        <div className="amenity-overlay"></div>

                        {/* Content - Explicitly White */}
                        <div className="amenity-content" style={{ color: '#ffffff' }}>
                            <div className="amenity-icon" style={{ color: '#ffffff' }}>
                                {item.icon}
                            </div>
                            <h4 className="amenity-title" style={{
                                fontSize: '1.5rem',
                                textTransform: 'uppercase',
                                letterSpacing: '2px',
                                fontWeight: 'bold',
                                fontFamily: 'var(--font-heading)',
                                color: '#ffffff', // Force White Title
                                marginTop: '15px'
                            }}>
                                {item.title}
                            </h4>
                            <div style={{ width: '40px', height: '2px', background: '#cba135', marginTop: '15px' }}></div>
                        </div>

                    </div>
                ))}

            </div>
        </section>
    );
}