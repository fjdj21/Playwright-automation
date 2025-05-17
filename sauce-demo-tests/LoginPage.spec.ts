import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";

test.describe('Base Page', () => {
    test('Navigate to Login Page', async ({page}) => {
        const loginPage = new LoginPage(page);

        await loginPage.navigateToLoginPage();

        await expect(page).toHaveURL('/');
    });
});

test.describe('Valid User Credentials', () => {
    test('Standard User Valid Credentials', async ({page}) => {
        const loginPage = new LoginPage(page);
        const productTitle = page.getByText('Products', {exact : true})
        
        // navigate to page
        await loginPage.navigateToLoginPage();
        // input login credentials
        await loginPage.standard_validCredentials();

        await expect(page).toHaveURL('/inventory.html');
        await expect(productTitle).toBeVisible();
    });

    test('Locked Out User Credentials', async ({page}) => {
        const loginPage = new LoginPage(page);
        const usernameErrorIcon = page.locator('#user-name + svg.error_icon');
        const passwordErrorIcon = page.locator('#password + svg.error_icon');
        const errorText = page.getByText('Epic sadface: Sorry, this user has been locked out.', {exact : true})

        // navigate to page
        await loginPage.navigateToLoginPage();
        // input login credentials
        await loginPage.lockedOutUser_validCredentials();

        await expect(page).toHaveURL('/inventory.html'); // still base page when user login invalid credentials
        await expect(usernameErrorIcon).toBeVisible();
        await expect(passwordErrorIcon).toBeVisible();
        await expect(errorText).toBeVisible();
        
    })

    test('Problem User Credentials', async ({page}) => {
        const loginPage = new LoginPage(page);
        const productTitle = page.getByText('Products', {exact : true})
        
        // navigate to page
        await loginPage.navigateToLoginPage();
        // input login credentials
        await loginPage.problemUser_validCredentials();

        await expect(page).toHaveURL(process.env.INVENTORY_URL ?? '');
        await expect(productTitle).toBeVisible();
    });
});

test.describe('Logging Out User', () => {
    test('Logout logged in User', async ({page}) => {
        const loginPage = new LoginPage(page);

        // navigate to page
        await loginPage.navigateToLoginPage();
        // input login credentials
        await loginPage.standard_validCredentials();
        // logout
        await loginPage.logout();

        await expect(page).toHaveURL('/');
    });
});

test.describe('Invalid User Credentials', () => {
    test('Login with Invalid User Credentials', async ({page}) => {
        const loginPage = new LoginPage(page);
        const usernameErrorIcon = page.locator('#user-name + svg.error_icon');
        const passwordErrorIcon = page.locator('#password + svg.error_icon');
        const errorText = page.getByText('Epic sadface: Username and password do not match any user in this service', {exact : true});
        
        // navigate to page
        await loginPage.navigateToLoginPage();
        // input login credentials
        await loginPage.user_invalidCredentials();

        await expect(page).toHaveURL('/'); // still base page when user login invalid credentials
        await expect(usernameErrorIcon).toBeVisible();
        await expect(passwordErrorIcon).toBeVisible();
        await expect(errorText).toBeVisible();


    });
});
