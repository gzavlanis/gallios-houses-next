export default function sitemap() {
    const baseUrl = 'https://gallioshouses.gr';
    const languages = ['en', 'el', 'fr', 'de', 'it'];

    // Define your page routes
    const routes = [
        '',           // Home
        '/chris',     // Chris House
        '/afroditi',  // Afroditi Suite
        '/location',  // Location
        '/availability' // Booking
    ];

    let sitemapEntries = [];

    // Generate a URL for every page in every language
    languages.forEach(lang => {
        routes.forEach(route => {
            sitemapEntries.push({
                url: `${baseUrl}/${lang}${route}`,
                lastModified: new Date(),
                changeFrequency: 'weekly',
                priority: route === '' ? 1 : 0.8, // Home is priority 1
            });
        });
    });

    return sitemapEntries;
}