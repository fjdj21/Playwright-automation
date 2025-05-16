import { test, expect } from '@playwright/test';

//create testblock
test('Locators Practice', async ({page}) => {
    await page.goto("https://www.amazon.com/")

    // Locator
    await page.getByRole('searchbox').fill('Laptop');
    await page.getByRole('button', {name : 'Go', exact : true}).click()
    await page.waitForTimeout(5000)

    //Assertion
    
})