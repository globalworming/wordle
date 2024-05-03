import {test} from "@playwright/test";
import goToApp from "../goToApp";
import {givenSignInSucceeds} from "./httpMocks/givenDefaultHttpMocks";


export default async page => {
    await test.step('sign in sucessfully', async () => {
        await goToApp(page)
        await givenSignInSucceeds(page)
        await page.locator('#name').fill('globalworming');
        await page.locator('#name').press('Tab');
        await page.locator('#password').fill('globalworming');
        await page.locator('#password').press('Enter');
    });
};