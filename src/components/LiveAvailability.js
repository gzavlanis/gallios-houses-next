"use client";
import { useState, useEffect } from 'react';
import CalendarWidget from '@/components/CalendarWidget'; // Use the widget we made previously

export default function LiveAvailability() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Fetch from our internal API
        fetch('/api/availability')
            .then(res => res.json())
            .then(json => {
                setData(json);
                setLoading(false);
            })
            .catch(err => {
                console.error(err);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return (
            <div className="loading-container">
                <div className="spinner"></div>
                <p>Syncing with Airbnb & Booking...</p>
                <style jsx>{`
                    .loading-container { text-align: center; padding: 60px; color: #005777; }
                    .spinner {
                        border: 4px solid #f3f3f3;
                        border-top: 4px solid #cba135;
                        border-radius: 50%;
                        width: 40px; height: 40px;
                        animation: spin 1s linear infinite;
                        margin: 0 auto 20px;
                    }
                    @keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
                `}</style>
            </div>
        );
    }

    if (!data) return <p className="text-center">Calendar temporarily unavailable.</p>;

    return (
        <div className="calendars-wrapper">
            {/* House 1 */}
            <CalendarWidget
                houseName="Chris House"
                blockedDates={data.house1}
            />

            {/* House 2 */}
            <CalendarWidget
                houseName="Afroditi Suite"
                blockedDates={data.house2}
            />

            <style jsx global>{`
                .calendars-wrapper {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
                    gap: 40px;
                    max-width: 1200px;
                    margin-bottom: 30px;
                }
            `}</style>
        </div>
    );
}