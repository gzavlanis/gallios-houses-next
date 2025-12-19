import { getDictionary } from '@/dictionaries/get-dictionary';

export async function generateMetadata({ params }) {
    const { lang } = await params;
    const dict = await getDictionary(lang);
    const baseUrl = 'https://gallioshouses.gr';

    return {
        title: dict.meta.title,
        description: dict.meta.description,
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

export default function LanguageLayout({ children }) {
    return (
        <>
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
        </>
    );
};