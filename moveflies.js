
let flyX = []
let flyY = []

let fly 

function preload(){
	fly = loadImage("fly.png")
} 

function setup(){
	createCanvas(windowWidth, windowHeight)
	imageMode(CENTER)
}

function draw(){
	background(255)
	for(let i=0; i < flyX.length; i++){
		image(fly, flyX[i], flyY[i], 40, 40)
		if(dist(mouseX, mouseY, flyX[i], flyY[i]) <30){
			x.splice(i, 1)
			y.splice(i, 1)
		}
	}
	print(flyX.length)
}

function keyPressed(){

	if(keyCode === RIGHT_ARROW)
	flyX.push(random(windowWidth))
	flyY.push(random(windowHeight))
}
