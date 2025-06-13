import { Locator, Page } from '@playwright/test'

export class HomePage {
	globalFeed: Locator
	yourFeed: Locator
	tag: Locator

	constructor(page: Page, tagName: string) {
		this.globalFeed = page.getByText('Global Feed')
		this.yourFeed = page.getByText('Your Feed')
		this.tag = page.locator(`a[href="/tag/${tagName}"]`)
	}

	async openFirstArticle(page: Page) {
		await page.locator('h1[data-qa-type="preview-title"]').first().click()
	}
}
