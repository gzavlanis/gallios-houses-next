"use client";
import { useState, useEffect } from 'react';
import Icon from './Icons';

// REAL Verified Reviews for Afroditi Suite
const reviews = [
    { id: 1, name: "Natalya", origin: "United Kingdom", text: "The property was so clean with great facilities! Beautiful pool, lovely outdoor space, and a fabulous BBQ. Inside was modern with everything we needed.", source: "Booking.com" },
    { id: 2, name: "Kaisa", origin: "Finland", text: "Very high quality and clean apartment. The terrace was absolutely top notch! The large swimming pool was also suitable for distance swimming. Chris was a great host - fruit and drinks in the fridge upon arrival.", source: "Booking.com" },
    { id: 3, name: "Andrea", origin: "Germany", text: "Exceptionally tasteful, stylish, and modern furnishings. The roof terrace available for sole use was awesome. The pool was huge, warm, and uncrowded - wonderful! Chris was a magical and helpful host.", source: "Booking.com" },
    { id: 4, name: "Danny", origin: "Netherlands", text: "Apartment was fantastic. Just like the service from the host. Location was quiet and peaceful. We loved it.", source: "Booking.com" },
    { id: 5, name: "Mona", origin: "Germany", text: "Definitely one of the best Airbnbs we've been to! Beautiful interior, an awesome terrace, and super clean. Chris had everything we could ask for (baby chair, bed, toys). Highly recommended!", source: "Airbnb" },
    { id: 6, name: "Steve", origin: "North Macedonia", text: "We had a wonderful stay at the two-bedroom apartment on the first floor! The highlight was the large terrace which our kid loved. Parking was hassle-free. Chris went above and beyond.", source: "Airbnb" },
    { id: 7, name: "Jelle", origin: "Belgium", text: "Spacious, clean, perfect location, amazing terrace! The host checked in a few days beforehand to ensure a smooth arrival. The terrace provided shade and was perfect for meals.", source: "Airbnb" }
];

// --- Component Definition ---
const QuoteIconBackground = () => (
    <svg width="200" height="160" viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ position: 'absolute', top: '-40px', left: '50%', transform: 'translateX(-50%)', opacity: 0.05, zIndex: 0, pointerEvents: 'none' }}>
        <path d="M75.5556 0V80H0V160H80V80H40V0H75.5556ZM195.556 0V80H120V160H200V80H160V0H195.556Z" fill="#005777"/>
    </svg>
);

export default function TestimonialsAfroditi() {
    const [active, setActive] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        let interval = null;
        if (!isPaused) {
            interval = setInterval(() => {
                setActive((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
            }, 5000);
        }
        return () => clearInterval(interval);
    }, [isPaused]);

    const nextReview = () => {
        setActive((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
    };

    const prevReview = () => {
        setActive((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
    };

    return (
        <section className="section-padding" style={{ background: '#fff', textAlign: 'center', overflow: 'hidden' }}>
            <div className="container" style={{ position: 'relative' }}>
        <span style={{ color: '#cba135', letterSpacing: '2px', textTransform: 'uppercase', fontSize: '11px', fontWeight: 'bold' }}>
          Verified Guest Stories
        </span>
                <h3 style={{ color: '#005777', fontSize: '2.5rem', fontFamily: 'var(--font-heading)', margin: '10px 0 60px' }}>
                    Loved by Travelers
                </h3>

                <div className="carousel-container" onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)}>
                    <QuoteIconBackground />

                    <button onClick={prevReview} className="nav-arrow left-arrow" aria-label="Previous review">
                        <Icon name="chevronDown" size={24} className="rotate-90" />
                    </button>

                    <div className="carousel-viewport">
                        <div className="carousel-track" style={{ transform: `translateX(-${active * 100}%)` }}>
                            {reviews.map((review, index) => (
                                <div key={review.id} className={`review-card ${index === active ? 'active-card' : ''}`} aria-hidden={index !== active}>
                                    <div style={{ fontSize: '24px', color: '#cba135', marginBottom: '25px' }}>★★★★★</div>
                                    <p className="review-text">"{review.text}"</p>
                                    <div>
                                        <h5 style={{ color: '#005777', fontWeight: 'bold', fontSize: '1.2rem', marginBottom: '5px', fontFamily: 'var(--font-heading)' }}>{review.name}</h5>
                                        <span style={{ fontSize: '0.85rem', color: '#999', textTransform: 'uppercase', letterSpacing: '1px' }}>From {review.origin} • Verified {review.source}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <button onClick={nextReview} className="nav-arrow right-arrow" aria-label="Next review">
                        <Icon name="chevronDown" size={24} className="rotate-270" />
                    </button>
                </div>

                <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginTop: '40px' }}>
                    {reviews.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setActive(index)}
                            style={{ width: active === index ? '24px' : '8px', height: '8px', borderRadius: '4px', border: 'none', cursor: 'pointer', background: active === index ? '#cba135' : '#e0e0e0', transition: 'all 0.3s ease' }}
                        />
                    ))}
                </div>
            </div>

            <style jsx>{`
        .carousel-container { position: relative; max-width: 900px; margin: 0 auto; min-height: 400px; display: flex; align-items: center; }
        .carousel-viewport { overflow: hidden; width: 100%; position: relative; z-index: 2; }
        .carousel-track { display: flex; transition: transform 0.8s cubic-bezier(0.25, 1, 0.5, 1); will-change: transform; }
        .review-card { min-width: 100%; padding: 0 40px; opacity: 0.3; transform: scale(0.95); transition: all 0.8s ease; display: flex; flex-direction: column; align-items: center; justify-content: center; }
        .review-card.active-card { opacity: 1; transform: scale(1); }
        .review-text { font-size: 1.5rem; line-height: 1.6; font-style: italic; color: #444; margin-bottom: 35px; font-family: var(--font-heading); max-width: 80%; }
        .nav-arrow { background: white; border: 1px solid #eee; width: 60px; height: 60px; borderRadius: 50%; cursor: pointer; display: flex; align-items: center; justify-content: center; transition: all 0.3s; color: #005777; position: absolute; top: 50%; transform: translateY(-50%); z-index: 10; box-shadow: 0 5px 15px rgba(0,0,0,0.05); }
        .nav-arrow:hover { background: #005777; color: #cba135; border-color: #005777; transform: translateY(-50%) scale(1.1); }
        .left-arrow { left: -80px; }
        .right-arrow { right: -80px; }
        .rotate-90 { transform: rotate(90deg); }
        .rotate-270 { transform: rotate(-90deg); }
        @media (max-width: 992px) {
          .carousel-container { min-height: auto; padding-bottom: 80px; }
          .review-card { padding: 0 10px; }
          .review-text { font-size: 1.2rem; max-width: 100%; }
          .nav-arrow { width: 50px; height: 50px; top: auto; bottom: 0; transform: none; }
          .left-arrow { left: 30%; }
          .right-arrow { right: 30%; }
        }
      `}</style>
        </section>
    );
}