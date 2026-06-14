import { unlink, writeFile } from "node:fs/promises";
import { join } from "node:path";
import { fixturePath } from "@askjeeves/test-e2e/fixtures";
import {
	expectConvertPanelVisible,
	expectToolStatusError,
	uploadFixture,
} from "@askjeeves/test-e2e/tool-flow";
import { test } from "@playwright/test";

test("wrong format upload shows error", async ({ page }) => {
	await page.goto("/");
	const badPath = join(fixturePath(".."), "wrong-format.csv");
	await writeFile(badPath, "name,count\na,1");

	try {
		await page.locator("#tool-file-input").setInputFiles(badPath);
		await expectToolStatusError(page, /JSON|accept/i);
		await expectConvertPanelVisible(page, false);
	} finally {
		await unlink(badPath).catch(() => {});
	}
});

test("invalid json content rejected at upload", async ({ page }) => {
	await page.goto("/");
	await uploadFixture(page, "invalid.json");
	await expectToolStatusError(page, /valid JSON|JSON/i);
	await expectConvertPanelVisible(page, false);
});

test("object json shows conversion error on convert", async ({ page }) => {
	await page.goto("/");
	const objectPath = join(fixturePath(".."), "object.json");
	await writeFile(objectPath, '{"name":"solo"}');

	try {
		await page.locator("#tool-file-input").setInputFiles(objectPath);
		await expectConvertPanelVisible(page, true);
		await page.locator("#tool-convert-btn").click();
		await expectToolStatusError(page, /array of objects/i);
	} finally {
		await unlink(objectPath).catch(() => {});
	}
});
