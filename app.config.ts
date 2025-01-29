import { defineConfig } from "@solidjs/start/config";

export default defineConfig({
  server: {
    prerender: {
      routes: ["/", "/blog"]
    }
  },
  middleware: "./src/middleware.ts",
});
