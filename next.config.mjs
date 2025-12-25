/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        unoptimized: true,
    },
    typescript: {
        ignoreBuildErrors: true,
    },
    async redirects() {
        return [
            {
                source: '/index.html',
                destination: '/',
                permanent: true, // 301 Redirect (Permanent)
            },
            {
                source: '/contact.html',
                destination: '/contact',
                permanent: true,
            },
            {
                source: '/availability.html',
                destination: '/availability',
                permanent: true,
            },
            {
                source: '/chris.html',
                destination: '/chris',
                permanent: true,
            },
            {
                source: '/afroditi.html',
                destination: '/afroditi',
                permanent: true,
            },
            // This redirects ANY other .html page to the homepage to stop the errors
            {
                source: '/:slug*.html',
                destination: '/',
                permanent: true,
            },
        ];
    },
};

export default nextConfig;