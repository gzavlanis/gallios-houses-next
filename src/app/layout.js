import './globals.css';
import { Lato, Playfair_Display } from 'next/font/google';
import Preloader from "@/components/Preloader";
import ChatWidget from "@/components/ChatWidget";
import StickyBookBar from "@/components/StickyBookbar";

const lato = Lato({
    subsets: ['latin'],
    weight: ['300', '400', '700'],
    variable: '--font-body'
});

const playfair = Playfair_Display({
    subsets: ['latin'],
    weight: ['400', '600', '700'],
    variable: '--font-heading'
});

export const metadata = {
    metadataBase: new URL('https://gallioshouses.gr'),
    title: 'Gallios Houses',
    description: 'Luxury accommodation in Crete',
    icons: {
        icon: '/icon.png?v=2',
        shortcut: '/icon.png?v=2',
        apple: '/icon.png?v=2',
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={`${lato.variable} ${playfair.variable}`}>
                <Preloader />
                {children}
                <StickyBookBar />
                <ChatWidget />
            </body>
        </html>
    );
}