import {Page} from "@playwright/test";

const SignInForm = {
    form: (page: Page) => page.locator('form'),
    nameInput: (page) => page.locator('#name'),
    passwordInput: (page) => page.locator('#password'),
}

export default SignInForm