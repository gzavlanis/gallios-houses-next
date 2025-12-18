import '../globals.css';
import { Lato, Playfair_Display } from 'next/font/google';
import {getDictionary} from "@/dictionaries/get-dictionary";

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

export async function generateMetadata({ params }) {
    const { lang } = await params;
    const dict = await getDictionary(lang);

    return {
        title: dict.meta.title,
        description: dict.meta.description,
        icons: {
            icon: '/icon.png',
            shortcut: '/icon.png',
            apple: '/icon.png',
        },
        // Optional: Open Graph for better sharing on Facebook/WhatsApp
        openGraph: {
            title: dict.meta.title,
            description: dict.meta.description,
            siteName: 'Gallios Houses',
            locale: lang,
            type: 'website',
        },
    };
}

export default async function RootLayout({ children, params }) {
    const { lang } = await params;

    return (
        <html lang={lang}>
        <body className={`${lato.variable} ${playfair.variable}`}>
        {children}
        </body>
        </html>
    );
};

export async function generateStaticParams() {
    return [
        { lang: 'el' },
        { lang: 'en' },
        { lang: 'fr' },
        { lang: 'de' },
        { lang: 'it' },
    ];
}