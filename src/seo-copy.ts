export const HOW_IT_WORKS_STEPS = [
	"Upload a JSON file using the drop zone or file picker.",
	"Choose JSON → CSV as your output format.",
	"Click Convert, then download your CSV file. Nothing is uploaded to a server.",
] as const;

export const SECURITY_SECTION_COPY =
	"Your files are processed locally in your browser. Nothing is stored on a server and nothing is uploaded over the network. That makes this tool a good fit for API responses, configuration files, and other sensitive data you do not want to send to a third-party service.";

export const CONVERSION_DESCRIPTIONS: Record<string, string> = {
	"json-csv":
		"Convert JSON arrays or objects to CSV. Nested objects are flattened; arrays of objects become spreadsheet rows with column headers.",
};
