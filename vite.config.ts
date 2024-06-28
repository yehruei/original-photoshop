import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  base: '/original-photoshop/', // 替换为您的仓库名称
  build: {
    outDir: 'dist'
  }
});
