"use client";
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function StickyBookBar() {
    const [isVisible, setIsVisible] = useState(false);
    const pathname = usePathname();

    // 1. Detect Language from URL (default to 'en')
    // Example: "/el/contact" -> "el"
    const currentLang = pathname?.split('/')[1] || 'el';

    // 2. Translations
    const translations = {
        en: { call: "Call", book: "Book Your Stay" },
        el: { call: "Κλήση", book: "Κράτηση Τώρα" },
        fr: { call: "Appeler", book: "Réserver" },
        de: { call: "Anruf", book: "Buchen" },
        it: { call: "Chiama", book: "Prenota" }
    };

    // Fallback to English if language is not found
    const t = translations[currentLang] || translations.el;

    useEffect(() => {
        // Show after a short delay for a smooth entrance
        const timer = setTimeout(() => setIsVisible(true), 500);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={`sticky-bar ${isVisible ? 'visible' : ''}`}>
            {/* Left Button: Call (Updated Solid Icon) */}
            <a href="tel:+306979123456" className="action-btn call">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
                <span>{t.call}</span>
            </a>

            {/* Right Button: Book (Translated) */}
            <Link href={`/${currentLang}/availability`} className="action-btn book">
                <span>{t.book}</span>
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                    <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
                </svg>
            </Link>
        </div>
    );
}