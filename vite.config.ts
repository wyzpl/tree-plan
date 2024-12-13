import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      imports: ["vue", "pinia"],
      vueTemplate: true,
      dirs: ["./src/utils/**", "./src/store/**"],
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      dirs: ["src/components"],
      extensions: ["vue"], // 组件的有效文件扩展名
      deep: true, // 搜索子目录
      resolvers: [ElementPlusResolver()],
    }),
  ],
  resolve: {
    alias: {
      // 设置别名
      "@": path.resolve(__dirname, "src"),
      "#": path.resolve(__dirname, "types"),
    },
    // https://cn.vitejs.dev/config/#resolve-extensions
    extensions: [".mjs", ".js", ".ts", ".jsx", ".tsx", ".json", ".vue"],
  },
});
