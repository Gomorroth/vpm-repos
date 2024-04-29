const isRelease = process.env.NODE_ENV === 'production';

var repoName = process.env.GITHUB_REPOSITORY ?? "vpm-repos";
repoName = repoName.slice(repoName.indexOf("/") + 1);

/** @type {import('next').NextConfig} */
const nextConfig = {
  assetPrefix: isRelease ? repoName : undefined,
  reactStrictMode: true,
  output: "export",
};

export default nextConfig;
