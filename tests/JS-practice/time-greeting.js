function timeGreeting(time) {
	if (time < 12) {
		return 'Good morning'
	} else if (time >= 12 && time < 18) {
		return 'Good afternoon'
	} else if (time <= 18) {
		return 'Good evening'
	}
}

console.log(timeGreeting(11, 9))
