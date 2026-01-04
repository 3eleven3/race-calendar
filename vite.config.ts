import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import treeShakeable from "rollup-plugin-tree-shakeable";

// https://vite.dev/config/
export default defineConfig({
	plugins: [react(), treeShakeable()],
	base: "/",
	server: {
		host: "0.0.0.0",
		port: 5000,
		allowedHosts: true,
	},
	build: {
		outDir: "docs",
	},
});
