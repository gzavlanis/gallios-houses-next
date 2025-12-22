"use client";
import { useState } from 'react';
import {
    format,
    startOfMonth,
    endOfMonth,
    eachDayOfInterval,
    addMonths,
    subMonths,
    isToday,
    getDay
} from 'date-fns';

export default function CalendarWidget({ houseName, blockedDates = [] }) {
    // Start with the current month
    const [currentMonth, setCurrentMonth] = useState(new Date());

    // 1. Calculate the days to show
    const monthStart = startOfMonth(currentMonth);
    const monthEnd = endOfMonth(currentMonth);

    // Get all days in the month (e.g., 1st to 30th)
    const daysInMonth = eachDayOfInterval({
        start: monthStart,
        end: monthEnd,
    });

    // 2. Navigation Functions
    const nextMonth = () => setCurrentMonth(addMonths(currentMonth, 1));
    const prevMonth = () => setCurrentMonth(subMonths(currentMonth, 1));

    // 3. Check if a specific day is booked
    const isBlocked = (date) => {
        // We compare using the string format YYYY-MM-DD
        const dateStr = format(date, 'yyyy-MM-dd');
        return blockedDates.includes(dateStr);
    };

    return (
        <div className="calendar-card">
            <h3 className="calendar-title">{houseName}</h3>

            {/* Header: Month Name & Arrows */}
            <div className="calendar-header">
                <button onClick={prevMonth} className="nav-btn">&lt;</button>
                <span className="month-label">{format(currentMonth, 'MMMM yyyy')}</span>
                <button onClick={nextMonth} className="nav-btn">&gt;</button>
            </div>

            {/* The Grid */}
            <div className="calendar-grid">
                {/* Weekday Labels (Sun, Mon...) */}
                {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map(day => (
                    <div key={day} className="weekday-label">{day}</div>
                ))}

                {/* Empty slots (Spacers) to align the 1st day correctly */}
                {/* If month starts on Tuesday (Index 2), we need 2 empty slots */}
                {Array.from({ length: getDay(monthStart) }).map((_, i) => (
                    <div key={`empty-${i}`} className="empty-slot"></div>
                ))}

                {/* Actual Days */}
                {daysInMonth.map((day) => {
                    const booked = isBlocked(day);
                    return (
                        <div
                            key={day.toString()}
                            className={`day-cell ${booked ? 'booked' : 'available'} ${isToday(day) ? 'today' : ''}`}
                        >
                            {format(day, 'd')}
                        </div>
                    );
                })}
            </div>

            {/* Legend (Key) */}
            <div className="legend">
                <div className="legend-item">
                    <span className="dot available"></span> Available
                </div>
                <div className="legend-item">
                    <span className="dot booked"></span> Booked
                </div>
            </div>

            {/* Styles for this specific component */}
            <style jsx>{`
                .calendar-card {
                    background: white;
                    border-radius: 12px;
                    padding: 25px;
                    box-shadow: 0 10px 30px rgba(0,0,0,0.08);
                    border: 1px solid #f0f0f0;
                    width: 100%;
                }

                .calendar-title {
                    color: var(--primary); /* Uses your global Teal */
                    text-align: center;
                    margin-bottom: 20px;
                    font-family: var(--font-heading);
                    font-size: 1.2rem;
                }

                .calendar-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 20px;
                }

                .month-label {
                    font-weight: 700;
                    color: #333;
                    font-size: 1rem;
                    text-transform: uppercase;
                    letter-spacing: 1px;
                }

                .nav-btn {
                    background: transparent;
                    border: 1px solid #eee;
                    border-radius: 50%;
                    width: 35px; height: 35px;
                    cursor: pointer;
                    color: var(--primary);
                    font-weight: bold;
                    transition: all 0.2s;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                .nav-btn:hover { background: #f9f9f9; border-color: var(--secondary); }

                .calendar-grid {
                    display: grid;
                    grid-template-columns: repeat(7, 1fr);
                    gap: 8px; /* Spacing between days */
                    text-align: center;
                }

                .weekday-label {
                    font-size: 11px;
                    font-weight: 800;
                    color: #aaa;
                    margin-bottom: 5px;
                    text-transform: uppercase;
                }

                .day-cell {
                    aspect-ratio: 1; /* Makes cells perfect squares */
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 14px;
                    border-radius: 6px;
                    transition: transform 0.2s;
                }

                /* AVAILABLE DAY STYLE */
                .available {
                    background: #f0fdf4; /* Light Green Bg */
                    color: #166534;       /* Dark Green Text */
                    font-weight: 600;
                }

                /* BOOKED DAY STYLE */
                .booked {
                    background: #fee2e2; /* Light Red Bg */
                    color: #991b1b;      /* Dark Red Text */
                    text-decoration: line-through;
                    opacity: 0.5;
                    cursor: not-allowed;
                }

                /* TODAY STYLE */
                .today {
                    border: 2px solid var(--secondary); /* Gold Border */
                }

                .legend {
                    margin-top: 25px;
                    display: flex;
                    justify-content: center;
                    gap: 20px;
                    font-size: 12px;
                    border-top: 1px solid #eee;
                    padding-top: 15px;
                }
                
                .legend-item { display: flex; align-items: center; gap: 6px; }

                .dot {
                    width: 10px; height: 10px;
                    border-radius: 50%;
                    display: inline-block;
                }
                .dot.available { background: #166534; }
                .dot.booked { background: #991b1b; opacity: 0.5; }
            `}</style>
        </div>
    );
}