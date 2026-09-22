import { defineConfig } from 'vite';

// Preview the static files directly, without the framework's server middleware.
const basePath = process.env.BASE_PATH?.replace(/\/$/, '') ?? '';
if (
  basePath &&
  (!basePath.startsWith('/') ||
    basePath.startsWith('//') ||
    basePath.includes('..'))
) {
  throw new Error('BASE_PATH must be empty or a path such as /portfolio');
}
export default defineConfig({
  base: basePath + '/',
  build: { outDir: 'dist/client' + basePath },
  preview: { host: '127.0.0.1' },
});
