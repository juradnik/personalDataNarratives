
let snapChatButton
let twitterButton
let safariButton
let instaGramButton
let iMessageButton
let youTubeButton
let saveYourself
let pdfButton

let snapBool = false
let twitterBool = false
let safariBool = false
let instaBool = false
let iMessageBool = false
let youTubeBool = false
let saveYourselfBool = false

let animText1
let animText2
let animText3
let animText4
let animText5
let animText6
let animText7
let animText8

function setup() {
  createCanvas(windowWidth, windowHeight);

  snapChatButton = createButton('')
  snapChatButton.addClass('Snapchat')
  snapChatButton.position(575, 160)
  snapChatButton.mousePressed(backgroundSnapchat)

  twitterButton = createButton('')
  twitterButton.addClass('Twitter')
  twitterButton.position(660, 160)
  twitterButton.mousePressed(backgroundTwitter)

  safariButton = createButton('')
  safariButton.addClass('Safari')
  safariButton.position(575, 260)
  safariButton.mousePressed(backgroundSafari)

  instaGramButton = createButton('')
  instaGramButton.addClass('Insta')
  instaGramButton.position(660, 260)
  instaGramButton.mousePressed(backgroundInsta)

  iMessageButton = createButton('')
  iMessageButton.addClass('iMessage')
  iMessageButton.position(575, 360)
  iMessageButton.mousePressed(backgroundiMessage)

  youTubeButton = createButton('')
  youTubeButton.addClass('YouTube')
  youTubeButton.position(660, 360)
  youTubeButton.mousePressed(backgroundYouTube)

  saveYourself = createButton('Save Yourself')
  saveYourself.position(1130, 525)
  saveYourself.mousePressed(backgroundSaveYourself)

  pdfButton = createButton('Works Cited');
  pdfButton.position(595, 500);
  pdfButton.mousePressed(openPDF);

  animText1 = windowWidth + 5
  animText2 = windowWidth + 500
  animText3 = windowWidth + 1200
  animText4 = windowWidth + 1700
  animText5 = windowWidth + 3500
  animText6 = windowWidth + 4500
  animText7 = windowWidth + 5500
  animText8 = windowWidth + 6800
}

function preload(){
//snap pictures 
  snapmap = loadImage('snapMap.png')
  surgery = loadImage('surgery.png')
  stab = loadImage('stab.png')
  using = loadImage('using.png')
  kids = loadImage('kids.png')
  snapd = loadImage('snapd.png')
  facelift = loadImage('facelift.png')
  filter = loadImage('filter.png')

//Twitter pictures
  musk = loadImage('musk.png')
  hypo = loadImage('hypo.png')
  doomkid = loadImage('doomedKid.png')
  bot = loadImage('bot.png')
  brotNews = loadImage('brotNews.png')
  noP = loadImage('noP.png')
  LGBTQ = loadImage('LGBTQ.png')
  Diaz = loadImage('Diaz.png')


//Safari pictures 
  zakiya = loadImage('Zakiya.png')
  son = loadImage('son.png')
  deceptive = loadImage('deceptive.png')
  seriouseats = loadImage('seriouseats.png')
  flaw = loadImage('flaws.png')
  scrolling = loadImage('scrolling.png')
  chart = loadImage('chart.png')
  DSstudy = loadImage('DSstudy.png')

//Insta pictures 
  diet = loadImage('diet.png')
  BDA = loadImage('BDA.png')
  girlmirror = loadImage('girlmirror.png')
  tape = loadImage('tape.png')
  linkIG = loadImage('linkIG.png')
  Khan = loadImage('Khan.png')
  menPic = loadImage('menPic.png')
  menMental = loadImage('menMental.png')
  sampled = loadImage('sampled.png')

//iMessage pictures
  couple = loadImage('couple-texting.jpg')
  PR = loadImage('PR.png')
  misunderstanding = loadImage('misunderstanding.png')
  sucked = loadImage('sucked.png')
  txtDrive = loadImage('txtDrive.png')
  textingwhiledriving = loadImage('textingwhiledriving.png')
  breeds = loadImage('breeds.png')
  Olia = loadImage('Olia.png')

//Youtube pictures
  youtubeStat = loadImage('youtubeStat.png')
  darkSide = loadImage('darkSide.png')
  spending = loadImage('spending.png')
  materialism = loadImage('materialism.png')
  youNews = loadImage('youNews.png')
  distract = loadImage('distract.png')
  kidPhone = loadImage('kidPhone.png')
  impact = loadImage('impact.png')
}

