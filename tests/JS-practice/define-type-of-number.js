function checkNumberType(number) {
	if (number > 0) {
		return 'The number is positive'
	} else if (number < 0) {
		return 'The number is negative'
	} else {
		return 'The number is 0'
	}
}
console.log(checkNumberType())
