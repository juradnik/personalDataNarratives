
let squareBrushBool = false
let ellipseBrushBool = false



function setup (){
	
createCanvas(windowWidth, windowHeight)
background(0,200,0)
rectMode(CENTER)

}


function draw(){
	
	if( squareBrushBool == true){
		squareBrush()

	}
	if(ellipseBrushBool == true){
		ellipseBrush()

	}

}

function squareBrush(){
fill(200, 80, 250)
rect(mouseX, mouseY, 30, 30)

}

function ellipseBrush(){
fill(100, 50, 200)
ellipse(mouseX, mouseY, 50, 50)

}

function keyPressed(){
	if(key === 'q'){
		squareBrushBool = true
		ellipseBrushBool = false
	}

	if(key === 'w'){
		squareBrushBool = false
		ellipseBrushBool = true
	}
}