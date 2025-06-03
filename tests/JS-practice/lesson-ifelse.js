if (true) {
	console.log('Hello, World!')
} else {
	console.log('Goodbye, World!')
}

const temperature = 10

if (temperature >= 10) {
	console.log('піду без колготів')
} else {
	console.log('вдяну колготи')
}

const myAge = 21

if (myAge >= 21) {
	console.log('selling alco')
} else {
	console.log('not selling alco')
}

const enteredText = 'Some text'
if (enteredText.length > 0) {
	console.log('Text is not empty')
} else {
	console.log('Please fill this field')
}

const date = 'Mon 26'
const time = '19:30'
const room = 'blue'
const title = 'Stitch'

if ((date === 'Mon 26' && time === '19:30') || room === 'red') {
	console.log('You can enter')
}

function movieController(date, time, room, title) {
	if ((date === 'Mon 26' && time === '19:30') || room === 'red') {
		console.log('You can enter')
	} else {
		console.log('You cannot enter')
	}
}

movieController('Mon 26', '19:30', 'blue', 'Stitch')
