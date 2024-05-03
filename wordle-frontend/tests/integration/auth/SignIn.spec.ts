import {expect, test} from '@playwright/test';
import goToApp from "../../step/goToApp";
import givenDefaultHttpMock, {
    givenSignFailsBecauseTokenExpired
} from "../../step/given/httpMocks/givenDefaultHttpMocks";
import signIn from "../../step/signIn";
import SignInForm from "../../page/signing";

async function ensureTheErrorAlertIsShown(page: Page) {
    await expect(page.getByRole('alert')).toBeVisible();
}

test.describe("Sign In", async () => {

    test.beforeEach(async ({ page }) => {
        await goToApp(page);
    });

    test.describe("what we should see", async () => {
        test('that we see the signin form', async ({page}) => {
            await test.step("then should see signin form", async () => {
                await expect(SignInForm.form(page)).toBeVisible();
            })
        });

        test('that we are on the signin url', async ({page}) => {
            await expect(page).toHaveURL(/\/signin/);
        });
    })

    test.describe("where we sign in successfully", async () => {
        test('that we see the game', async ({page}) => {
            await givenDefaultHttpMock(page)
            await signIn(page, 'globalworming', 'globalworming');
            await expect(page.getByText("Let's Play Reactle")).toBeVisible();
        });
    })

    test.describe("where sign in fails", async () => {
        test('that we see an error', async ({page}) => {
            await givenSignFailsBecauseTokenExpired(page)
            await signIn(page, 'token', 'token')
            await ensureTheErrorAlertIsShown(page);
        });
    })
})