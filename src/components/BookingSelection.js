"use client";
import Icon from './Icons';
import Reveal from './Reveal';

export default function BookingSelection({ dict }) {
    const tNav = dict?.nav || { chris: "Chris House", afroditi: "Afroditi Suite" };
    const t = dict?.booking || { check_rates: "Check Rates & Availability" };

    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>

            {/* CARD 1: CHRIS HOUSE */}
            <Reveal>
                <div className="booking-card-premium">
                    <div className="booking-card-img">
                        <img
                            src="/assets/images/a3-19-1080x720.jpeg"
                            alt="Chris House"
                            className="hover-zoom" // Uses global zoom animation
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                    </div>

                    <div className="booking-card-content">
            <span style={{ color: '#cba135', fontSize: '11px', fontWeight: 'bold', letterSpacing: '2px', textTransform: 'uppercase' }}>
              Ground Floor Sanctuary
            </span>
                        <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', color: '#005777', margin: '10px 0 20px' }}>
                            {tNav.chris}
                        </h3>

                        <p style={{ color: '#666', marginBottom: '10px', fontSize: '0.95rem' }}>
                            <Icon name="users" size={16} /> Up to 4 Guests &nbsp;|&nbsp; Private Garden
                        </p>

                        <div className="platform-btn-group">
                            <a href="https://www.airbnb.gr/rooms/36375065" target="_blank" rel="noopener noreferrer" className="platform-btn btn-airbnb">
                                <Icon name="airbnb" size={20} /> Airbnb
                            </a>
                            <a href="https://www.booking.com/hotel/gr/chris-house-loutra.html" target="_blank" rel="noopener noreferrer" className="platform-btn btn-booking">
                                <span style={{ fontWeight: '900', fontSize: '16px' }}>B.</span> Booking
                            </a>
                        </div>
                    </div>
                </div>
            </Reveal>

            {/* CARD 2: AFRODITI SUITE */}
            <Reveal delay={0.2}>
                <div className="booking-card-premium">
                    <div className="booking-card-img">
                        <img
                            src="/assets/images/loutra resort b2-26-1080x721.jpeg"
                            alt="Afroditi Suite"
                            className="hover-zoom"
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                    </div>

                    <div className="booking-card-content">
            <span style={{ color: '#cba135', fontSize: '11px', fontWeight: 'bold', letterSpacing: '2px', textTransform: 'uppercase' }}>
              Upper Floor Luxury
            </span>
                        <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', color: '#005777', margin: '10px 0 20px' }}>
                            {tNav.afroditi}
                        </h3>

                        <p style={{ color: '#666', marginBottom: '10px', fontSize: '0.95rem' }}>
                            <Icon name="users" size={16} /> Up to 5 Guests &nbsp;|&nbsp; Private Hot Tub
                        </p>

                        <div className="platform-btn-group">
                            <a href="https://www.airbnb.com/rooms/682514460285127836" target="_blank" rel="noopener noreferrer" className="platform-btn btn-airbnb">
                                <Icon name="airbnb" size={20} /> Airbnb
                            </a>
                            <a href="https://www.booking.com/hotel/gr/afroditi-suite-loutra.html" target="_blank" rel="noopener noreferrer" className="platform-btn btn-booking">
                                <span style={{ fontWeight: '900', fontSize: '16px' }}>B.</span> Booking
                            </a>
                        </div>
                    </div>
                </div>
            </Reveal>

        </div>
    );
}