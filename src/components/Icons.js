export default function Icon({ name, size = 24, color = "currentColor", className = "" }) {
    const icons = {
        // --- UI / NAVIGATION ---
        menu: <path d="M3 12h18M3 6h18M3 18h18" />, // Hamburger
        close: <path d="M18 6L6 18M6 6l12 12" />, // X
        chevronDown: <path d="M6 9l6 6 6-6" />,
        chevronUp: <path d="M18 15l-6-6-6 6" />,
        arrowRight: <path d="M5 12h14M12 5l7 7-7 7" />,
        paperPlane: <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />,
        search: <circle cx="11" cy="11" r="8" />, // Simple search glass if needed

        // --- DISCOVER / LOCATION ---
        compass: <circle cx="12" cy="12" r="10" />, // Basic compass circle
        mapMarked: <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />, // Map Pin

        // --- HOUSE FACILITIES (General) ---
        users: <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2 M16 3.13a4 4 0 0 1 0 7.75 M23 21v-2a4 4 0 0 0-3-3.87" />,
        ruler: <path d="M2 12h20 M2 12l4-4m-4 4l4 4" />,
        bed: <path d="M2 20v-8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v8 M4 10V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4" />,
        bath: <path d="M9 6 6.5 3.5a1.5 1.5 0 0 0-1-1C4.5 3.5 6 9 6 9H4v13h16V9h-2s1.5-5.5.5-6.5a1.5 1.5 0 0 0-1 1L15 6" />, // Abstract bath
        kitchen: <path d="M3 21h18v-2a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2zM5 10h14" />,
        tv: <path d="M2 7h20v14H2z M12 2L12 7 M8 2L12 7 M16 2L12 7" />,

        // --- OUTDOORS & EXTRAS ---
        tree: <path d="M12 2L2 22h20L12 2z M12 12v10" />, // Garden
        parking: <path d="M5 2h5a5 5 0 0 1 0 10H5zM5 2v20" />, // P symbol
        pool: <path d="M2 20s3-2 6-2 6 2 12 0 M2 17s3-2 6-2 6 2 12 0" />, // Water waves
        laundry: <path d="M4 2h16a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8z" />,
        wifi: <path d="M5 12.55a11 11 0 0 1 14.08 0 M1.42 9a16 16 0 0 1 21.16 0 M8.53 16.11a6 6 0 0 1 6.95 0 M12 20h.01" />,
        chair: <path d="M4 22h16 M4 18v4 M20 18v4 M7 2h10v10H7z" />, // Terrace Chair
        sun: <circle cx="12" cy="12" r="5" />, // Solar / Sun
        wind: <path d="M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2" />, // Air Con
        family: <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />, // Family rooms (similar to users)

        // --- HOMEPAGE AMENITIES (Specific) ---
        beach: <path d="M12 22v-9 M5 12l7-9 7 9" />, // Umbrella
        home: <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />, // House

        // --- SOCIAL MEDIA ---
        facebook: <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>,
        instagram: (
            <g>
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
            </g>
        ),
        // ... inside the icons object ...
        airbnb: <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 15c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm4.5-5.5c0 1.66-1.34 3-3 3s-3-1.34-3-3 1.34-3 3-3 3 1.34 3 3z" fill={color} stroke="none" />,

        // Simple "B" icon for Booking.com
        booking: <path d="M5 3h7c2.21 0 4 1.79 4 4 0 1.83-1.22 3.36-2.9 3.85C15.18 11.4 17 13.3 17 16c0 2.76-2.24 5-5 5H5V3zm2 2v5h5c1.38 0 2.5-1.12 2.5-2.5S13.38 5 12 5H7zm0 7v6h5c1.38 0 2.5-1.12 2.5-2.5S13.38 12 12 12H7z" fill={color} stroke="none" />,

        flag_el: (
            <g>
                <circle cx="12" cy="12" r="10" fill="#005777"/>
                <path d="M4 12h16 M12 4v16" stroke="white" strokeWidth="2"/>
                <path d="M4 8h5 M4 16h5" stroke="white" strokeWidth="2"/>
            </g>
        ),
        flag_en: (
            <g>
                <circle cx="12" cy="12" r="10" fill="#00247d"/>
                <path d="M4 4l16 16M20 4L4 20" stroke="white" strokeWidth="2"/>
                <path d="M4 4l16 16M20 4L4 20" stroke="#cf142b" strokeWidth="1"/>
                <path d="M12 2v20M2 12h20" stroke="white" strokeWidth="4"/>
                <path d="M12 2v20M2 12h20" stroke="#cf142b" strokeWidth="2"/>
            </g>
        ),
        flag_fr: (
            <g>
                <defs><clipPath id="circle"><circle cx="12" cy="12" r="10"/></clipPath></defs>
                <g clipPath="url(#circle)">
                    <rect x="2" y="2" width="6.6" height="20" fill="#002395"/>
                    <rect x="8.6" y="2" width="6.6" height="20" fill="white"/>
                    <rect x="15.2" y="2" width="6.8" height="20" fill="#ed2939"/>
                </g>
            </g>
        ),
        flag_de: (
            <g>
                <defs><clipPath id="circleDe"><circle cx="12" cy="12" r="10"/></clipPath></defs>
                <g clipPath="url(#circleDe)">
                    <rect x="2" y="2" width="20" height="6.6" fill="#000000"/>
                    <rect x="2" y="8.6" width="20" height="6.6" fill="#dd0000"/>
                    <rect x="2" y="15.2" width="20" height="6.8" fill="#ffce00"/>
                </g>
            </g>
        ),
        flag_it: (
            <g>
                <defs><clipPath id="circleIt"><circle cx="12" cy="12" r="10"/></clipPath></defs>
                <g clipPath="url(#circleIt)">
                    <rect x="2" y="2" width="6.6" height="20" fill="#009246"/>
                    <rect x="8.6" y="2" width="6.6" height="20" fill="white"/>
                    <rect x="15.2" y="2" width="6.8" height="20" fill="#ce2b37"/>
                </g>
            </g>
        ),
    };

    const path = icons[name];

    // If name is wrong or missing, we render nothing (safe fail)
    if (!path) return null;

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke={color}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
            // This style ensures the svg respects text alignment
            style={{ display: 'inline-block', verticalAlign: 'middle' }}
        >
            {path}
        </svg>
    );
}