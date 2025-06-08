/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
            {
                protocol:"https",
                hostname:"images.unspash.com"
            },
        ]
    }
};

export default nextConfig;
