class User {
	constructor(name, age) {
		this.name = name
		this.age = age
	}
	sayHello() {
		return `Hello, my name is ${this.name}`
	}

	isAdult() {
		return this.age >= 18
	}
}

const user = new User('Катя', 18)

console.log(user.sayHello())
console.log(user.isAdult())
