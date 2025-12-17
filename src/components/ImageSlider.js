"use client";
import { useRef } from 'react';
import Icon from './Icons';

export default function ImageSlider({ images }) {
    const scrollRef = useRef(null);

    const scroll = (direction) => {
        if (scrollRef.current) {
            const { current } = scrollRef;
            const scrollAmount = current.clientWidth;
            current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
        }
    };

    return (
        <div className="slider-container">
            <button className="slider-nav-btn slider-left" onClick={() => scroll('left')}>
                <Icon name="chevronDown" size={24} style={{ transform: 'rotate(90deg)' }} />
            </button>

            <div className="slider-track" ref={scrollRef}>
                {images.map((src, i) => (
                    <div key={i} className="slide">
                        <img src={src} alt={`Slide ${i}`} />
                    </div>
                ))}
            </div>

            <button className="slider-nav-btn slider-right" onClick={() => scroll('right')}>
                <Icon name="chevronDown" size={24} style={{ transform: 'rotate(-90deg)' }} />
            </button>
        </div>
    );
}