"use client";
import Icon from './Icons';
import Reveal from './Reveal';

// This replaces the inline AmenityFloating function to be a proper component
export default function HouseDetails({ amenities }) {
    // Expects 'amenities' prop as an array of objects: { name: 'wifi', title: 'Free Wifi' }

    if (!amenities) return null;

    return (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '40px' }}>
            {amenities.map((item, index) => (
                <Reveal key={index} delay={index * 0.05}>
                    <div className="amenity-float">
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <Icon name={item.name} size={45} color="#cba135" />
                        </div>
                        <h4 style={{ fontWeight: 'bold' }}>{item.title}</h4>
                    </div>
                </Reveal>
            ))}
        </div>
    );
}