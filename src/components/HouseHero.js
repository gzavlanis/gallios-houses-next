export default function HouseHero({ title, subtitle, img }) {
    return (
        <header style={{ height: '70vh', backgroundImage: `url("${img}")`, backgroundAttachment: 'fixed', backgroundSize: 'cover', backgroundPosition: 'center', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.4)' }}></div>
            <div className="container text-center" style={{ position: 'relative', zIndex: 2, color: 'white' }}>
                <p style={{ letterSpacing: '4px', textTransform: 'uppercase', marginBottom: '15px', fontSize: '12px', fontWeight: 'bold', color: '#cba135' }}>{subtitle}</p>
                <h1 style={{ fontSize: '4rem', marginBottom: '20px', fontFamily: 'var(--font-heading)' }}>{title}</h1>
                <div style={{ width: '60px', height: '2px', background: 'white', margin: '0 auto' }}></div>
            </div>
        </header>
    );
}