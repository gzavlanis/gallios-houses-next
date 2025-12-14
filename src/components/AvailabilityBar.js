import Link from 'next/link';
export default function AvailabilityBar() {
    return (
        <div className="glass-bar">
            <div className="search-field">
                <label className="search-label">Check In</label>
                <input type="date" className="search-input" />
            </div>
            <div className="search-field">
                <label className="search-label">Check Out</label>
                <input type="date" className="search-input" />
            </div>
            <div className="search-field">
                <label className="search-label">Guests</label>
                <select className="search-input">
                    <option>2 Guests</option>
                    <option>3 Guests</option>
                    <option>4 Guests</option>
                    <option>5 Guests</option>
                    <option>6 Guests</option>
                </select>
            </div>
            <Link href="/availability" className="btn btn-primary" style={{ border: 'none' }}>CHECK AVAILABILITY</Link>
        </div>
    );
}