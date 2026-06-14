import askJeeves from "@askjeeves/astro-integration";
import { defineConfig } from "astro/config";
import pkg from "./package.json" with { type: "json" };

export default defineConfig({
	output: "static",
	site: "https://json.askjeeves.cc",
	integrations: [
		askJeeves({
			name: "Ask Jeeves",
			tagline:
				"Convert JSON files in your browser. Nothing leaves your device.",
			version: pkg.version,
			openGraph: {
				home: {
					title: "JSON Converter — Ask Jeeves",
					description: "Free JSON to CSV conversion in your browser.",
				},
			},
		}),
	],
	vite: {
		resolve: { preserveSymlinks: true },
		ssr: {
			noExternal: [
				"@askjeeves/conversion-core",
				"@askjeeves/processors-csv-json",
				"@askjeeves/ui",
			],
		},
	},
});
