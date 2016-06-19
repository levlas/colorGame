var colors = generateRandomColors(6);

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");

colorDisplay.textContent = pickedColor;

for(var i = 0; i < squares.length; i++) {
	// add initial colors
	squares[i].style.background = colors[i];

	// add click listeners
	squares[i].addEventListener("click", function(){
		var clickedColor = this.style.background;
		console.log(pickedColor);
		if(clickedColor === pickedColor) {
			messageDisplay.textContent = "Correct!";
			changeColor(clickedColor);
		} else {
			this.style.background = "#232323";
			messageDisplay.textContent = "Try Again";
		}
	});
}

function changeColor(color){
	for(var i = 0; i < squares.length; i++){
		squares[i].style.background = color;
	}
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num) {
	var arr = [];
	for(var i = 0; ;) {

	}
	return arr;	
}