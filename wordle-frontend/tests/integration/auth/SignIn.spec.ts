import {expect, Page, test} from '@playwright/test';
import form from "../../page/signin/form";
import goToApp from "../../step/goToApp";
import givenDefaultHttpMock, {givenSignFailsBecauseTokenExpired} from "../../step/given/givenDefaultHttpMocks";

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

  test.describe("where we sign in successfully",  async () => {
    test('that we see the game', async ({ page }) => {
      await givenDefaultHttpMock(page)
      await test.step("go to wordle app", async () => {
        await page.goto('http://localhost:5173/');
      })
      await page.locator('#name').fill('globalworming');
      await page.locator('#name').press('Tab');
      await page.locator('#password').fill('globalworming');
      await page.locator('#password').press('Enter');
      await expect(page.getByText("Let's Play Reactle")).toBeVisible();
    });
  })

  test.describe("where sign in fails",  async () => {
    test('that we an error', async ({ page }) => {
      await givenSignFailsBecauseTokenExpired(page)
      await test.step("go to wordle app", async () => {
        await page.goto('http://localhost:5173/');
      })
      await page.locator('#name').fill('token');
      await page.locator('#name').press('Tab');
      await page.locator('#password').fill('token');
      await page.locator('#password').press('Enter');
      await expect(page.getByRole('alert')).toBeVisible();
    });
  })
})