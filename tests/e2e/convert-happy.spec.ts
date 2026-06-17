import { test } from "@playwright/test";
import { JSON_CONVERSION_CASES, runJsonConversionCase } from "./helpers";

for (const testCase of JSON_CONVERSION_CASES) {
	test(`converts ${testCase.id}`, async ({ page }) => {
		await page.goto("/");
		await runJsonConversionCase(page, testCase);
	});
}
