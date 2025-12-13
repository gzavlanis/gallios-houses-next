import Link from 'next/link';

export default function AvailabilityBar() {
    return (
        <div className="glass-bar">

            {/* Check In */}
            <div className="search-field">
                <label className="search-label">Check In</label>
                <input
                    type="date"
                    className="search-input"
                    lang="en-US" // Hints browser to use English format
                    placeholder="dd/mm/yyyy"
                />
            </div>

            {/* Check Out */}
            <div className="search-field">
                <label className="search-label">Check Out</label>
                <input
                    type="date"
                    className="search-input"
                    lang="en-US"
                    placeholder="dd/mm/yyyy"
                />
            </div>

            {/* Guests */}
            <div className="search-field">
                <label className="search-label">Guests</label>
                <select className="search-input" style={{ color: '#333' }}>
                    <option value="2">2 Guests</option>
                    <option value="3">3 Guests</option>
                    <option value="4">4 Guests</option>
                    <option value="5">5 Guests</option>
                    <option value="6">6 Guests</option>
                </select>
            </div>

            {/* Search Button */}
            <Link href="/availability" className="btn btn-primary" style={{
                padding: '12px 30px',
                fontSize: '12px',
                marginBottom: '2px',
                border: 'none'
            }}>
                CHECK AVAILABILITY
            </Link>

        </div>
    );
}