function draw() {
  background(220);
  rectMode(CENTER);
  fill(0)
  textSize(18)
  text("Start by clicking on any of the apps", 510, 60)
  textSize(16)
  fill(0)
  text("Click this when you've had enough", 1010, 515)
  pdfButton.hide()


if(snapBool == true){
  pdfButton.hide()
  background(255,252,0)
  textSize(20)
  fill(0)
  text('You spent 5 hours and 37 minutes on Snapchat during March 2024',50,30)
  text('Why are you spending so much time taking photos of your face??', 600, 65)
  text("Imagine making an app so evil that it simultanesouly attracts predators and creates its own form of body dysmorphia", 80, 540)
  image(snapmap, 23, 200)
  image(stab, 20, 80)
  image(kids, 380, 180)
  snapmap.resize(400, 200)
  image(facelift, 930, 100)
  image(using, 115, 400)
  image(filter, 735, 180)
  filter.resize(200, 180)
  image(snapd, 750, 350)
  image(surgery, 740, 80)

  
}

if(twitterBool == true){
  pdfButton.hide()
  background(29,161,242)
  textSize(22)
  fill(255)
  text('You spent 16 hours and 27 minutes on Twitter during March 2024... did you learn anything from all that brain rot?',50,50)
  text('Twitter is run by a right wing billionaire who has received enough tax bailouts to end homelessness', 80, 500)
  text('THE ONLY OPINIONS YOU SEE ARE THOSE OF BOTS OR ELEVEN YEAR OLDS', 190, 530)
  image(musk, 10, 420)
  image(doomkid, 45, 130)
  image(bot, 10, 75)
  bot.resize(450, 50)
  image(noP, 360, 130)
  image(LGBTQ, 10, 337)
  LGBTQ.resize(530, 80)
  image(Diaz, 740, 100)
  image(hypo, 990, 70)
  image(brotNews, 760, 375)
}

if(safariBool == true){
  pdfButton.hide()
  background(54,91,236)
  textSize(22)
  fill(255)
  text('You spent over 53 hours on Safari during March 2024... Really man? You should go outside more',50,50)
  text("That's over two days of your life spent soley on Safari... just in March alone", 80, 510 )
  text("At least most of it was spent on seriouseats.com", 590, 540)
  image(flaw, 380, 290)
  image(zakiya, 12, 80)
  image(deceptive, 290, 70 )
  deceptive.resize(250, 150)
  image(son, 50, 290) 
  son.resize(320, 190)
  image(seriouseats, 240, 225)
  image(scrolling, 745, 100)
  image(DSstudy, 750, 350)
  image(chart, 1010, 20)
  
  }

if(instaBool == true){
  pdfButton.hide()
  background(225,48,108)
  textSize(22)
  fill(255)
  text('You spent 9 hours and 24 minutes on Instagram during March 2024',50,30)
  text('Your self esteem must be incredible', 800, 50)
  text("American Psychology Association links Instagram to depression, body image concerns, self-esteem issues, and social anxiety", 40, 500 )
  text("YOU'RE BEAUTIFUL AND YOU DON'T NEED LIKES AND COMMENTS TO SAY SO", 190, 530)
  image(diet, 50, 120)
  image(girlmirror, 380, 100)
  image(BDA, 10, 60)
  image(tape, 15, 300)
  image(linkIG, 290, 300)
  linkIG.resize(250, 180)
  image(menPic, 920, 80)
  image(Khan, 740, 65)
  image(menMental, 740, 390)
  menMental.resize(500, 80)
  image(sampled, 750, 265)

}

if(iMessageBool == true){
  pdfButton.hide()
  background(57,255,90)
  textSize(22)
  text('You spent 42 hours and 2 minutes on iMessage during March 2024',50,30)
  text("Seriously? You didn't even spend that long talking to people in real life", 550, 60)
  text("Did you know that texting creates less social communication, productivity, empathy, and understanding?", 80, 500)
  text("You're already anti-social enough, save your yapping for in-person conversations", 190, 530)
  image(couple, 10, 70)
  couple.resize(300,300)
  image(textingwhiledriving, 950,230)
  image(PR, 30, 350)
  image(sucked, 745, 230)
  sucked.resize(200,200)
  image(misunderstanding, 745, 100)
  image(txtDrive, 740, 420)
  image(breeds, 1030, 80)
  breeds.resize(240, 150)
  image(Olia, 315, 90)
  Olia.resize(225,250)
  


}

if(youTubeBool == true){
  pdfButton.hide()
  background(255,0,0)
  textSize(22)
  fill(255)
  text('You spent 35 hours and 59 minutes on YouTube during March 2024',50,40)
  text("Jesus get a hobby or something", 800, 40)
  textSize(18)
  text("40% of teenagers reported that they believed that their favourite YouTube content creator understood them more than their real-life friends (O’Neil-Hart)", 10, 500)
  textSize(22)
  text("Do you have real-life friends you can fall back on?? ", 190, 530)
  image(darkSide, 740, 80)
  darkSide.resize(520, 80)
  image(kidPhone, 920, 255)
  image(spending, 10, 60)
  spending.resize(520, 80)
  image(materialism, 10, 150)
  materialism.resize(320, 120)
  image(youNews, -10, 280)
  youNews.resize(350, 200)
  image(distract, 745, 165 )
  distract.resize(520, 80)
  image(youtubeStat, 735, 250)
  image(impact, 345, 150)
  impact.resize(200, 300)
  

}


//iPhone
  // main body
fill(0)
rect(640,275.5,180,350,20);

fill(0);
stroke(169,169,169);
rect(640,275.5,170,340,20);

// notch
fill(25);
noStroke();
rect(640,110.5,80,12,0,0,5,5);

fill(100);
stroke(255);
ellipse(620,109.5,5,5);

fill(100);
ellipse(670,109.5,10,10)
fill(230);
ellipse(655,109.5,5,5);


// swipebar
noStroke();
fill(250);
rect(640,441.5,60,3,10);

if(saveYourselfBool == true){
  background(5,71,42)

snapChatButton.hide()
twitterButton.hide()
safariButton.hide()
instaGramButton.hide()
iMessageButton.hide()
youTubeButton.hide()
saveYourself.hide()
pdfButton.show()

// print function for text
//look into counter 
textSize(26)
text("Phew... it's a relief to be off of there huh", animText1, 100)
text("You spent a total of 165 hours of screen time on your phone during March", animText2, 150)
text("That's 6.875 days... almost one whole week", animText3, 200)
text("Instead, you could have... flown around the earth 3.3 times, listened to 'Never Gonna Give You Up' by Rick Astley approximately 4,200 times, microwaved 4,950 Hot Pockets, played 'Zelda: Breath of the Wild' 6.6 times (although I'm not sure that's a better use of your time), watch the entire 'Lord of the Rings' movie trilogy approximately 40 times (much better use of your time), take approximately 13,600 elevator rides to the top of the Empire State Building, and complete the Macarena approximately 3,232 times", animText4, 250)
text("The world spends an average of 2 hours 23 minutes a day on social media", animText5, 300)
text("Meaning an adult from age 18 to 80 would spend 6.3 years of their life on social media", animText6, 350)
text("Social Media gives you small dopamine releases everytime you engage in it, it should be classified as a drug", animText7, 400)
textSize(36)
text("Time is infinite, but life is ever fleeting, don't waste yours", animText8, 475)

if (animText1 > 110 + textWidth("Phew... it's a relief to be off of there huh")) {
    animText1--;
  }


if (animText2 > 1525 - textWidth("You spent a total of 165 hours of screen time on your phone during March")) {
    animText2--;
  }

if (animText3 > 110 + textWidth("6.875 days... almost one whole week")) {
    animText3--;
  }

if(animText4 > -10000){
animText4--
}
print(animText4)

if (animText5 > 1525 - textWidth("The world spends an average of 2 hours 23 minutes a day on social media")) {
    animText5--;
  }

if (animText6 > 1575 - textWidth("meaning an adult from age 18 to 80 would spend 6.3 years of their life on social media")){ 
  animText6--;
  }

if (animText7 > 1740 - textWidth("Social Media gives you small dopamine releases everytime you engage in it, it should be classified as a drug")){ 
  animText7--;
  }

if (animText8 > 1100 - textWidth("Time is infinite, but life is ever fleeting, don't waste yours")){ 
  animText8--;
  }

//if(animText1 > -100){
//animText1--
//}else{
  //animText1 = windowWidth + 5 
//}
//print(animText1)
}

}

