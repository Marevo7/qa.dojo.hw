import { test, expect, Page, Locator } from '@playwright/test';
import { signUp, createArticles } from './custom-commands';
test.describe('Should have elements visible on the main page', { tag: '@create-article' }, () => {
      test.beforeEach(async ({ page }) => {
  await page.goto('https://demo.learnwebdriverio.com/register');
})
    test('AQA-001 Create user', {tag:['@create-user', '@create-article']}, async ({page}) => {
        const ARTICLES_COUNT = 3
        const userProfileButton: Locator = page.locator('ul[data-qa-id="site-nav"] > li:last-child')
        const myArticles: Locator = page.locator('.article-preview')
        await signUp(page)
        await createArticles(page, ARTICLES_COUNT)
        await page.waitForURL('**/articles/*')
        await userProfileButton.click()
        await expect(myArticles).toHaveCount(ARTICLES_COUNT)
       


    })
 })

