import { defineConfig } from 'vite';


export default defineConfig({
    base: "https://bugashy.github.io/web-dev-w9p2-node/",
    build: {
        outDir: '../docs',
        emptyOutDir: true,
    }
})