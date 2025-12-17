"use client";
import Reveal from './Reveal';
import Icon from './Icons';

export default function Testimonials({ title, reviews }) {
    // 1. Safety Check: If no reviews are passed, don't break the page
    if (!reviews || reviews.length === 0) return null;

    return (
        <section className="section-padding" style={{ background: 'white' }}>
            <div className="container">

                {/* Header */}
                <div className="text-center mb-16" style={{ marginBottom: '60px' }}>
                    <Reveal>
            <span style={{ color: '#cba135', letterSpacing: '2px', textTransform: 'uppercase', fontSize: '11px', fontWeight: 'bold' }}>
              Feedback
            </span>
                        <h3 style={{ fontFamily: 'var(--font-heading)', color: '#005777', fontSize: '2.5rem', marginTop: '10px' }}>
                            {title}
                        </h3>
                    </Reveal>
                </div>

                {/* Reviews Grid */}
                <div className="reviews-grid">
                    {reviews.map((review, i) => (
                        <Reveal key={i} delay={i * 0.1}>
                            <div className="review-card">

                                {/* Stars & Platform */}
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px' }}>
                                    <div style={{ display: 'flex', gap: '2px' }}>
                                        {[...Array(review.rating || 5)].map((_, starIndex) => (
                                            <Icon key={starIndex} name="star" size={16} color="#cba135" />
                                        ))}
                                    </div>
                                    <span style={{ fontSize: '12px', color: '#999', fontWeight: 'bold' }}>{review.platform}</span>
                                </div>

                                {/* The Review Text */}
                                <p style={{ fontStyle: 'italic', color: '#555', lineHeight: '1.6', marginBottom: '20px', minHeight: '80px' }}>
                                    "{review.text}"
                                </p>

                                {/* Author Info */}
                                <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                                    <div style={{ width: '40px', height: '40px', background: '#f0f0f0', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', color: '#005777' }}>
                                        {review.name.charAt(0)}
                                    </div>
                                    <div>
                                        <h5 style={{ fontSize: '14px', fontWeight: 'bold', color: '#333', marginBottom: '2px' }}>{review.name}</h5>
                                        <span style={{ fontSize: '11px', color: '#999' }}>{review.date}</span>
                                    </div>
                                </div>

                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>

            <style jsx>{`
                .reviews-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
                    gap: 30px;
                }
                .review-card {
                    background: #fdfbf7;
                    padding: 30px;
                    border-radius: 4px;
                    border: 1px solid #eee;
                    transition: transform 0.3s ease;
                    height: 100%; /* Ensures all cards in a row match height */
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                }
                .review-card:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 10px 30px rgba(0,0,0,0.05);
                    background: white;
                }
            `}</style>
        </section>
    );
}