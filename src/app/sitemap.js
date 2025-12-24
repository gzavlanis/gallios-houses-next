export default function sitemap() {
    const baseUrl = 'https://gallioshouses.gr';

    // These are your main pages
    const routes = [
        '',              // Homepage
        '/availability',
        '/location',
        '/chris',
        '/afroditi',
    ];

    // Your supported languages
    const languages = ['el', 'en', 'fr', 'de', 'it'];
    const urls = [];

    // This loop automatically creates 1 URL for every language + page combination
    languages.forEach((lang) => {
        routes.forEach((route) => {
            urls.push({
                url: `${baseUrl}/${lang}${route}`,
                lastModified: new Date(),
                changeFrequency: 'daily',
                priority: route === '' ? 1 : 0.8,
            });
        });
    });

    return urls;
}