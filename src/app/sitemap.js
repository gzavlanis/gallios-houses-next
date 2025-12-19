export default function sitemap() {
    const baseUrl = 'https://gallioshouses.gr';
    const languages = ['en', 'el', 'fr', 'de', 'it'];
    const routes = ['', '/chris', '/afroditi', '/location', '/availability'];
    let sitemapEntries = [];
    languages.forEach(lang => {
        routes.forEach(route => {
            sitemapEntries.push({
                url: `${baseUrl}/${lang}${route}`,
                lastModified: new Date(),
                changeFrequency: 'weekly',
                priority: route === '' ? 1 : 0.8,
            });
        });
    });
    return sitemapEntries;
}