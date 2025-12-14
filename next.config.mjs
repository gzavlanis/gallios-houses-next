/** @type {import('next').NextConfig} */
const nextConfig = {
    // Static Export for a fast, simple site
    output: 'export',

    // Disable heavy image processing to save memory
    images: {
        unoptimized: true,
    },
};

export default nextConfig;