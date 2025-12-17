"use client";
import { useState } from 'react';

export default function AvailabilityBar({ dict }) {
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
            <button className="btn btn-primary" style={{ height: '45px', padding: '0 30px' }}>
                {t.btn}
            </button>
        </div>
    );
}