import {expect, Page, test} from "@playwright/test";

export default async (page: Page) => {
    await test.step("open leaderboard", async () => {
        await page.locator('svg').nth(3).click();
        await expect(page.getByRole('row', { name: 'k Australia 0 0%' })).toBeVisible()
    })
};
