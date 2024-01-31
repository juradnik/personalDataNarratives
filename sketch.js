function setup() {
  createCanvas(400, 400);
}

function draw() {
  
  background(155,140,170);
  
  stroke(20,20,20)
  strokeWeight(10)
 
    
  fill(200,0,0) 
  rect(50, 50, 250, 250)
  
  fill(150,20,20)
  rect(250, 300, 75, 100)
  
  fill(20,70,20)
  ellipse(120,130, 50, 60)
  ellipse(220, 130, 50, 60)
  
  ellipse(120,130,5,5)
  ellipse(220,130,5,5)
  
  fill(50,0,200)
  
  if(keyIsPressed == true){
  ellipse(170, 250, 100, 115)
} else {
  ellipse(170, 250, 100, 50)
}
  
  fill(10,10,10)
  triangle(90, 100, 135, 100, 150, 120)
  triangle(190, 120, 205, 100, 250, 100)
 
  
  
  fill(2,2,2);
  
  if(mouseIsPressed == true){
//ellipse(170, 50, 160, 40)
  //rect(140,10,60,50)
} else {
ellipse(170, 50, 160, 40)
 rect(140,10,60,50)
}


}