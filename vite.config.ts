import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { isCustomElement, transformAssetUrls } from 'vue3-pixi/compiler'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue({
    template: {
      compilerOptions: { isCustomElement },
      transformAssetUrls
    }
  })],
  server: {
    port: 3002,
    open: true
  }
})
