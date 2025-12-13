export default function Hero() {
    return (
        <header style={{
            height: '100vh',
            backgroundImage: 'url("/assets/images/collage2-2000x1050.jpeg")',
            backgroundAttachment: 'fixed',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            position: 'relative',
            display: 'flex', alignItems: 'center', justifyContent: 'center'
        }}>
            {/* Dark overlay for contrast */}
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.6))' }}></div>

            <div className="container text-center" style={{ position: 'relative', zIndex: 2, color: 'white' }}>
                <p style={{
                    letterSpacing: '4px',
                    textTransform: 'uppercase',
                    marginBottom: '15px',
                    fontSize: '13px',
                    fontWeight: '600',
                    textShadow: '0 2px 4px rgba(0,0,0,0.5)'
                }}>
                    GALLIOS HOUSES
                </p>

                {/* The "Message" Look:
           - Smaller Size: clamp(2rem, 5vw, 3.5rem)
           - Italic: Adds elegance/personal touch
           - Pure White: color: '#fff'
        */}
                <h1 style={{
                    fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                    marginBottom: '30px',
                    fontFamily: 'var(--font-heading)', // Playfair Display
                    fontWeight: '400', // Regular weight (not bold)
                    fontStyle: 'italic', // The "Message" feel
                    lineHeight: '1.2',
                    color: '#ffffff',
                    textShadow: '0 2px 10px rgba(0,0,0,0.5)' // Soft shadow for readability
                }}>
                    A Lifetime Experience
                </h1>

                {/* Simpler, thinner underline */}
                <div style={{ width: '60px', height: '1px', background: '#fff', margin: '0 auto', opacity: 0.8 }}></div>
            </div>

            <div style={{ position: 'absolute', bottom: '40px', animation: 'bounce 2s infinite' }}>
                <span style={{ color: 'white', fontSize: '11px', letterSpacing: '2px', textTransform: 'uppercase', opacity: 0.8 }}>Scroll</span>
            </div>
        </header>
    );
}