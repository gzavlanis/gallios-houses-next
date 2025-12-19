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
        airbnb: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1238.84 1333.34" fillRule="evenodd" clipRule="evenodd"><path d="M1151.93 1079.74c-9.35 69.41-56.05 129.48-121.45 156.17-32.04 13.33-66.73 17.35-101.44 13.33-33.36-4-66.73-14.68-101.43-34.68-48.06-26.72-96.11-68.08-152.16-129.48 88.09-108.11 141.47-206.88 161.5-294.94 9.34-41.39 10.68-78.76 6.68-113.46-5.33-33.36-17.35-64.07-36.04-90.76-41.37-60.05-110.77-94.76-188.19-94.76-77.41 0-146.81 36.04-188.19 94.76-18.69 26.69-30.69 57.4-36.04 90.76-5.33 34.7-4 73.41 6.68 113.46 20.01 88.07 74.73 188.17 161.49 296.26-54.72 61.41-104.11 102.79-152.16 129.48-34.69 20.03-68.06 30.7-101.43 34.69a213.58 213.58 0 01-101.44-13.33c-65.4-26.69-112.1-86.77-121.45-156.17-4-33.36-1.33-66.72 12.02-104.09 4-13.36 10.68-26.68 17.35-42.7 9.35-21.35 20.03-44.06 30.69-66.75l1.35-2.65C240.35 666 339.12 463.14 441.89 265.62l4-8.03c10.69-20 21.35-41.35 32.04-61.37 10.67-21.36 22.68-41.39 37.36-58.74 28.03-32.04 65.4-49.39 106.77-49.39 41.37 0 78.75 17.35 106.78 49.39 14.68 17.36 26.69 37.39 37.37 58.74 10.68 20.03 21.35 41.37 32.03 61.37l4.01 8.03c101.43 198.85 200.2 401.72 292.29 600.59v1.32c10.68 21.36 20.01 45.4 30.69 66.75 6.68 16.02 13.35 29.35 17.35 42.7 10.68 34.69 14.68 68.08 9.35 102.76zm-532.53-62.73c-72.07-90.75-118.79-176.17-134.8-248.22-6.67-30.71-8.01-57.4-4-81.43 2.67-21.36 10.68-40.05 21.35-56.08 25.36-36 68.07-58.73 117.45-58.73 49.39 0 93.43 21.37 117.45 58.73 10.67 16.03 18.68 34.72 21.35 56.08 4 24.03 2.67 52.06-4 81.43-16.02 70.73-62.73 156.14-134.8 248.22zm601.93-69.4c-6.67-16.01-13.35-33.36-20.01-48.04-10.68-24.01-21.36-46.72-30.71-68.08l-1.33-1.32c-92.08-200.21-190.85-403.08-294.96-603.25l-4-8.03c-10.68-20.03-21.36-41.39-32.03-62.73-13.36-24.04-26.7-49.37-48.05-73.41C747.52 29.36 686.13 0 620.74 0 554 0 493.95 29.36 449.9 80.09c-20.01 24.01-34.69 49.37-48.04 73.41-10.68 21.35-21.36 42.7-32.04 62.73l-4 7.99C263.06 424.42 162.96 627.29 70.86 827.49l-1.33 2.67c-9.35 21.35-20.03 44.02-30.71 68.06-6.67 14.69-13.35 30.71-20.01 48.06-17.36 49.37-22.69 96.09-16.03 144.13 14.69 100.11 81.43 184.2 173.52 221.56 34.69 14.69 70.73 21.36 108.11 21.36 10.68 0 24.02-1.33 34.7-2.68 44.04-5.35 89.41-20 133.45-45.37 54.73-30.69 106.78-74.73 165.5-138.8 58.72 64.07 112.11 108.11 165.49 138.8 44.06 25.37 89.43 40.03 133.47 45.37 10.68 1.35 24.02 2.68 34.7 2.68 37.37 0 74.73-6.67 108.11-21.36 93.43-37.36 158.82-122.78 173.5-221.56 10.68-46.72 5.33-93.41-12.01-142.81z" fill="#fff" fillRule="nonzero"/></svg>,

        // Booking.com (B.)
        booking: <path d="M4 4v16h8.5c3 0 4.5-2 4.5-4.5c0-1.8-1-2.8-2.5-3.3c1.5-.7 2.5-2 2.5-4.2c0-3-2-4-5-4H4zm3 3h4.5c1 0 2 .5 2 1.5s-1 1.5-2 1.5H7V7zm0 6h5c1.5 0 2 .8 2 2s-.5 2-2 2H7v-4zm12 5h3v4h-3v-4z" fill={color} stroke="none" />,

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
        // --- ADD THESE NEW ICONS ---
        star: <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" fill={color} />,
        shield: <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z" fill={color} />,
        globe: <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" fill={color} />,
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