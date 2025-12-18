"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function RootPage() {
    const router = useRouter();
    const [redirecting, setRedirecting] = useState(false);

    useEffect(() => {
        // 1. Wait 1.5s for the animation to play
        const timer = setTimeout(() => {
            setRedirecting(true); // Triggers exit animation

            // 2. Perform the redirect
            setTimeout(() => {
                router.replace('/el');
            }, 500);
        }, 1500);

        return () => clearTimeout(timer);
    }, [router]);

    return (
        <div style={{
            position: 'fixed',
            inset: 0,
            background: '#fdfbf7', // Your warm paper white
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 9999,
            opacity: redirecting ? 0 : 1, // Fade out when done
            transition: 'opacity 0.8s ease'
        }}>
            {/* LOGO CONTAINER */}
            <div className="intro-logo" style={{ textAlign: 'center' }}>
                <h1 style={{
                    fontFamily: "'Playfair Display', serif",
                    color: '#005777',
                    fontSize: '3rem',
                    letterSpacing: '2px',
                    margin: 0,
                    opacity: 0,
                    animation: 'fadeUp 1s ease forwards'
                }}>
                    GALLIOS
                </h1>

                <h2 style={{
                    fontFamily: "'Lato', sans-serif",
                    color: '#cba135', // Gold
                    fontSize: '1rem',
                    letterSpacing: '8px',
                    textTransform: 'uppercase',
                    marginTop: '5px',
                    opacity: 0,
                    animation: 'fadeUp 1s ease 0.3s forwards' // Delayed start
                }}>
                    HOUSES
                </h2>
            </div>

            {/* GOLD LINE LOADER */}
            <div style={{
                width: '60px',
                height: '2px',
                background: '#eee',
                marginTop: '40px',
                position: 'relative',
                overflow: 'hidden'
            }}>
                <div style={{
                    position: 'absolute',
                    left: 0,
                    top: 0,
                    height: '100%',
                    width: '100%',
                    background: '#cba135',
                    animation: 'loadingLine 1.5s ease-in-out infinite'
                }}></div>
            </div>

            {/* CSS STYLES FOR ANIMATION */}
            <style jsx>{`
                @keyframes fadeUp {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                @keyframes loadingLine {
                    0% { transform: translateX(-100%); }
                    50% { transform: translateX(0); }
                    100% { transform: translateX(100%); }
                }
            `}</style>
        </div>
    );
}