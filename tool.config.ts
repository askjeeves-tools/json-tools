import { createToolConfig } from "@askjeeves/conversion-core";

export const toolConfig = createToolConfig({
	id: "json-tools",
	title: "JSON Converter",
	tagline: "Convert JSON files in your browser. Nothing leaves your device.",
	sourceFormat: "json",
	allowsMultiple: false,
	minFiles: 1,
	conversions: [
		{
			id: "json-csv",
			source: "json",
			target: "csv",
			label: "JSON → CSV",
			enabled: true,
			options: "none",
		},
	],
});
