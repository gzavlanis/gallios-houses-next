"use client";
import { useState } from 'react';

export default function ChatWidget() {
    const [isOpen, setIsOpen] = useState(false);

    // --- CONFIGURATION ---
    // Replace these with your actual info
    const links = {
        messenger: "https://m.me/gallioshouses",
        phone: "tel:+306979123456",
        email: "mailto:info@gallioshouses.gr"
    };

    return (
        <div className={`chat-widget ${isOpen ? 'open' : ''}`}>

            {/* Pop-up Menu (Icons Only) */}
            <div className={`chat-menu ${isOpen ? 'show' : ''}`}>

                {/* 1. Messenger Icon */}
                <a href={links.messenger} className="chat-icon-btn fb" aria-label="Messenger">
                    <svg viewBox="0 0 24 24" width="28" height="28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2C6.48 2 2 6.03 2 11C2 13.87 3.56 16.47 6.34 18.07V22L10 20C10.66 20.09 11.32 20.13 12 20.13C17.52 20.13 22 16.09 22 11.13C22 6.16 17.52 2 12 2Z" fill="#0084FF"/>
                        <path d="M12.69 13.4L10.29 12.1L5.59 14.7L10.79 9.2L13.19 10.5L17.89 7.9L12.69 13.4Z" fill="white"/>
                    </svg>
                </a>

                {/* 3. Phone Icon */}
                <a href={links.phone} className="chat-icon-btn ph" aria-label="Call Us">
                    <svg viewBox="0 0 24 24" width="24" height="24" fill="white">
                        <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                    </svg>
                </a>

                {/* 4. Email Icon */}
                <a href={links.email} className="chat-icon-btn em" aria-label="Email">
                    <svg viewBox="0 0 24 24" width="22" height="22" fill="white">
                        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                    </svg>
                </a>
            </div>

            {/* Main Toggle Button (Unchanged) */}
            <button className="chat-btn" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Chat">
                {isOpen ? (
                    <svg viewBox="0 0 24 24" width="28" height="28" fill="white"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>
                ) : (
                    <svg viewBox="0 0 24 24" width="28" height="28" fill="white"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/></svg>
                )}
            </button>
        </div>
    );
}