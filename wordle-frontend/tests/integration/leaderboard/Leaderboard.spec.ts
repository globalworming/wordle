import {test} from '@playwright/test';
import givenDefaultHttpMock from "../../step/given/httpMocks/givenDefaultHttpMocks";
import openLeaderboard from "../../step/openLeaderboard";
import givenSignInSuccessful from "../../step/given/givenSignInSuccessful";

test.describe("Leaderboard",  async () => {

  test.describe("what we should see",  async () => {
    test.only('the full leaderboard', async ({ page }) => {
      await givenDefaultHttpMock(page)
      await givenSignInSuccessful(page)
      await openLeaderboard(page)
    });
  })
})