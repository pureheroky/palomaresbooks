/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.module.rules.push({
      test: /\.docx$/,
      use: [
        {
          loader: "file-loader",
          options: {
            name: "[name].[ext]",
            publicPath: "/_next/static/files/",
          },
        },
      ],
    });

    return config;
  },
};
