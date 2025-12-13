import AvailabilityBar from './AvailabilityBar';

export default function Hero() {
    return (
        <header style={{
            height: '100vh',
            backgroundImage: 'url("/assets/images/collage2-2000x1050.jpeg")',
            backgroundAttachment: 'fixed',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            {/* Overlay */}
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.6))' }}></div>

            {/* Main Text Content */}
            <div className="container text-center" style={{ position: 'relative', zIndex: 2, color: 'white', marginTop: '-50px' }}>
                <p style={{
                    letterSpacing: '4px', textTransform: 'uppercase', marginBottom: '15px',
                    fontSize: '13px', fontWeight: '600', textShadow: '0 2px 4px rgba(0,0,0,0.5)'
                }}>
                    GALLIOS HOUSES
                </p>

                <h1 style={{
                    fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '30px',
                    fontFamily: 'var(--font-heading)', fontWeight: '400', fontStyle: 'italic',
                    lineHeight: '1.2', color: '#ffffff', textShadow: '0 2px 10px rgba(0,0,0,0.5)'
                }}>
                    A Lifetime Experience
                </h1>

                <div style={{ width: '60px', height: '1px', background: '#fff', margin: '0 auto', opacity: 0.8 }}></div>
            </div>

            {/* UPDATED: Uses CSS class for responsive positioning */}
            <div className="hero-bar-container">
                <AvailabilityBar />
            </div>

        </header>
    );
}