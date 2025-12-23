"use client";
import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function Preloader() {
    // 1. Initialize as TRUE (Show loader by default to prevent white flash)
    const [show, setShow] = useState(true);
    const [fadeOut, setFadeOut] = useState(false);

    useEffect(() => {
        const initialCheck = setTimeout(() => {
            const hasSeen = typeof window !== 'undefined' ? sessionStorage.getItem('seenLoader') : null;

            if (hasSeen) {
                // If seen, hide immediately (but now safely async)
                setShow(false);
            } else {
                // If NOT seen, start the full animation sequence
                const animTimer = setTimeout(() => {
                    setFadeOut(true);
                    setTimeout(() => {
                        setShow(false);
                        sessionStorage.setItem('seenLoader', 'true');
                    }, 800);

                }, 2500); // Show for 2.5s

                return () => clearTimeout(animTimer);
            }
        }, 10); // 10ms delay is enough to solve the error

        return () => clearTimeout(initialCheck);
    }, []);

    if (!show) return null;

    return (
        <div className={`preloader ${fadeOut ? 'fade-out' : ''}`}>
            <div className="loader-content">
                <div className="logo-wrapper">
                    <Image
                        src="/icon.png"
                        alt="Gallios Houses"
                        width={100}
                        height={100}
                        priority
                        className="loader-logo"
                    />
                </div>
                <h2 className="brand-name">GALLIOS HOUSES</h2>
                <div className="loading-bar"></div>
            </div>
        </div>
    );
}