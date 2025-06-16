import { faker } from '@faker-js/faker'
export class UserData {
	userName = faker.person.firstName()
	email = faker.internet.email()
	password = faker.internet.password()
}
