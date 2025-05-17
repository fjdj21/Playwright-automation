import { test, expect } from '@playwright/test';
import { Selenium_Locators } from '../pom_practice/Locators';

//create testblock
test.skip('Locators Practice', async ({page}) => {
    const sl = new Selenium_Locators(page);

    // create const locator
    const searchBox = page.getByRole('searchbox', {name : 'Search Amazon'});
    const searchButton = page.getByRole('button', {name : 'Go', exact : true});
    const customerService = page.getByText('Customer Service', {exact : true});
    const dismiss = page.getByText('Dismiss', {exact : true});

    // Action
    await page.goto(sl.amazonURL);
    // await searchBox.fill('Laptop');
    // await searchButton.click()
    await dismiss.click({force: true});
    // await customerService.click();
    // await page.waitForTimeout(5000);
    // await page.locator(".nav-input.nav-progressive-attribute").nth(0).fill("book");
    // since there are two matching class name, we use .nth(0) to select the first one

    // sample xpath locator

    await page.locator("//input[@id='twotabsearchtextbox']").fill("book");
    await page.locator("//a[text()='Prime Video']").click();
    await page.waitForTimeout(5000)

    // Assertion
    
})

test.skip('Navigate to Selenium Practice Form', async ({page}) => {
    const sl = new Selenium_Locators(page);

    await sl.navigateToSeleniumPracticeForm();
    
    await expect(page).toHaveURL(sl.seleniumURL);
})

test.skip('Selenium - Locators Practice', async ({page}) => {
    const sl = new Selenium_Locators(page);
    // Navigate to URL
    await sl.navigateToSeleniumPracticeForm();

    const fieldsToCheck = [
        sl.titleName,
        sl.formName,
        sl.labelName,
        sl.inputName,
        sl.labelEmail,
        sl.inputEmail,
        sl.labelGender,
        sl.labelGenderMale,
        sl.maleRadioButton,
        sl.labelGenderFemale,
        sl.femaleRadioButton,
        sl.labelGenderOther,
        sl.otherRadioButton,
        sl.labelMobile,
        sl.inputMobile,
        sl.labelDateOfBirth,
        sl.inputDateOfBirth,
        sl.labelSubjects,
        sl.inputSubjects,
        sl.labelHobbies,
        sl.labelHobbiesSports,
        sl.labelHobbiesReading,
        sl.labelHobbiesMusic,
        sl.inputHobbiesSports,
        sl.inputHobbiesReading,
        sl.inputHobbiesMusic,
        sl.labelPicture,
        sl.inputPicture,
        sl.labelAddress,
        sl.inputAddress,
        sl.labelStateAndCity,
        sl.chooseStateDropdown,
        sl.chooseCityDropdown
      ];

    for (const field of fieldsToCheck) {
        await expect(field).toBeVisible();
      }

})

test.skip('Fill out Selenium form', async ({ page }) => {
    const sl = new Selenium_Locators(page);
    await sl.navigateToSeleniumPracticeForm();

    await sl.fillStudentForm({
        name: 'John Doe',
        email: 'john.doe@example.com',
        gender: 'Male',
        mobile: '1234567890',
        dob: '1990-01-01',
        subject: 'Math',
        hobbies: ['Sports', 'Reading', 'Music'],
        picturePath: './attachments/AnimeGuy_Smoking.png',
        address: '123 Main St',
        state: 'NCR',
        city: 'Agra'
    });

    await expect(page).toHaveURL(sl.seleniumURL);
});

test('sauce-demo-v1', async ({page}) => {
    await page.goto('https://www.saucedemo.com/')
    await page.locator('input[name="user-name"]').fill('standard_user')
    await page.locator('input[type="password"]').fill('secret_sauce')
    await page.locator(".btn_action").click()

    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html')
    await page.waitForTimeout(5000)
})