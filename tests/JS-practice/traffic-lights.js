function trafficLightAction(color) {
	const allowedColors = ['green', 'yellow', 'red']

	if (!allowedColors.includes(color)) {
		throw new Error("Use only 'green', 'yellow' или 'red'.")
	}
	return color === 'green' ? 'Go' : color === 'yellow' ? 'Wait' : 'Stop'
}
