
let furby

let furbyX
let furbyY


let xSpeed = 1
let ySpeed = 1


let score = 0

let mouseDist

let startBool = true
let winBool = false

function preload() {
	furby = loadImage('furby.png')
}


function setup(){
createCanvas(windowWidth, windowHeight)
imageMode(CENTER)

furbyX = windowWidth/2
furbyY = windowHeight/2

}

function draw(){
	if(startBool == true){

	}

	if(winBool == true){
		winGame
	}
	}
	
function startGame(){
	background(0)
	fill(255)
	text('Tag the Furby. Your score is ' + score + ' points!!!', 0, 100)
	textSize(20)
	image(furby, furbyX, furbyY, 40, 40)



	mouseDist = dist(mouseX, mouseY, furbyX, furbyY)

	if(mouseDist < 15){
		score ++
		furbyX = random(16,windowWidth-16)
		furbyY = random(16, windowHeight-16)

		xSpeed = xSpeed * 1.1
		ySpeed = ySpeed * 1.1
	}

	//moving furby
	furbyX = furbyX + xSpeed
	furbyY = furbyY + ySpeed

	//change direction of furby
	if(furbyX >= windowWidth -15 || furbyX <= 15){
		xSpeed = xSpeed * -1
	}

	if(furbyY >= windowHeight -15 || furbyY <= 15){
		ySpeed = ySpeed * -1
	}
}

if(score == 20){
	winBool == true
	startBool == false
}

function winGame(){
	background(0)
	fill(255)
	text('YOU WIN!', windowWidth/2, 100)
	textSize(20)
	image(furby, furbyX, furbyY, 40, 40)
}