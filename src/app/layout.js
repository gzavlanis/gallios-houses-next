import './globals.css';

export const metadata = {
    title: 'Gallios Houses | Luxury Retreats in Rethymno',
    description: 'Experience authentic Cretan hospitality in our luxury apartments near Rethymno.',
    icons: {
        // This sets your logo as the favicon in the browser tab
        icon: '/assets/images/whatsapp-image-2023-12-27-at-08.44.38-removebg-192x144.png',
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
        <head>
            {/* Load Modern Fonts: Playfair Display (Headings) & Lato (Body) */}
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
            <link
                href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&family=Playfair+Display:ital,wght@0,400;0,600;1,400&display=swap"
                rel="stylesheet"
            />
        </head>
        <body>
        {children}
        </body>
        </html>
    );
}