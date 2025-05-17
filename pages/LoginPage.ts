import {Page, Locator} from "@playwright/test";

export class LoginPage {
    // We need to put here the locators/elements that are used in the Login Page

    readonly page: Page;
    readonly username: Locator;
    readonly password: Locator;
    readonly loginButton: Locator;
    readonly hamburgerIcon: Locator;
    readonly logoutButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.username = page.getByPlaceholder('Username');
        this.password = page.locator('#password');
        this.loginButton = page.getByRole('button', {name : 'Login'});
        this.hamburgerIcon = page.getByRole('button', {name : 'Open Menu'})
        this.logoutButton = page.locator('#logout_sidebar_link')
    }

    async navigateToLoginPage() {
        await this.page.goto('/');
    }

    async login(username: string, password: string) {
        await this.username.fill(username);
        await this.password.fill(password);
        await this.loginButton.click();
    }

    async logout(){
        await this.hamburgerIcon.click();
        await this.logoutButton.click();
    }

    async standard_validCredentials() {
        await this.login(
            process.env.STANDARD_USER ?? '',
            process.env.PASSWORD ?? ''
        );
    }

    async lockedOutUser_validCredentials() {
        await this.login(
            process.env.LOCKED_OUT_USER ?? '',
            process.env.PASSWORD ?? ''
        );
    }

    async problemUser_validCredentials() {
        await this.login(
            process.env.PROBLEM_USER ?? '',
            process.env.PASSWORD ?? ''
        );          
    }

    async performanceGlitchUser_validCredentials() {
        await this.login(
            process.env.PERFORMANCE_GLITCH_USER ?? '',
            process.env.PASSWORD ?? ''
        );
    }

    async errorUser_validCredentials() {
        await this.login(
            process.env.ERROR_USER ?? '',
            process.env.PASSWORD ?? ''
        )
    }

    async visualUser_validCredentials() {
        await this.login(
            process.env.VISUAL_USER ?? '',
            process.env.PASSWORD ?? ''
        );
    }

    async user_invalidCredentials() {
        await this.login(
            process.env.INVALID_USERNAME ?? '',
            process.env.INVALID_PASSWORD ?? ''
        );
    }
}