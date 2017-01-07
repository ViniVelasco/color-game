 var numSquares = 6;
 var colors = [];
 var pickedColor;
  var squares = document.querySelectorAll(".square");
 var colorDisplay = document.getElementById("colorDisplay");
 var messageDisplay = document.querySelector("#message");
 var h1 = document.querySelector("h1");
 var resetButton = document.querySelector("#reset"); //select only one
 var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
	setUpModeButtons(); //add mode buttons listeners
 	setUpSquares();
 	reset(); //reset the screen and run reset function and generate colors
 }

function setUpSquares(){
	for(var i = 0; i < squares.length; i++){
 	//add click listeners to squares
 	squares[i].addEventListener("click", function(){
 		//grab color of clicked square
 		var clickedColor = this.style.background;
 		//compare color to pickedColor
 		if(clickedColor === pickedColor){
 			messageDisplay.textContent = "Correct!";
 			resetButton.textContent = "Play Again?";
 			changeColors(clickedColor);
 			h1.style.background = clickedColor;
 		} else {
 			messageDisplay.textContent = "Try Again"
 			this.style.background = "#232323";
 		}
 	});
 }
}

function setUpModeButtons(){
	for(var i = 0; i < modeButtons.length; i++){
 	modeButtons[i].addEventListener("click", function(){
 		modeButtons[0].classList.remove("selected");
 		modeButtons[1].classList.remove("selected");
 		this.classList.add("selected");
 		//this.textContent === "Easy" ? numSquares = 3 : numSquares = 6; //Ternary condition. If textContent == Easy, then, numSquares = 3 otherwise numsquare = 6;
 		if(this.textContent === "Easy"){
 			numSquares = 3;
 		} else {
 			numSquares = 6;
 		}

 		reset();
 		//figure out how many squares to show
 		//pick new colors
 		//pick a new pickedColor
 		//update page to reflect changes
 	});
	}
}

 

 function reset(){
 	//generate all new colors
 	colors = generateRandomColors(numSquares);
 	//pick a new random color from array
 	pickedColor = pickColor();
 	//change colorDisplay to mach picke color
 	colorDisplay.textContent = pickedColor;
 	resetButton.textContent = "New Colors";
 	messageDisplay.textContent = "";
 	//change colors of square
 	for(var i = 0; i < squares.length; i++){
 		if(colors[i]){
 			squares[i].style.display = "block"; //bring then back
 			squares[i].style.background = colors[i];
 		} else { //colors[i] undefined (false)
 			squares[i].style.display = "none";
 		}
 		squares[i].style.background = colors[i];
 	}
 	h1.style.background = "steelblue";
 }

/* easyBtn.addEventListener("click", function(){
 	easyBtn.classList.add("selected");
 	hardBtn.classList.remove("selected");
 	numSquares = 3;
 	colors = generateRandomColors(numSquares);
 	pickedColor = pickColor();

 	colorDisplay.textContent = pickedColor;
 	for(var i = 0; i < squares.length; i++){
 		if(colors[i]){ //first tree items (colors only have 3 items);
 			squares[i].style.background = colors[i];
 		} else {
 			squares[i].style.display = "none";
 		}
 	}
 });

 hardBtn.addEventListener("click", function(){
 	easyBtn.classList.remove("selected");
 	hardBtn.classList.add("selected");
 	numSquares = 6;
 	colors = generateRandomColors(numSquares);
 	pickedColor = pickColor();

 	colorDisplay.textContent = pickedColor;
 	for(var i = 0; i < squares.length; i++){
 			squares[i].style.background = colors[i];
 			squares[i].style.display = "block";
 	}
 });*/

 resetButton.addEventListener("click", function(){
 	reset();
 });

 function changeColors(color){
 	for(i = 0; i < squares.length; i++){
 		squares[i].style.background = color;
 	}
 }

function pickColor() {
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num){
	//Make an array
	var arr = [];
	//add num random colors to array
	for(var i = 0; i < num; i++){
		//get random color and push into arr
		arr.push(randomColor());
	}
	//return the array
	return arr;
}	

function randomColor(){
	//pick a "red", "green", "blue" from 0 - 255
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	var rgb = "rgb(" + r + ", " + g  + ", " + b + ")";
	return rgb;
}