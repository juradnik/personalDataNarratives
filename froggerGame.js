froggerGame.js

let frog 

let frogX
let frogY

let flyX = []
let flyY = []

let flySpeed 

let fly

//let wasp

//let waspX
//let waspY

let xSpeed = 5
let ySpeed = 5


let score = 0 

let mouseDist

let startBool = true
let winBool = false

function preload(){
	frog = loadImage("froggerFrog.png")
}

function preload(){
	fly = loadImage("fly.png")
}

//function preload(){
//	wasp = loadImage("wasp.png")
//}


function windowResized () {
	resizeCanvas(windowWidth, windowHeight)
}

function setup(){
createCanvas(windowWidth, windowHeight)
imageMode(CENTER)

	for(let i=0; i<5; i++){
		flyX.push(random(windowWidth))
		flyY.push(random(windowHeight))
		flySpeed.push(random(1, 4))
	}

frogX = windowWidth/2
frogY = windowHeight/2

flyX = windowWidth/2
flyY = windowHeight/2

//waspX = windowWidth/2
//waspY = windowHeight/2
}

function draw() {
	if(startBool == true){

	}

	if(winBool == true){
		winGame
	}

	background(220)
	image(frog, frogX, frogY, 40, 40)

	if (frogX >= windowWidth){
		frogX=0
	}

	if (frogY >= windowHeight){
		frogY=0
	}

	if (frogX <= windowWidth){
		frogX = windowWidth
	}

	if (frogY <= windowHeight){
		frogY = windowHeight
	}

	for(let i = 0; i < x.length; i++){
		image(fly, flyX[i], flyY[i], 40, 40)
		flyX[i] = flyX[i] + flySpeed[i]

		if(dist(mouseX, mouseY, x[i], y[i]) <30){
			flyX.splice(i, 1)
			flyY.splice(i, 1)
		}
	}
}

//moving frog
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

	function startGame(){
	background(0,0,255)
	fill(255)
	text('Catch all the Flies and avoid the Wasps!. Your score is ' + score + ' points!!!', 0, 100)
	textSize(20)
	image(frog, frogX, frogY, 40, 40)
}
	mouseDist = dist(mouseX, mouseY, flyX, flyY)


if(score == 20){
	winBool == true
	startBool == false
}


function winGame(){
	background(0)
	fill(255)
	text('YOU WIN!', windowWidth/2, 100)
	textSize(20)
	image(frog, frogX, frogY, 40, 40)
}