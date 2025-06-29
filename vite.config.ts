/// <reference types="vitest/config" />

import path from "path";
import { defineConfig } from "vite";

import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
	plugins: [react()],
	test: {
		environment: "jsdom",
		globals: true,
		setupFiles: "./src/setupTests.ts",
	},
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "./src"),
		},
	},
});
