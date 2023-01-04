let audioTurn = new Audio("Music/your turn.wav");
let isGameOver = false;
// function for change the turn
turn = "X";
const changeTurn = () => {
	return turn === "X" ? "O" : "X";
};

// Function to check Win
const checkWin = () => {
	document.querySelector('.info').innerHTML = `Turn for    ` + turn;
	let boxText = document.getElementsByClassName("boxtext");
	let wins = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6],
	];
	// let x = document.getElementById("a").firstElementChild.getAttribute('data-value');
	wins.forEach(e => {
		if (boxText[e[0]].childElementCount > 0 && boxText[e[1]].childElementCount > 0
			&& boxText[e[2]].childElementCount > 0 &&
			boxText[e[0]].firstElementChild.getAttribute('data-value')
			=== boxText[e[1]].firstElementChild.getAttribute('data-value')
			&& boxText[e[1]].firstElementChild.getAttribute('data-value')
			=== boxText[e[2]].firstElementChild.getAttribute('data-value')) {
			isGameOver = true;
			let ans = (turn === "X" ? "O" : "X");
			document.querySelector('.info').innerHTML = ans + "   WON The Game";
		}
	})
};


// Game Reset Function
const gameReset = () => {
	let boxes = document.getElementsByClassName("box");
	Array.from(boxes).forEach((element) => {
		let boxText = element.querySelector(".boxtext");
		if (boxText.hasChildNodes()) {
			boxText.removeChild(boxText.firstElementChild);
		}
	});

	turn = "X";
	isGameOver = false;
	document.querySelector('.info').innerHTML = `Turn for    ` + turn;
	document.getElementById("gameOverText").innerHTML = "";
}


// Game Logic
let boxes = document.getElementsByClassName("box");

Array.from(boxes).forEach((element) => {
	let boxText = element.querySelector(".boxtext");
	element.addEventListener("click", () => {
		if (isGameOver == false && boxText.childElementCount == 0) {
			// console.log("HI");
			if (turn === "X") {
				boxText.innerHTML = '<i data-value = "1" class="fa-solid fa-x"></i>';
			} else {
				boxText.innerHTML = '<i data-value = "0" class="fa-regular fa-circle"></i>';
			}
			audioTurn.play();
			turn = changeTurn();
			checkWin();
		}
		else if (isGameOver == true) {
			document.getElementById("gameOverText").innerHTML = "GAME OVER !Plx Reset it"
		}
	});
});
