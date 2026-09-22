import type { NextConfig } from 'next';
// configure-pages provides "" for a root site, or "/repository".
const basePath = process.env.BASE_PATH?.replace(/\/$/, '') ?? '';
if (
  basePath &&
  (!basePath.startsWith('/') ||
    basePath.startsWith('//') ||
    basePath.includes('..'))
) {
  throw new Error('BASE_PATH must be empty or a path such as /portfolio');
}
const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath,
  images: { unoptimized: true },
};
export default nextConfig;
