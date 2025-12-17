import '../globals.css';
import { Lato, Playfair_Display } from 'next/font/google';

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
    title: 'Gallios Houses | Luxury Retreat in Loutra',
    description: 'Experience authentic Cretan hospitality.',
};

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