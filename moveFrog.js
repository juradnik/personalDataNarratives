
let frog 

let frogX
let frogY

function preload(){
	frog = loadImage('froggerFrog.png')
}

function setup(){
createCanvas(windowWidth, windowHeight)
imageMode(CENTER)

frogX = windowWidth/2
frogY = windowHeight/2

}

function draw() {
	background(220)
	image(frog, frogX, frogY, 40, 40)

	if (frogX >= windowWidth){
		frogX=0
	}

	if (frogY >= windowHeight){
		frogY=0
	}

	//if (frogX <= windowWidth){
	//	frogX = windowWidth
	//}

	//if (frogY <= windowHeight){
	//	frogY = windowHeight
	//}
}

function keyPressed(){

	if(keyCode === LEFT_ARROW){
		frogX = frogX - 20;
	}  else	if(keyCode === RIGHT_ARROW){
		frogX = frogX + 20
	}

	if(keyCode === UP_ARROW){
		frogY = frogY - 20;
	} else if(keyCode === DOWN_ARROW){
		frogY = frogY + 20;
	}
}

function windowResized () {
	resizeCanvas(windowWidth, windowHeight)
}
