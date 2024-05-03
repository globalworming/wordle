import {Page, test} from "@playwright/test";
import SignInForm from "../page/signing";

export default async (page: Page, username: string, password: string) => {
    await test.step(`sign in using ${username} ${password}`, async () => {

        await test.step(`fill in username`, async () => {
            await SignInForm.nameInput(page).fill(username);
            await SignInForm.nameInput(page).press('Tab');
        })
        await SignInForm.passwordInput(page).fill(password);
        await SignInForm.passwordInput(page).press('Enter');
    })
};