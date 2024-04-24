import {Page} from "@playwright/test";

export default function (page: Page) {
    return page.locator('form');
}
