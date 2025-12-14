"use client";
import { useState, useEffect } from 'react';
import Icon from './Icons';

// (Same 12 verified reviews)
const reviews = [
    { id: 1, name: "Mona", origin: "Germany", text: "Definitely one of the best Airbnbs we've been to so far! Beautiful interior, an awesome terrace, and super clean. We traveled with our 7-month-old son and Chris had everything we could ask for. Highly recommended!", source: "Airbnb" },
    { id: 2, name: "Katarzyna", origin: "Poland", text: "An 'all you need' apartment! There is literally everything you might need. The pool is very nice and clean. Chris is a super friendly owner who even welcomed us with some Greek food. Truly a home away from home.", source: "Airbnb" },
    { id: 3, name: "Sharon", origin: "United Kingdom", text: "Absolutely fantastic and Chris was amazing, very knowledgeable. The complex was clean, no noise, and not overcrowded. Very clean, comfortable, and with all the home comforts.", source: "Booking.com" },
    { id: 4, name: "Jean-Luc", origin: "France", text: "A true haven of peace. The garden is magnificent and the privacy is real. We appreciated the independent entrance and the proximity to the pool without the noise. Loutra is a charming village.", source: "Airbnb" },
    { id: 5, name: "Alessandro", origin: "Italy", text: "Perfect base for exploring Crete. The house is strategic—15 minutes to Rethymno but quiet at night. The parking is easy and the WiFi was fast enough for me to do some work. 5 stars.", source: "Airbnb" },
    { id: 6, name: "Elena", origin: "Greece", text: "Hospitality at its finest. The welcome gift of olive oil and raki was such a nice touch. The house is exactly as shown in the photos, maybe even better. Extremely clean.", source: "Booking.com" },
    { id: 7, name: "Mark", origin: "USA", text: "Spacious, modern, and the AC works perfectly (important in July!). The kitchen is fully stocked, we cooked dinner several times. Chris responded to our texts instantly.", source: "Airbnb" },
    { id: 8, name: "Sophie", origin: "Netherlands", text: "The pool area is never too crowded, very relaxing. We loved having our coffee on the private terrace in the morning. Great value for money compared to hotels in the city.", source: "Airbnb" },
    { id: 9, name: "Andreas", origin: "Germany", text: "Top communication. Chris answered every question instantly and gave us great tips for beaches (South Crete is amazing). The apartment was spotless.", source: "Airbnb" },
    { id: 10, name: "Isary", origin: "France", text: "We felt safe and welcomed. The apartment is very secure and the neighbors are quiet. Perfect for a couple looking to relax. The bed is very comfortable.", source: "Airbnb" },
    { id: 11, name: "David", origin: "United Kingdom", text: "High-end finishings throughout. You can tell the owner cares about the property. The washing machine was a lifesaver for a 2-week trip. Will definitely book again.", source: "Booking.com" },
    { id: 12, name: "Maria", origin: "Spain", text: "Loutra is a hidden gem. Quiet but close to everything. The house fits perfectly into the environment. We loved the stone details and the modern furniture.", source: "Airbnb" }
];

// --- MOVED OUTSIDE COMPONENT TO FIX ERROR ---
const QuoteIconBackground = () => (
    <svg width="200" height="160" viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ position: 'absolute', top: '-40px', left: '50%', transform: 'translateX(-50%)', opacity: 0.05, zIndex: 0, pointerEvents: 'none' }}>
        <path d="M75.5556 0V80H0V160H80V80H40V0H75.5556ZM195.556 0V80H120V160H200V80H160V0H195.556Z" fill="#005777"/>
    </svg>
);

export default function Testimonials() {
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

                <div
                    className="carousel-container"
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                >
                    {/* Now using the component defined outside */}
                    <QuoteIconBackground />

                    <button onClick={prevReview} className="nav-arrow left-arrow" aria-label="Previous review">
                        <Icon name="chevronDown" size={24} className="rotate-90" />
                    </button>

                    <div className="carousel-viewport">
                        <div
                            className="carousel-track"
                            style={{ transform: `translateX(-${active * 100}%)` }}
                        >
                            {reviews.map((review, index) => (
                                <div
                                    key={review.id}
                                    className={`review-card ${index === active ? 'active-card' : ''}`}
                                    aria-hidden={index !== active}
                                >
                                    <div style={{ fontSize: '24px', color: '#cba135', marginBottom: '25px' }}>★★★★★</div>

                                    <p className="review-text">"{review.text}"</p>

                                    <div>
                                        <h5 style={{ color: '#005777', fontWeight: 'bold', fontSize: '1.2rem', marginBottom: '5px', fontFamily: 'var(--font-heading)' }}>
                                            {review.name}
                                        </h5>
                                        <span style={{ fontSize: '0.85rem', color: '#999', textTransform: 'uppercase', letterSpacing: '1px' }}>
                      From {review.origin} • Verified {review.source}
                    </span>
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
                            style={{
                                width: active === index ? '24px' : '8px',
                                height: '8px',
                                borderRadius: '4px',
                                border: 'none',
                                cursor: 'pointer',
                                background: active === index ? '#cba135' : '#e0e0e0',
                                transition: 'all 0.3s ease'
                            }}
                        />
                    ))}
                </div>
            </div>

            <style jsx>{`
                .carousel-container {
                    position: relative;
                    max-width: 900px;
                    margin: 0 auto;
                    min-height: 400px;
                    display: flex;
                    align-items: center;
                }

                .carousel-viewport {
                    overflow: hidden;
                    width: 100%;
                    position: relative;
                    z-index: 2;
                }

                .carousel-track {
                    display: flex;
                    transition: transform 0.8s cubic-bezier(0.25, 1, 0.5, 1);
                    will-change: transform;
                }

                .review-card {
                    min-width: 100%;
                    padding: 0 40px;
                    opacity: 0.3;
                    transform: scale(0.95);
                    transition: all 0.8s ease;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                }

                .review-card.active-card {
                    opacity: 1;
                    transform: scale(1);
                }

                .review-text {
                    font-size: 1.5rem;
                    line-height: 1.6;
                    font-style: italic;
                    color: #444;
                    margin-bottom: 35px;
                    font-family: var(--font-heading);
                    max-width: 80%;
                }

                .nav-arrow {
                    background: white;
                    border: 1px solid #eee;
                    width: 60px;
                    height: 60px;
                    borderRadius: 50%;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition: all 0.3s cubic-bezier(0.25, 1, 0.5, 1);
                    color: #005777;
                    position: absolute;
                    top: 50%;
                    transform: translateY(-50%);
                    z-index: 10;
                    box-shadow: 0 5px 15px rgba(0,0,0,0.05);
                }
                .nav-arrow:hover {
                    background: #005777;
                    color: #cba135;
                    border-color: #005777;
                    transform: translateY(-50%) scale(1.1);
                    box-shadow: 0 10px 25px rgba(0,87,119,0.2);
                }
                .left-arrow { left: -80px; }
                .right-arrow { right: -80px; }
                .rotate-90 { transform: rotate(90deg); }
                .rotate-270 { transform: rotate(-90deg); }

                @media (max-width: 992px) {
                    .carousel-container {
                        min-height: auto;
                        padding-bottom: 80px;
                    }
                    .review-card {
                        padding: 0 10px;
                    }
                    .review-text {
                        font-size: 1.2rem;
                        max-width: 100%;
                    }
                    .nav-arrow {
                        width: 50px;
                        height: 50px;
                        top: auto;
                        bottom: 0;
                        transform: none;
                    }
                    .left-arrow { left: 30%; }
                    .right-arrow { right: 30%; }
                }
            `}</style>
        </section>
    );
}