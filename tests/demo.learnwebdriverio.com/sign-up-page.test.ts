import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker'

test.describe('AT-001 Sign up page tests', {tag: '@signUpPage'}, () => {
  test.beforeEach(async ({ page }) => {
  await page.goto('https://demo.learnwebdriverio.com/register');
})
  test('Input fields should be visible', async ({ page }) => {
  await expect(page.locator('input[placeholder="Username"]')).toBeVisible();
  await expect(page.locator('input[placeholder="Email"]')).toBeVisible();
  await expect(page.locator('input[placeholder="Password"]')).toBeVisible();;
});
  test("'Have an account?' leads to correct URL", async ({ page }) => {
    await page.locator('a[href="/login"]:has-text("Have an account?")').click(); // better by playwright
    await expect(page).toHaveURL('https://demo.learnwebdriverio.com/login');
  });
  test('Successful sign up', async ({ page }) => {
  const responsePromise = page.waitForResponse('https://conduit-api.learnwebdriverio.com/api/users');
  //const response = await responsePromise;
  const randomFirstName = faker.person.firstName();
  const randomEmail = faker.internet.email();
  const password = faker.internet.password();
  await page.locator('input[placeholder="Username"]').fill(randomFirstName);
  await page.locator('input[placeholder="Email"]').fill(randomEmail);
  await page.locator('input[placeholder="Password"]').fill(password);
  await page.locator('button:has-text("Sign up")').click();
  const response = await responsePromise;
  expect(response.status()).toBe(200)
});
test('Validate fields', async ({ page }) => {
  await page.locator('input[placeholder="Username"]').fill('asd-asd');
  await page.locator('input[placeholder="Email"]').fill('testcheck');
  await page.locator('input[placeholder="Password"]').fill('0000');
  await page.locator('button:has-text("Sign up")').click();
  await expect(page.locator('li:has-text("username is invalid")')).toBeVisible();
  await expect(page.locator('li:has-text("email is invalid")')).toBeVisible();
});
})