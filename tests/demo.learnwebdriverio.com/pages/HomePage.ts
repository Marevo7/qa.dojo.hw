import { Locator, Page } from '@playwright/test'

export class HomePage {
	page: Page
	globalFeed: Locator
	yourFeed: Locator
	private getTagLocator = (tagName: string): Locator =>
		this.page.locator(`a[href="/tag/${tagName}"]`)

	constructor(page: Page) {
		this.page = page
		this.globalFeed = page.getByText('Global Feed')
		this.yourFeed = page.getByText('Your Feed')
	}
	async openFirstArticle() {
		await this.page.locator('h1[data-qa-type="preview-title"]').first().click()
	}

	async clickTag(tagName: string) {
		await this.getTagLocator(tagName).click()
	}
}
