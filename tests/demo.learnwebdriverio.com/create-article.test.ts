import { test, expect } from '@playwright/test';

test.describe('AT-002 Create new article test', {tag: '@createArticle'}, () => {
  test.beforeEach(async ({ page }) => {
await page.goto('https://demo.learnwebdriverio.com/login');
  await page.locator('input[placeholder="Email"]').fill('raymondtest@test.com');
  await page.locator('input[placeholder="Password"]').fill('qweasdzxc');
  await page.locator('button:has-text("Sign in")').click();
});
test('Should have elements visible on the main page', async ({ page }) => { // rename test 
  await expect(page.locator('a[href="/@raymondtest/"]:has-text("raymondtest")')).toBeVisible();
  await expect(page.locator('a[href="/"]:has-text(" Home ")')).toBeVisible();
  await expect(page.locator('a[href="/editor"]')).toBeVisible();
  await expect(page.locator('a[href="/settings"]')).toBeVisible();
});
test('Create new article ', async ({ page }) => {
  await page.locator('a[href="/editor"]').click();
  await page.locator('input[data-qa-id="editor-title"]').fill('testArticleRaymond');
  await page.locator('input[data-qa-id="editor-description"]').fill('About Raymond');
  await page.locator('textarea[placeholder="Write your article (in markdown)"]').fill('Check health of body');
  await page.locator('input[data-qa-id="editor-tags"]').fill('testTag');
  await page.locator('button[data-qa-id="editor-publish"]').click();
  await expect(page.locator('h1[data-qa-id="article-title"]')).toContainText('testArticleRaymond');
  // ask if it searches for text even in children, coz this text is in h1 - OK asked
  await expect(page.locator('div[data-qa-id="article-body"]')).toContainText('Check health of body');
});
test('Feed test', async ({ page }) => {
  await page.locator('a[href="/my-feed"]').click();
  await expect(page.locator('div.article-preview:has-text("No articles are here... yet.")')
).toBeVisible();
  await page.locator('a:has-text("Global Feed")').click();
  await expect(page.locator('div[data-qa-type="article-list"]')).toBeVisible();
});
})