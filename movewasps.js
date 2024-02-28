
let waspX = []
let waspY = []

let wasp 

function preload(){
	wasp = loadImage("wasp.png")
} 

function setup(){
	createCanvas(windowWidth, windowHeight)
	imageMode(CENTER)
}

function draw(){
	background(255)
	for(let i=0; i < waspX.length; i++){
		image(wasp, waspX[i], waspY[i], 40, 40)
		if(dist(mouseX, mouseY, waspX[i], waspY[i]) <30){
			x.splice(i, 1)
			y.splice(i, 1)
		}
	}
	print(waspX.length)
}

function keyPressed(){

	if(keyCode === LEFT_ARROW)
	waspX.push(random(windowWidth))
	waspY.push(random(windowHeight))

	if(keyCode === RIGHT_ARROW)
	waspX.push(random(windowWidth))
	waspY.push(random(windowHeight))

	if(keyCode === UP_ARROW)
	waspX.push(random(windowWidth))
	waspY.push(random(windowHeight))

	if(keyCode === DOWN_ARROW)
	waspX.push(random(windowWidth))
	waspY.push(random(windowHeight))
}