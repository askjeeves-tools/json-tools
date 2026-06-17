import { createToolConfig } from "@askjeeves/conversion-core";
import { SEO_BRAND_TITLE, SEO_DESCRIPTION } from "./src/seo";

export const toolConfig = createToolConfig({
	id: "json-tools",
	title: SEO_BRAND_TITLE,
	tagline: SEO_DESCRIPTION,
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
