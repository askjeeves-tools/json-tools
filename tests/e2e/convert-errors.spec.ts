import { unlink, writeFile } from "node:fs/promises";
import { join } from "node:path";
import { test } from "@playwright/test";
import {
	expectConvertPanelVisible,
	expectToolStatusError,
	fixturePath,
	uploadFixture,
} from "./helpers";

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

test("oversize upload shows error", async ({ page }) => {
	const bigPath = join(fixturePath(".."), "oversize.json");
	const big = Buffer.alloc(52_428_801, 0x7b);

	try {
		await writeFile(bigPath, big);
		await page.goto("/");
		await page.locator("#tool-file-input").setInputFiles(bigPath);
		await expectToolStatusError(page, /too large/i);
	} finally {
		await unlink(bigPath).catch(() => {});
	}
});
