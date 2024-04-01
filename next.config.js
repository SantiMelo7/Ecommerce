/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "**"
            }
        ],
        domains: ["res.cloudinary.com", "lh3.googleusercontent.com"],

    }

}

module.exports = nextConfig