function backgroundSnapchat(){
  snapBool = true
  twitterBool = false
  safariBool = false
  instaBool = false
  iMessageBool = false
  youTubeBool = false
  background(255, 252, 0)
}

function backgroundTwitter(){
  snapBool = false
  twitterBool = true
  safariBool = false
  instaBool = false
  iMessageBool = false
  youTubeBool = false
  background(29,161,242)
}

function backgroundSafari(){
  snapBool = false
  twitterBool = false
  safariBool = true
  instaBool = false
  iMessageBool = false
  youTubeBool = false
  background(54,91,236)
}

function backgroundInsta(){
  snapBool = false
  twitterBool = false
  safariBool = false
  instaBool = true
  iMessageBool = false
  youTubeBool = false
  background(225,48,108)
}

function backgroundiMessage(){
  snapBool = false
  twitterBool = false
  safariBool = false
  instaBool = false
  iMessageBool = true
  youTubeBool = false
  background(57,255,90)
}

function backgroundYouTube(){
  snapBool = false
  twitterBool = false
  safariBool = false
  instaBool = false
  iMessageBool = false
  youTubeBool = true
  background(255,0,0)
}

function backgroundSaveYourself(){
  snapBool = false
  twitterBool = false
  safariBool = false
  instaBool = false
  iMessageBool = false
  youTubeBool = false
  saveYourselfBool = true
  background(5,71,42)
}

function openPDF() {
  window.open("Works Cited.pdf", "_blank");
}

function windowResized () {
  resizeCanvas(windowWidth, windowHeight)
}