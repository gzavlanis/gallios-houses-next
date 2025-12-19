import '../globals.css'; // Adjust path if needed (go up 2 levels)
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

// --- DYNAMIC METADATA GENERATION ---
export async function generateMetadata({ params }) {
    const { lang } = await params;
    const dict = await getDictionary(lang);
    const baseUrl = 'https://gallioshouses.gr';

    return {
        title: dict.meta.title,
        description: dict.meta.description,
        // The icons usually stay in the Root Layout, but can be here too just in case
        icons: {
            icon: '/icon.png',
            shortcut: '/icon.png',
            apple: '/icon.png',
        },
        openGraph: {
            title: dict.meta.title,
            description: dict.meta.description,
            siteName: 'Gallios Houses',
            locale: lang,
            type: 'website',
            images: [{ url: '/assets/images/chris-main.jpg', width: 1200, height: 630 }],
        },
        alternates: {
            canonical: `${baseUrl}/${lang}`,
            languages: {
                'en': `${baseUrl}/en`,
                'el': `${baseUrl}/el`,
                'fr': `${baseUrl}/fr`,
                'de': `${baseUrl}/de`,
                'it': `${baseUrl}/it`,
            },
        },
    };
}

export default async function LanguageLayout({ children, params }) {
    const { lang } = await params;

    return (
        // We do NOT need <html> here if it's already in the Root Layout.
        // But usually, [lang] layout sets the language attribute on a div or main.
        // Since you are using Root Layout for html/body, just return children or wrapper.

        <div className={`${lato.variable} ${playfair.variable} app-wrapper`}>
            {/* Add Schema Script here if you want it on every page */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "LodgingBusiness",
                        "name": "Gallios Houses",
                        "image": "https://gallioshouses.gr/assets/images/collage-3-2000x1414.jpeg",
                        "description": "Luxury traditional villas in Loutra, Rethymno.",
                        "address": {
                            "@type": "PostalAddress",
                            "streetAddress": "Loutra Village",
                            "addressLocality": "Rethymno",
                            "addressRegion": "Crete",
                            "postalCode": "74100",
                            "addressCountry": "GR"
                        },
                        "telephone": "+306979123456",
                        "url": "https://gallioshouses.gr"
                    })
                }}
            />
            {children}
        </div>
    );
};