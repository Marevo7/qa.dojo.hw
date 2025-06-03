function compareNums(num1, num2) {
	if (num1 > num2) {
		return `${num1} is bigger than ${num2}`
	} else if (num1 < num2) {
		return `${num2} is bigger than ${num1}`
	} else if (num1 === num2) {
		return 'numbers are equal'
	}
}

console.log(compareNums(2, 2))
