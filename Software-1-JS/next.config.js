/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: "/8000-Tech-Studio/Software-1-JS/out",
    images: { unoptimized: true },
    output: 'export',
    trailingSlash: true,
    webpack(config, { isServer }) {
        const prefix = config.assetPrefix ?? config.basePath ?? '';
        config.module.rules.push({
            test: /\.mp4$/,
            use: [{
                loader: 'file-loader',
                options: {
                    publicPath: `${prefix}/_next/static/media/`,
                    outputPath: `${isServer ? '../' : ''}static/media/`,
                    name: '[name].[hash].[ext]',
                },
            }],
        });
        return config;
    },
}

module.exports = nextConfig

