
let X = []
let Y = []

let wasp 

let fly 

let frog 

let frogX
let frogY

let startBool = true
let winBool = false

function preload(){
	frog = loadImage('froggerFrog.png')
}

function preload(){
	fly = loadImage("fly.png")
}

function preload(){
	wasp = loadImage("realwasp.png")
} 

function setup(){
	createCanvas(windowWidth, windowHeight)
	imageMode(CENTER)

	frogX = windowWidth/2
	frogY = windowHeight/2
}

function draw(){
	background(255)

	image(frog, frogX, frogY, 40, 40)

	if(startBool == true){

	}

	if(winBool == true){
		winGame
	}
}
function startGame(){
	background(0)
	fill(255)
	text('Catch the Flies! Avoid the Wasps! Your score is ' + score + ' points!!!', 0, 100)
	textSize(20)
	image(furby, furbyX, furbyY, 40, 40)

	if (frogX >= windowWidth){
		frogX=0
	}

	if (frogY >= windowHeight){
		frogY=0
	}

	for(let i=0; i < waspX.length; i++){
		image(wasp, waspX[i], waspY[i], 40, 40)
		if(dist(mouseX, mouseY, waspX[i], waspY[i]) <30){
			frogX.splice(i, 1)
			frogY.splice(i, 1)
		}
	}
	print(waspX.length)

	for(let i=0; i < flyX.length; i++){
		image(fly, flyX[i], flyY[i], 40, 40)
		if(dist(mouseX, mouseY, flyX[i], flyY[i]) <30){
			frogX.splice(i, 1)
			frogY.splice(i, 1)
		}
	}
	print(flyX.length)

	if(score == 20){
	winBool == true
	startBool == false
}
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

function keyPressed(){
	if(keyCode === LEFT_ARROW)
	waspX.push(random(windowWidth))
	waspY.push(random(windowHeight))

	if(keyCode === UP_ARROW)
	waspX.push(random(windowWidth))
	waspY.push(random(windowHeight))

	if(keyCode === DOWN_ARROW)
	waspX.push(random(windowWidth))
	waspY.push(random(windowHeight))

	if(keyCode === RIGHT_ARROW)
	flyX.push(random(windowWidth))
	flyY.push(random(windowHeight))
}

function windowResized () {
	resizeCanvas(windowWidth, windowHeight)
}

function winGame(){
	background(0)
	fill(255)
	text('YOU WIN!', windowWidth/2, 100)
	textSize(20)
	image(frog, frogX, frogY, 40, 40)
}