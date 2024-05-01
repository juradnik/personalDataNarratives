
let colorChangeButton
let playButton
let colorChangeButtonOff

let canvas 

let drawBool = false

let modem


function preload(){
	modem = loadSound('ModemSound.mp3')
}

function setup(){

canvas = createCanvas(windowWidth, windowHeight)
canvas.position(0,0)
canvas.style('z-index', '-1')

background(140)

colorChangeButton = createButton('Change Background')
colorChangeButton.position(200, 200)
colorChangeButton.mousePressed(backgroundColorChange)

colorChangeButtonOff = createButton('Turn Off Pencil')
colorChangeButtonOff.position(200,300)
colorChangeButtonOff.mousePressed(turnOffPencil)

playButton = createButton('Play Modem')
playButton.position(200,400)
playButton.mousePressed(playModem)
}

function playModem(){
	if(!modem.isPlaying()){
		modem.play();
		playButton.html('pause modem')
	}else{
		modem.pause();
		playButton.html('play modem')

	}
}

function turnOffPencil(){
	drawBool = false
}

function backgroundColorChange(){
	drawBool = true
	background(random(255), random(255), random(255))
}

function draw(){

if(drawBool == true){
	line(mouseX, mouseY, pmouseX, pmouseY)
}


}