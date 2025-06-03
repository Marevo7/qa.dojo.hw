import { test, expect, Page, Locator } from "@playwright/test";
import { userData } from '../test-data/user-generator';
import { createArticle } from "../test-data/article-generator";

export async function signUp(page: Page) {
    const generatedUser = userData();
    const userNameInput: Locator = page.locator('input[placeholder="Username"]')
    const userPassword: Locator = page.locator('input[placeholder="Password"]')
    const userEmailInput: Locator = page.locator('input[placeholder="Email"]')
    const signUpButton: Locator = page.locator('button:has-text("Sign up")')

    await userNameInput.fill(generatedUser.firstName);
  await userEmailInput.fill(generatedUser.email);
  await userPassword.fill(generatedUser.password);
  await signUpButton.click();
} 

export async function createArticles(page: Page, count: number) {
    const generatedArticle = createArticle()
    const articleTitle: Locator = page.locator('input[data-qa-id="editor-title"]')
    const articleAboutInput: Locator = page.locator('input[data-qa-id="editor-description"]')
    const articleBody: Locator = page.locator('textarea[placeholder="Write your article (in markdown)"]')
    const articleTag: Locator = page.locator('input[data-qa-id="editor-tags"]')
    const articlePublishButton: Locator = page.locator('button[data-qa-id="editor-publish"]')

    for(let i: number = 1; i <= count; i++) {
        await page.locator('a[href="/editor"]').click()
        await articleTitle.fill(generatedArticle.title)
        await articleAboutInput.fill(generatedArticle.about)
        await articleBody.fill(generatedArticle.body)
        await articleTag.fill(generatedArticle.tag)
        await articlePublishButton.click()
    }
}
