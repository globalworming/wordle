import {expect, Page, test} from '@playwright/test';
import form from "../../page/signin/form";
import goToApp from "../../step/goToApp";

test.describe("Sign In",  async () => {
  test.describe("what we should see",  async () => {
    test('that we see the signin form', async ({ page }) => {
      await goToApp(page);
      await test.step("then should see signin form", async () => {
        await expect(form(page)).toBeVisible();
      })
    });

    test('that we are on the signin url', async ({ page }) => {
      await test.step("go to wordle app", async () => {
        await page.goto('http://localhost:5173/');
      })
      await expect(page).toHaveURL(/\/signin/);
    });
  })

  test.describe("where we log in successfully",  async () => {
    test('that we see the game', async ({ page }) => {
      await test.step("go to wordle app", async () => {
        await page.goto('http://localhost:5173/');
      })
      await expect(page).toHaveTitle("Wordle");
    });
  })
})