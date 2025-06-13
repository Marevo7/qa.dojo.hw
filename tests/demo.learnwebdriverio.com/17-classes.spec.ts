import { test, expect, Page } from '@playwright/test'
import { SignUpPage } from './pages/SignUpPage'
import { HomePage } from './pages/HomePage'
import { ArticleFeed } from './pages/ArticleFeed'
import { faker } from '@faker-js/faker'

test('Should display article sorted by tag', async ({ page }) => {
	const randomUserName = faker.person.firstName()
	const randomEmail = faker.internet.email()
	const randomPassword = faker.internet.password()
	const tagName = 'dojo'
	const signUpPage = new SignUpPage(page)
	const homePage = new HomePage(page, tagName)
	const articleFeed = new ArticleFeed(page, tagName)
	await page.goto('https://demo.learnwebdriverio.com/register')
	await signUpPage.signUp(randomUserName, randomEmail, randomPassword)
	await homePage.yourFeed.click()
	await homePage.globalFeed.click()
	await homePage.tag.click()
	await homePage.openFirstArticle(page)
	const articleElements = [
		articleFeed.author,
		articleFeed.body,
		articleFeed.tag,
		articleFeed.title,
	]
	for (const element of articleElements) {
		await expect(element).toBeVisible()
	}
})
