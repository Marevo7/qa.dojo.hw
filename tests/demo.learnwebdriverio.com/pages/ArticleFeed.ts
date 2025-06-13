import { Locator, Page } from '@playwright/test'

export class ArticleFeed {
	tag: Locator
	title: Locator
	author: Locator
	body: Locator

	constructor(page: Page, tagName: string) {
		this.tag = page.locator(`a[href="/tag/${tagName}"]`)
		this.title = page.locator('h1[data-qa-id="article-title"]')
		this.author = page.locator('a[data-qa-type="author-name"]').first()
		this.body = page.locator('div[data-qa-id="article-body"]')
	}
}
