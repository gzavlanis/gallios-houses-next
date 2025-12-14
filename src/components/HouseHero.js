export default function HouseHero({ title, subtitle, img }) {
    return (
        <header style={{
            height: '70vh',
            backgroundImage: `url("${img}")`,
            backgroundAttachment: 'fixed',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            position: 'relative',
            display: 'flex', alignItems: 'center', justifyContent: 'center'
        }}>
            {/* Dark Overlay (60% opacity) */}
            <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.6)' }}></div>

            <div className="container text-center" style={{ position: 'relative', zIndex: 2, color: 'white' }}>
                <p style={{
                    letterSpacing: '4px', textTransform: 'uppercase', marginBottom: '15px',
                    fontSize: '14px', fontWeight: 'bold', color: '#cba135',
                    textShadow: '0 2px 4px rgba(0,0,0,0.8)'
                }}>
                    {subtitle}
                </p>

                {/* Added color: 'white' to override the global teal color */}
                <h1 style={{
                    fontSize: 'clamp(3rem, 5vw, 5rem)',
                    marginBottom: '20px',
                    fontFamily: 'var(--font-heading)',
                    color: 'white',
                    textShadow: '0 4px 10px rgba(0,0,0,0.8)'
                }}>
                    {title}
                </h1>

                <div style={{ width: '80px', height: '3px', background: 'white', margin: '0 auto', boxShadow: '0 2px 4px rgba(0,0,0,0.5)' }}></div>
            </div>
        </header>
    );
}