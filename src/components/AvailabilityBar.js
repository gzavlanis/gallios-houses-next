"use client";

import Link from "next/link";
import {usePathname} from "next/navigation";

export default function AvailabilityBar({ dict }) {
    const pathname = usePathname();
    const lang = pathname?.split('/')[1] || 'el';
    const t = dict?.booking?.labels || {
        arrival: "Check In", departure: "Check Out", adults: "Guests", btn: "CHECK"
    };

    return (
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
    );
}