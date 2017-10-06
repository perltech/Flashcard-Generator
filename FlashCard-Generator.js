let BasicCard = require('./BasicCard');
let operation = process.argv[2];
let cardSide = process.argv[3];

let firstPresident = new BasicCard(
	"Who was the first president of the United States?",
	"George Washington"
);

let secondPresident = new BasicCard(
	"Who was the second president of the United States?",
	"John Adams"
);

let thirdPresident = new BasicCard(
	"Who was the third president of the United States?",
	"Thomas Jefferson"
);

let fourthPresident = new BasicCard(
	"Who was the fourth president of the United States?",
	"James Madison"
);

let fifthPresident = new BasicCard(
	"Who was the fifth president of the United States?",
	"James Monroe"
);

switch(operation) {
	case '1':
		//firstPresident
		if(cardSide === 'front'){
			console.log(firstPresident.front);
		} else {
			console.log(firstPresident.back);
		}
		break;

	case '2':
		//secondPresident
		if(cardSide === 'front'){
			console.log(secondPresident.front);
		} else {
			console.log(secondPresident.back);
		}
		break;

	case '3':
		//thirdPresident
		if(cardSide === 'front'){
			console.log(thirdPresident.front);
		} else {
			console.log(thirdPresident.back);
		}
		break;

	case '4':
		//fourthPresident
		if(cardSide === 'front'){
			console.log(fourthPresident.front);
		} else {
			console.log(fourthPresident.back);
		}
		break;

	case '5':
		//fifthPresident
		if(cardSide === 'front'){
			console.log(fifthPresident.front);
		} else {
			console.log(fifthPresident.back);
		}
		break;

	default:
		console.log('please enter a number(1-5) and then front or back to see the flashcard')
		break;
}




