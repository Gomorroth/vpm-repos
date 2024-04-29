const isRelease = process.env.NODE_ENV === 'production';

const repoName = process.env.GITHUB_REPOSITORY ? `${process.env.GITHUB_REPOSITORY.slice(process.env.GITHUB_REPOSITORY.indexOf("/"))}/` : "/vpm-repos/";

/** @type {import('next').NextConfig} */
const nextConfig = {
  assetPrefix: isRelease ? repoName : undefined,
  reactStrictMode: true,
  output: "export",
};

export default nextConfig;
