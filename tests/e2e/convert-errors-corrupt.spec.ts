import { fixturePath } from "@askjeeves/test-e2e/fixtures";
import {
	expectConvertPanelVisible,
	expectToolStatusError,
	uploadFixture,
} from "@askjeeves/test-e2e/tool-flow";
import { test } from "@playwright/test";

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
