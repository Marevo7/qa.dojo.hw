import { Locator, Page } from '@playwright/test'

export class SignUpPage {
	usernameInput: Locator
	emailInput: Locator
	passwordInput: Locator
	page: Page

	constructor(page: Page) {
		this.page = page
		this.usernameInput = page.getByRole('textbox', { name: 'Username' })
		this.emailInput = page.getByRole('textbox', { name: 'Email' })
		this.passwordInput = page.getByRole('textbox', { name: 'Password' })
	}

	async signUp(username: string, email: string, password: string) {
		await this.usernameInput.fill(username)
		await this.emailInput.fill(email)
		await this.passwordInput.fill(password)
		await this.page.getByRole('button', { name: 'Sign up' }).click()
	}
}
