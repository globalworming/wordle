import {test} from "@playwright/test";
import goToApp from "../goToApp";
import {givenSignInSucceeds} from "./givenDefaultHttpMocks";


export default async page => {
    await test.step('sign in sucessfully', async () => {
        await goToApp(page)
        await givenSignInSucceeds(page)
        await page.locator('#name').fill('globalworming');
        await page.locator('#name').press('Tab');
        await page.locator('#password').fill('globalworming');
        await page.locator('#password').press('Enter');

        await test.step('click close on "how to play"', async () => {
            await page.getByRole('heading', {name: 'How to play'}).waitFor({timeout: 5000})
            await page.getByRole('button').click();
        });
    });
};