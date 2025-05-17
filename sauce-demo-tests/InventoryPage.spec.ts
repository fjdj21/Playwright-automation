import { test, expect } from "@playwright/test";
import { InventoryPage } from "../pages/InventoryPage";

test.describe('Inventory Page Tests', () => {
    let inventoryPage: InventoryPage;

    test.beforeEach(async ({ page }) => {
        inventoryPage = new InventoryPage(page);
    });

    test('should navigate to inventory page', async () => {
        await inventoryPage.navigateToInventoryPage();
        // Add your assertions here
    });
});
