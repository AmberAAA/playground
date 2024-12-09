import { defineConfig } from "umi";

export default defineConfig({
  routes: [
    { path: "/", component: "index" },
    { path: "/docs", component: "docs" },
  ],
  npmClient: "pnpm",
  antd: {
    configProvider: {},
    appConfig: {},
  },
  locale: {
    default: "zh-CN",
    antd: true,
  },
  plugins: [
    "./node_modules/@umijs/plugins/dist/antd.js",
    "./node_modules/@umijs/plugins/dist/locale.js",
  ],
});
