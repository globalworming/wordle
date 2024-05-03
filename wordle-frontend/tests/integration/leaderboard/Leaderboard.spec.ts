import {test} from '@playwright/test';
import givenDefaultHttpMock from "../../step/given/httpMocks/givenDefaultHttpMocks";
import openLeaderboard from "../../step/openLeaderboard";
import givenSignInSuccessful from "../../step/given/givenSignInSuccessful";

test.describe("Leaderboard",  async () => {

  test.describe("what we should see",  async () => {
    test('the full leaderboard', async ({ page }) => {
      await givenDefaultHttpMock(page)
      await givenSignInSuccessful(page)
      await test.step('click close on "how to play"', async () => {
        await page.getByRole('heading', {name: 'How to play'}).waitFor({timeout: 5000})
        await page.getByRole('button').click();
      });
      await openLeaderboard(page)
    });
  })
})