"use client";
import Reveal from './Reveal';

export default function HouseHero({ title, subtitle, img }) {
    return (
        <section
            className="house-hero"
            style={{ backgroundImage: `url('${img}')` }}
        >
            <div className="house-hero-overlay"></div>

            <div className="container house-hero-content">
                <Reveal>
          <span className="hero-subtitle" style={{ color: '#cba135' }}>
            {subtitle}
          </span>
                    <h1 className="hero-title">{title}</h1>
                </Reveal>
            </div>
        </section>
    );
}