import test, { expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("http://localhost:3001/login");
});

test.describe("Login", () => {
  test("should appear the login form", async ({ page }) => {
    const emailField = page.getByTestId("email-input");
    const passwordField = page.getByTestId("password-input");
    const loginBtn = page.getByTestId("login-btn");
    await expect(emailField).toBeVisible();
    await expect(passwordField).toBeVisible();
    await expect(loginBtn).toBeVisible();
  });
});
