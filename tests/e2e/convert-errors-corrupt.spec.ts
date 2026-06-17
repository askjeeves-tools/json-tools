import { test } from "@playwright/test";
import {
	expectConvertPanelVisible,
	expectToolStatusError,
	fixturePath,
} from "./helpers";

test("invalid JSON content shows error at upload", async ({ page }) => {
	await page.goto("/");
	await page
		.locator("#tool-file-input")
		.setInputFiles(fixturePath("invalid.json"));
	await expectToolStatusError(page, /valid JSON/i);
	await expectConvertPanelVisible(page, false);
});

test("invalid JSON cannot convert after bypass would require valid upload", async ({
	page,
}) => {
	await page.goto("/");
	await page
		.locator("#tool-file-input")
		.setInputFiles(fixturePath("invalid.json"));
	await expectToolStatusError(page, /valid JSON|JSON/i);
});
