import test, { expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("http://localhost:3001/login");
});

test.describe("Login", () => {
  test("should appear the page title", async ({ page }) => {
    const pageTitle = page.getByTestId("login-title");
    await expect(pageTitle).toHaveText("Login");
    await expect(pageTitle).toBeVisible();
  });

  test("should appear the login form", async ({ page }) => {
    const emailField = page.getByTestId("email-input");
    const passwordField = page.getByTestId("password-input");
    const loginBtn = page.getByTestId("login-btn");
    await expect(emailField).toBeVisible();
    await expect(passwordField).toBeVisible();
    await expect(loginBtn).toBeVisible();
  });

  test("should be fields required", async ({ page }) => {
    const emailField = page.getByTestId("email-input");
    const passwordField = page.getByTestId("password-input");
    const loginBtn = page.getByTestId("login-btn");
    await emailField.click();
    await passwordField.click();
    await emailField.click();
    await sleep(100);
    const emailError = page.getByTestId("email-error");
    const passwordError = page.getByTestId("password-error");
    await expect(emailError).toBeVisible();
    await expect(emailError).toHaveText("Required");
    await expect(passwordError).toBeVisible();
    await expect(passwordError).toHaveText("Required");
    await expect(emailField).toHaveAttribute("aria-invalid", "true");
    await expect(passwordField).toHaveAttribute("aria-invalid", "true");
    await expect(loginBtn).toBeDisabled();
  });

  test("should be email valid", async ({ page }) => {
    const emailField = page.getByTestId("email-input");
    const passwordField = page.getByTestId("password-input");
    const loginBtn = page.getByTestId("login-btn");
    await emailField.fill("test");
    await passwordField.click();
    await sleep(100);
    const emailError = page.getByTestId("email-error");
    await expect(emailError).toBeVisible();
    await expect(emailError).toHaveText("Invalid email");
    await expect(emailField).toHaveAttribute("aria-invalid", "true");
    await expect(loginBtn).toBeDisabled();
  });

  test("should be password valid", async ({ page }) => {
    const emailField = page.getByTestId("email-input");
    const passwordField = page.getByTestId("password-input");
    const loginBtn = page.getByTestId("login-btn");
    await passwordField.fill("test");
    await emailField.click();
    await sleep(100);
    const passwordError = page.getByTestId("password-error");
    await expect(passwordError).toBeVisible();
    await expect(passwordError).toHaveText(
      "String must contain at least 8 character(s)"
    );
    await expect(passwordField).toHaveAttribute("aria-invalid", "true");
    await expect(loginBtn).toBeDisabled();
  });
});

test("should login fail", async ({ page }) => {
  const emailField = page.getByTestId("email-input");
  const passwordField = page.getByTestId("password-input");
  const loginBtn = page.getByTestId("login-btn");
  const globalError = page.getByTestId("global-error");
  await emailField.fill("Jpj2Z@example.com");
  await passwordField.fill("12345678");
  await loginBtn.click();
  await expect(globalError).toBeVisible();
});

test("should be login success", async ({ page }) => {
  const emailField = page.getByTestId("email-input");
  const passwordField = page.getByTestId("password-input");
  const loginBtn = page.getByTestId("login-btn");
  await emailField.fill("admin@test.it");
  await passwordField.fill("12345678");
  await loginBtn.click();
  await expect(page).toHaveURL("http://localhost:3001/posts");
});

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
