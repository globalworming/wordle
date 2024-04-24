import {test} from "@playwright/test";

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
            json: [
                {
                    "name": "a",
                    "countryName": "Australia",
                    "totalTries": 0,
                    "successRate": 0
                },
                {
                    "name": "b",
                    "countryName": "Australia",
                    "totalTries": 0,
                    "successRate": 0
                },
                {
                    "name": "c",
                    "countryName": "Australia",
                    "totalTries": 0,
                    "successRate": 0
                },
                {
                    "name": "d",
                    "countryName": "Australia",
                    "totalTries": 0,
                    "successRate": 0
                },
                {
                    "name": "e",
                    "countryName": "Australia",
                    "totalTries": 0,
                    "successRate": 0
                },
                {
                    "name": "f",
                    "countryName": "Australia",
                    "totalTries": 0,
                    "successRate": 0
                },
                {
                    "name": "g",
                    "countryName": "Australia",
                    "totalTries": 0,
                    "successRate": 0
                },
                {
                    "name": "h",
                    "countryName": "Australia",
                    "totalTries": 0,
                    "successRate": 0
                },
                {
                    "name": "i",
                    "countryName": "Australia",
                    "totalTries": 0,
                    "successRate": 0
                },
                {
                    "name": "j",
                    "countryName": "Australia",
                    "totalTries": 0,
                    "successRate": 0
                },
                {
                    "name": "k",
                    "countryName": "Australia",
                    "totalTries": 0,
                    "successRate": 0
                },
            ]
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