import { wayfinder } from '@laravel/vite-plugin-wayfinder';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import laravel from 'laravel-vite-plugin';
import { defineConfig } from 'vite';

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.tsx'],
            ssr: 'resources/js/ssr.tsx',
            refresh: true,
        }),
        react(),
        tailwindcss(),
        // Only enable wayfinder in development or when PHP is available
        ...(process.env.NODE_ENV === 'development' ? [
            wayfinder({
                formVariants: true,
            })
        ] : []),
    ],
    esbuild: {
        jsx: 'automatic',
    },
});
