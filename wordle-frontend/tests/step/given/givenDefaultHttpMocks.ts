import {test} from "@playwright/test";

async function givenSignInSucceeds(page) {
    await page.route('**/auth/login', async route => {
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
    await page.route('**/auth/login', async route => {
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

const givenDefaultHttpMock = async page => {
    await test.step('setup default mock webserver', async () => {
        await givenSignInSucceeds(page);
    });
};

export default givenDefaultHttpMock