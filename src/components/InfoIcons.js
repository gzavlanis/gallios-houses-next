import Icon from './Icons';

export default function InfoIcons() {
    const items = [
        { title: "Near Beach", icon: "beach", img: "/assets/images/psx-20220808-133623-1140x641.jpeg" },
        { title: "Spacious Apartments", icon: "home", img: "/assets/images/loutra-resort-b2-19-1140x766.jpeg" },
        { title: "Family Friendly", icon: "users", img: "/assets/images/loutra-resort-b2-32-2000x1335.jpeg" },
        { title: "Solar Heated Water", icon: "sun", img: "/assets/images/loutra-resort-b2-29-1500x1000.jpeg" },
    ];

    return (
        <section>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
                {items.map((item, index) => (
                    <div key={index} style={{ position: 'relative', height: '400px', overflow: 'hidden', cursor: 'pointer' }} className="amenity-card">
                        <img src={item.img} alt={item.title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.8s' }} className="amenity-image" />
                        <div style={{ position: 'absolute', inset: 0, background: 'rgba(0, 87, 119, 0.85)', transition: 'background 0.5s', zIndex: 1 }} className="amenity-overlay"></div>
                        <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', zIndex: 2, color: 'white' }}>
                            <Icon name={item.icon} size={50} color="white" />
                            <h4 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginTop: '15px', color: 'white' }}>{item.title}</h4>
                            <div style={{ width: '40px', height: '2px', background: '#cba135', marginTop: '15px' }}></div>
                        </div>
                        <style jsx>{` .amenity-card:hover .amenity-overlay { background: rgba(0, 87, 119, 0.2); } .amenity-card:hover .amenity-image { transform: scale(1.15); } `}</style>
                    </div>
                ))}
            </div>
        </section>
    );
}