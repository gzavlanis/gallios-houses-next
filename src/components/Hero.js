"use client";
import Reveal from './Reveal';
import AvailabilityBar from './AvailabilityBar';

export default function Hero({ title, subtitle, dict }) {
    return (
        <section
            className="hero-section"
            style={{
                // Using the Wide Landscape image
                backgroundImage: "url('/assets/images/collage-3-2000x1414.jpeg')"
            }}
        >
            {/* Overlay is now z-index 1 in CSS */}
            <div className="hero-overlay"></div>

            {/* Content is z-index 2 in CSS */}
            <div className="container hero-content">
                <Reveal>
          <span className="hero-subtitle">
            {subtitle || "WELCOME"}
          </span>
                    <h1 className="hero-title">
                        {title || "Gallios Houses"}
                    </h1>
                </Reveal>
            </div>

            {/* Availability Bar at bottom */}
            <div className="hero-bar-container">
                <AvailabilityBar dict={dict} />
            </div>
        </section>
    );
}