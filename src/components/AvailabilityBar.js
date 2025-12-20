"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AvailabilityBar({ dict }) {
    const pathname = usePathname();
    const lang = pathname?.split('/')[1] || 'el';
    const t = dict?.booking?.labels || {
        arrival: "Check In", departure: "Check Out", adults: "Guests", btn: "CHECK"
    };

    return (
        <>
            <div className="glass-bar">
                <div className="search-field">
                    <label className="search-label">{t.arrival}</label>
                    <input type="date" className="search-input" />
                </div>
                <div className="search-field">
                    <label className="search-label">{t.departure}</label>
                    <input type="date" className="search-input" />
                </div>
                <div className="search-field">
                    <label className="search-label">{t.adults}</label>
                    <select className="search-input">
                        <option>2 Adults</option>
                        <option>3 Adults</option>
                        <option>4 Adults</option>
                        <option>5 Adults</option>
                        <option>6 Adults</option>
                    </select>
                </div>
                <Link href={`/${lang}/availability`} className="btn btn-primary">{t.btn}</Link>
            </div>

            {/* --- THIS IS THE MAGIC FIX (Local Styles) --- */}
            <style jsx>{`
                /* Desktop Styles (Default) */
                .glass-bar {
                    display: inline-flex;
                    gap: 30px;
                    align-items: flex-end;
                    background: rgba(255, 255, 255, 0.6);
                    backdrop-filter: blur(15px);
                    border: 1px solid rgba(255, 255, 255, 0.6);
                    padding: 20px 40px;
                    border-radius: 4px;
                    box-shadow: 0 10px 40px rgba(0,0,0,0.15);
                    width: auto;
                }

                .search-field { text-align: left; }
                
                .search-label {
                    display: block;
                    color: #005777; /* var(--primary) hardcoded for safety */
                    font-size: 11px;
                    text-transform: uppercase;
                    letter-spacing: 1px;
                    font-weight: 800;
                    margin-bottom: 5px;
                }

                .search-input {
                    background: transparent;
                    border: none;
                    border-bottom: 2px solid rgba(0, 87, 119, 0.3);
                    color: #333;
                    font-family: 'Lato', sans-serif;
                    font-size: 15px;
                    font-weight: 600;
                    padding: 10px 0;
                    width: 160px;
                    outline: none;
                    cursor: pointer;
                    border-radius: 0;
                }

                .btn {
                    display: inline-block;
                    padding: 14px 32px;
                    font-size: 13px;
                    letter-spacing: 2px;
                    text-transform: uppercase;
                    font-weight: 700;
                    background: #005777;
                    color: white;
                    border: 1px solid #005777;
                    text-decoration: none;
                    transition: all 0.3s;
                }

                /* --- MOBILE FIXES (< 992px) --- */
                @media (max-width: 992px) {
                    .glass-bar {
                        display: flex;
                        flex-direction: column; /* Stack vertically */
                        gap: 15px;
                        width: 90vw; /* Take almost full screen width */
                        max-width: 400px; /* Limit width on tablets */
                        margin: 0 auto;
                        padding: 25px;
                        background: white; /* Solid white background for readability */
                        height: auto;
                    }

                    .search-field {
                        width: 100%; /* Force full width */
                    }

                    .search-input {
                        width: 100%; /* Force input full width */
                        box-sizing: border-box; /* THIS FIXES THE CUT-OFF */
                        border-bottom: 1px solid #ccc;
                    }
                    
                    /* Make the dropdown arrow align correctly */
                    select.search-input {
                        width: 100%;
                    }

                    .btn {
                        width: 100%;
                        text-align: center;
                        margin-top: 10px;
                    }
                }
            `}</style>

            {/* --- GLOBAL OVERRIDES (To Fix Text Overlap) --- */}
            <style jsx global>{`
                @media (max-width: 992px) {
                    /* Push the "A Lifetime Experience" text UP */
                    .hero-content {
                        transform: translateY(-130px) !important;
                    }
                    /* Ensure the container sits at the bottom */
                    .hero-bar-container {
                        bottom: 0 !important;
                        padding-bottom: 20px !important;
                        width: 100% !important;
                        display: flex !important;
                        justify-content: center !important;
                    }
                }
            `}</style>
        </>
    );
}