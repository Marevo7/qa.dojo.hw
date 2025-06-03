import { test, expect } from '@playwright/test';

test.describe('AT-003 Create new article test', {tag: '@createArticle'}, () => {
test('Text-box page', async ({ page }) => { // rename test 
await page.goto('https://demoqa.com/text-box');
  await page.locator('//input[@id="userName"]').fill('FandyTest');
  await page.locator('//input[@id="userEmail"]').fill('fandy@test.com');
  await page.locator('//textarea[@id="currentAddress"]').fill('Kyiv');
  await page.locator('//textarea[@id="permanentAddress"]').fill('World');
  await page.locator('//button[@id="submit"]').click();
  await expect(page.locator('//p[@id="name"]')).toContainText('FandyTest');
  await expect(page.locator('//p[@id="email"]')).toContainText('fandy@test.com');
  await expect(page.locator('//p[@id="currentAddress"]')).toContainText('Kyiv');
  await expect(page.locator('//p[@id="permanentAddress"]')).toContainText('World');
});
test('Check box', async ({ page }) => {
await page.goto('https://demoqa.com/checkbox');
  await page.locator('//button[@title="Toggle"]').click();
  await page.locator('(//button[@title="Toggle"])[2]').click();
  await page.locator('//span[text()="Notes"]').click();
  await page.locator('//span[text()="Downloads"]').click();
  expect(
  await page.locator('//div[@id="result"]//span[@class="text-success"]').allTextContents()
).toEqual(['notes', 'downloads', 'wordFile', 'excelFile']);
  await page.locator('//button[@title="Collapse all"]').click();
});
test('Feed test', async ({ page }) => {
  await page.locator('a[href="/my-feed"]').click();
  await expect(page.locator('div.article-preview:has-text("No articles are here... yet.")')
).toBeVisible();
  await page.locator('a:has-text("Global Feed")').click();
  await expect(page.locator('div[data-qa-type="article-list"]')).toBeVisible();
});
})