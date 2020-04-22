var message =document.querySelector("#message");
var squares = document.querySelectorAll(".square");
var h1Color=document.querySelector("h1");
var pickedColor=document.querySelector("h1 span");
var playagain = document.querySelector("#playAgain");
var modeEasy = document.querySelector("#easyMode");
var modeHard = document.querySelector("#hardMode");

modeHard.addEventListener("click",function () {
	for(var i=0;i<squares.length;i++){
	squares[i].style.backgroundColor=randomColor();
	squares[i].addEventListener("click", function(){
		if(this.style.backgroundColor==pickedColor.textContent) {
			message.textContent="Correct";
			h1Color.style.backgroundColor =this.style.backgroundColor;
			for(var k=0;k<squares.length;k++) {
				squares[k].style.backgroundColor=this.style.backgroundColor;
			}
		}else{
			this.style.backgroundColor="#232323";
			message.textContent="Sorry! Try Again";
		}
	});
}
pickedColor.textContent = squares[Math.floor(Math.random()*6)].style.backgroundColor;
});


playagain.addEventListener("click",function(){
	for(var i=0;i<squares.length;i++){
	squares[i].style.backgroundColor=randomColor();
	squares[i].addEventListener("click", function(){
		if(this.style.backgroundColor==pickedColor.textContent) {
			message.textContent="Correct";
			h1Color.style.backgroundColor =this.style.backgroundColor;
			for(var k=0;k<squares.length;k++) {
				squares[k].style.backgroundColor=this.style.backgroundColor;
			}
		}else{
			this.style.backgroundColor="#232323";
			message.textContent="Sorry! Try Again";
		}
	});
}
pickedColor.textContent = squares[Math.floor(Math.random()*6)].style.backgroundColor;
});

for(var i=0;i<squares.length;i++){
	squares[i].style.backgroundColor=randomColor();
	squares[i].addEventListener("click", function(){
		if(this.style.backgroundColor==pickedColor.textContent) {
			message.textContent="Correct";
			h1Color.style.backgroundColor =this.style.backgroundColor;
			for(var k=0;k<squares.length;k++) {
				squares[k].style.backgroundColor=this.style.backgroundColor;
			}
		}else{
			this.style.backgroundColor="#232323";
			message.textContent="Sorry! Try Again";
		}
	});
}
pickedColor.textContent = squares[Math.floor(Math.random()*6)].style.backgroundColor;



function randomColor(){
	//generate a random color
	var red = Math.floor(Math.random()*256);
	var green = Math.floor(Math.random()*256);
	var blue = Math.floor(Math.random()*256);

	return "RGB("+red+", "+green+", "+blue+")";
}


modeEasy.addEventListener("click",function() {
	for(var i=0;i<3;i++){
	squares[i].style.backgroundColor=randomColor();
	squares[3].style.backgroundColor="#232323";
	squares[4].style.backgroundColor="#232323";
	squares[5].style.backgroundColor="#232323";
	squares[i].addEventListener("click", function(){
		if(this.style.backgroundColor==pickedColor.textContent) {
			h1Color.style.backgroundColor =this.style.backgroundColor;
			message.textContent="Correct";
			for(var k=0;k<6;k++) {
				squares[k].style.backgroundColor=this.style.backgroundColor;
				squares[3].style.backgroundColor="#232323";
				squares[4].style.backgroundColor="#232323";
				squares[5].style.backgroundColor="#232323";
			}
		}else{
			this.style.backgroundColor="#232323";
			message.textContent="Sorry! Try Again";
		}
	});
}
pickedColor.textContent = squares[Math.floor(Math.random()*3)].style.backgroundColor;

})
