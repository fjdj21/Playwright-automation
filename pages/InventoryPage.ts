import { Page, Locator } from "@playwright/test";
import { LoginPage } from "./LoginPage";

export class InventoryPage extends LoginPage {

    //locators
    readonly page: Page;
    readonly inventoryTitle: Locator;
    readonly inventoryUrl: string;
    readonly hamburgerIcon: Locator;
    readonly bmItemList: Locator;
    readonly inventory_sidebar_link: Locator;
    readonly about_sidebar_link: Locator;
    readonly logout_sidebar_link: Locator;
    readonly reset_sidebar_link: Locator;

    constructor(page: Page) {
        super(page);
        this.page = page;
        this.inventoryTitle = page.getByText('Products', {exact : true});
        this.inventoryUrl = process.env.INVENTORY_URL ?? '';
        this.hamburgerIcon = page.getByRole('button', {name : 'Open Menu'});
        this.bmItemList = page.locator('nav.bm-item-list')
        this.inventory_sidebar_link = page.getByRole('link', {name : 'Inventory'});
        this.about_sidebar_link = page.getByRole('link', {name : 'About'});
        this.logout_sidebar_link = page.getByRole('link', {name : 'Logout'});
        this.reset_sidebar_link = page.getByRole('link', {name : 'Reset App State'});
    }

    async navigateToInventoryPage() {
        await this.page.goto(this.inventoryUrl);
    }
    
}