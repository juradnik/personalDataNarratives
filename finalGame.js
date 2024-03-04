
let waspX = []
let waspY = []

let flyX = []
let flyY = []

let wasp 

let fly 

let frog 

let frogX
let frogY

let startBool = true
let winBool = false

let score = 0

let waspXspeed = []
let waspYspeed = []

let flyYspeed = []
let flyXspeed = []

function preload(){
	frog = loadImage('froggerFrog.png')
	fly = loadImage("fly.png")
	wasp = loadImage("wasp.png")
}



function setup(){
	createCanvas(windowWidth, windowHeight)
	imageMode(CENTER)

	frogX = windowWidth/2
	frogY = windowHeight/2


    for(i =0; i < 10; i++){
        flyX.push(random(windowWidth))
        flyY.push(random(windowHeight))
        flyXspeed.push(random(2,4))
        flyYspeed.push(random(2,4))
    }
    for(i =0; i < 10; i++){
        waspX.push(random(windowWidth))
        waspY.push(random(windowHeight))
        waspXspeed.push(random(2,4))
        waspYspeed.push(random(2,4))
    }
}

function draw(){
	background(255)

	if(startBool == true){
		startGame()
	}

	if(winBool == true){
		winGame()
	}
}
function startGame(){
    background(35,137,218);
  noStroke()
  fill(19,133,16)
  rect(0, 0, windowWidth, 80)
  fill(150, 75, 0) 
  stroke(1)
  rect(0, 80, windowWidth, 10)
  
  fill(52,114,25);
  ellipse(100, 300, 60, 30);
  ellipse(300, 320, 80, 40);
  ellipse(80, 120, 80, 40);
  ellipse(600, 240, 55, 40)
  ellipse(500, 500, 65, 45)
  ellipse(873, 190, 70, 50)
  ellipse(1108, 420, 60, 40)

  fill(150, 75, 0);
  rect(800, 450, 250, 30);

    fill(255)
	text('Catch the Flies! Avoid the Wasps! Your score is ' + score + ' points!', 400, 150)
	textSize(20)
	image(frog, frogX, frogY, 40, 40)

	if (frogX >= windowWidth){
		frogX=0
	}

	if (frogY >= windowHeight){
		frogY=0
	}

    for(let i=0; i < waspX.length; i++){
        image(wasp, waspX[i], waspY[i], 40, 40)

        if(dist(frogX, frogY, waspX[i], waspY[i]) <30){
            waspX[i] = random(16, windowWidth-16)
            waspY[i] = random(16, windowHeight-16)
            score --
        }
        
        if(waspY[i] >= windowHeight -15 || waspY[i] <= 15){
            waspYspeed[i] = waspYspeed[i] * -1
        }

        if(waspX[i] >= windowWidth -15 || waspX[i] <= 15){
            waspXspeed[i] = waspXspeed[i] * -1
        }

        waspX[i] = waspX[i] + waspXspeed[i]
        waspY[i] = waspY[i] + waspYspeed[i]
    }
    
    print(waspX.length)

    for(let i=0; i < flyX.length; i++){
        image(fly, flyX[i], flyY[i], 40, 40)

        if(dist(frogX, frogY, flyX[i], flyY[i]) <30){
            flyX[i] = random(16,windowWidth-16)
            flyY[i] = random(16, windowHeight-16)
            score ++
        }

        if(flyY[i] >= windowHeight -15 || flyY[i] <= 15){
            flyYspeed[i] = flyYspeed[i] * -1
        }

        if(flyX[i] >= windowWidth -15 || flyX[i] <= 15){
            flyXspeed[i] = flyXspeed[i] * -1
        }

        flyX[i] = flyX[i] + flyXspeed[i]
        flyY[i] = flyY[i] + flyYspeed[i]
    
    }


	if(score == 30){
	winBool = true
	startBool = false
    }

    print(flyX.length)
}

function keyPressed(){

	if(keyCode === LEFT_ARROW){
		frogX = frogX - 30;
	}  else	if(keyCode === RIGHT_ARROW){
		frogX = frogX + 30
	}

	if(keyCode === UP_ARROW){
		frogY = frogY - 30;
	} else if(keyCode === DOWN_ARROW){
		frogY = frogY + 30;
	}
}



function windowResized () {
	resizeCanvas(windowWidth, windowHeight)
}

function winGame(){
	background(35,137,218);
  noStroke()
  fill(19,133,16)
  rect(0, 0, windowWidth, 80)
  fill(150, 75, 0) 
  stroke(1)
  rect(0, 80, windowWidth, 10)
  
  fill(52,114,25);
  ellipse(100, 300, 60, 30);
  ellipse(300, 320, 80, 40);
  ellipse(80, 120, 80, 40);
  ellipse(600, 240, 55, 40)
  ellipse(500, 500, 65, 45)
  ellipse(873, 190, 70, 50)
  ellipse(1108, 420, 60, 40)

  fill(150, 75, 0);
  rect(800, 450, 250, 30);
	
    fill(255)
	text('YOU WIN!', windowWidth/2, windowHeight/2)
	textSize(40)
	image(frog, frogX, frogY, 40, 40)
}