import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react-swc';
import * as path from "path";

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/js/app.tsx'],
            refresh: true,
        }),
        react(),
    ],
    resolve: {
        alias: [
            {
                find: 'ziggy-js',
                replacement: path.resolve(__dirname, 'vendor/tightenco/ziggy/'),
            }
        ]
    }
});
