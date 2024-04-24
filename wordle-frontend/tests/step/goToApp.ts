import {Page, test} from "@playwright/test";

export default async (page: Page) => {
    await test.step("go to wordle app", async () => {
        await page.goto('http://localhost:5173/');
    })
};
