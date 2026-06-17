export interface FaqEntry {
	question: string;
	answer: string;
}

export const FAQ_ENTRIES: FaqEntry[] = [
	{
		question: "Is this JSON converter free?",
		answer:
			"Yes. Every conversion is free with no account, watermark, or usage limit.",
	},
	{
		question: "Is this JSON converter secure?",
		answer:
			"Yes. Files are processed locally in your browser. Nothing is uploaded to a server, so your data stays on your device.",
	},
	{
		question: "What formats can I convert JSON to?",
		answer:
			"You can convert JSON to CSV. The tool accepts standard JSON files including arrays of objects and nested structures.",
	},
	{
		question: "Can I convert JSON arrays to CSV?",
		answer:
			"Yes. An array of objects becomes a CSV with column headers from object keys. Each object becomes one row.",
	},
	{
		question: "Does the converter work on mobile?",
		answer:
			"Yes. It runs in modern mobile browsers that support HTML5 and JavaScript. Very large files may be slower on mobile devices.",
	},
	{
		question: "What is the maximum file size?",
		answer:
			"Each file can be up to about 50 MB. If a file is too large, you will see a clear error message asking you to use a smaller file.",
	},
	{
		question: "Why did my conversion fail?",
		answer:
			"Common causes are invalid JSON syntax, an empty file, exceeding the size limit, or JSON that cannot be represented as tabular CSV. Check the message below the converter for specific guidance, then try again or refresh the page.",
	},
];
