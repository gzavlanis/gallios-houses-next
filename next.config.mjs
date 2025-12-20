/** @type {import('next').NextConfig} */
const nextConfig = {
    // Static Export for a fast, simple site
    // output: 'export',
    // Disable heavy image processing to save memory
    images: {
        unoptimized: true,
    },
    eslint: {
        // Warning: This allows production builds to successfully complete even if
        // your project has ESLint errors.
        ignoreDuringBuilds: true,
    },
    typescript: {
        // !! WARN !!
        // Dangerously allow production builds to successfully complete even if
        // your project has type errors.
        ignoreBuildErrors: true,
    },
};

export default nextConfig;