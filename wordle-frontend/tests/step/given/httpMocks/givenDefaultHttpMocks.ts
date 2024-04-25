import {test} from "@playwright/test";
import fullLeaderboardBody from './body/fullLeaderboardBody.json' assert { type: 'json' }

export async function givenSignInSucceeds(page) {
    await page.route('**/api/auth/login', async route => {
        if (route.request().postData() === '{"username":"globalworming","password":"globalworming"}') {
            await route.fulfill({
                json: {
                    "accessToken": "eyJhbGciOiJIUzI1NiJ9.eyJleHAiOjI3MTQwNDk4MjN9.MO464P_SyAJDK_henMlp134PKx5d3p9JQpcmYBBGTqI"
                }
            });
        } else
            await route.continue();
    });
}

export async function givenSignFailsBecauseTokenExpired(page) {
    await page.route('**/api/auth/login', async route => {
        if (route.request().postData() === '{"username":"token","password":"token"}') {
            await route.fulfill({
                json: {
                    "accessToken": "eyJhbGciOiJIUzI1NiJ9.eyJleHAiOjcxNDA0OTgyM30.dYdn-jp6BAvzDtRjvQEPep93srrdnRID0T-JxT6L88Q"
                }
            });
        } else
            await route.continue();
    });
}

async function givenCreateFirstGameSucceeds(page) {
    await page.route('**/api/game', async route => {
        await route.fulfill({
            body: "1"
        });
    });
}

async function givenFullLeaderboard(page) {
    await page.route('**/api/game/leaderboard?size=10', async route => {
        await route.fulfill({
            json: fullLeaderboardBody
        });
    });
}

export default  async page => {
    await test.step('setup default mock webserver', async () => {
        await givenSignInSucceeds(page);
        await givenCreateFirstGameSucceeds(page);
        await givenFullLeaderboard(page);
    });
};