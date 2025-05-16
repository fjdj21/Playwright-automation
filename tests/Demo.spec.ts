import { test, expect } from '@playwright/test';
// `test` - Defines an individual test case.
// `expect` - Provides assertion methods to validate expected outcomes in the test.

// Define a test case with the name "Launch the browser"
test('Launch the browser', async ({ page }) => {
    // The test function is asynchronous, which means it allows the use of `await`.
    // `page` is a built-in fixture provided by Playwright's test runner.
    // It represents a single tab or browser page where you can perform actions (navigate, click, type, etc.)

    await page.goto("https://google.com");
    // `goto()` navigates the browser to the specified URL.
    // Always use `await` before it to ensure the script waits for the page to load.

    const titleName = await page.title();
    // `page.title()` returns the title of the current page as a string.
    // We're using `await` to wait for the title to be retrieved before moving forward.
    // The result is stored in the variable `titleName`.

    console.log("Page Title:", titleName);
    // Print the title to the console so you can see it when you run the test.

    // Assertion: Verify that the page title is exactly "Google"
    expect(titleName).toBe("Google");
    // `expect().toBe()` checks if the actual title matches the expected string.
    // If the title is not "Google", the test will fail here with an error.
});