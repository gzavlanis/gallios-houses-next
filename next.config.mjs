/** @type {import('next').NextConfig} */
const nextConfig = {
    // This forces the site to be just HTML/CSS/JS (no heavy server processing)
    output: 'export',

    // This stops the Image Optimizer from hanging your computer
    images: {
        unoptimized: true,
    },
};

export default nextConfig;