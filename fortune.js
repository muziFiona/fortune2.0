            /*       fortune 2.0
                     Chong In Lei
            Fortune telling using RUNES
            To view locally, you might need to install web serevr app on browser
              ie. Web Server for Chrome
              or go to the github link to browse online 
https://muzifiona.github.io/Computational_Environments_Fortune/fortune/
            The link above won't be updated after submission. 
            link for update version:
            https://muzifiona.github.io/fortune2.0/
            
            Project Aim: 
            Using WEBGL to build a 3D environment 
            to present a mystical ancient language
            that allows user to play with and 
            receive messages from it. Press the 3D model 
            in middle and receive answer. 
            
            fortune js page is for main setup functions
            more details in RUNES js*/

let angle = 0; //the self rotation speed
let degree = 0; //rotation speed of revolution
var x = []; //25 boxes x position array
var z = []; //25 boxes z position array

var runes = []; // the 25 text array
var index ; // the random representation for the text
let bg = 0; //background
let myFont; //fount label
let img; // the spinning image at the bottom
let runesImg=[];//25 images array
let rI; //texture label for the runes image
let on=false; //the main function that switch the runes fortune on and off
var op; // the opacity
let runeM; // gonna be the rune model to present in middle
var s= 0.5; //scale of the 3D model
let size = 50; //original size of the spinning boses
var lo; // transparency of the 3D model in the middle


function preload(){
  myFont = loadFont('assests/Montserrat-Medium.otf');

  for (let r =1; r<26; r++){
    runesImg[r]= loadImage("assests/img/Rune"+ r +".png");
  }
  runeM = loadModel('assests/single_rune.obj',true);
  img = loadImage('assests/bottom_BG.png');
}

function setup() {
 createCanvas(windowWidth, windowHeight, WEBGL);// using WEBGL to draw 3D shape and have kind of camera movement
 
/* the 25 spinning boxes position, representing number of runes*/
  for (var i=0; i<25; i++){
    x[i] = 800 * cos(14.5*radians(i));
    z[i] =  800 * sin(14.5*radians(i));
  }

  rI= runesImg[25];
  op =0;
/* The text description of the runes, the answer to show*/
  runes[0]="FEHU \n \nGain \nHappiness";
  runes[1]="URUZ \n \nYou need \nStrong Will";
  runes[2]="THURISAZ \n \nResistance \nDefense \nTurning point";
  runes[3]="ANSUZ \n \nSingals \nTrue Vision \nSelf-Knowledge";
  runes[4]="RAIDHO \n \nJourney \nProcess \nThe Right Way";
  runes[5]="KENAZ \n \nCreativity \nAwakening \nVision \nIllumination";
  runes[6]="GEBO \n \nGift \nSharing \nBlessings \nPersonal Relationship";
  runes[7]="WUNJO \n \nHarmony \nJoy of Life \nFellowship";
  runes[8]="HAGALAZ \n \nStone \nWild Power \nDifficultity \nStroms";
  runes[9]="NaUTHIZ \n \nConstraint \nNeed \nConflict \nDelays";
  runes[10]="ISA \n \nConcentration \nNon-action \nFrozen in Time";
  runes[11]="JeRA \n \nHarvest \nGain \nFruitful Season \nPeace and Happiness";
  runes[12]="EIHWAZ \n \nPatience \nInitiation \nStrength \nEndurance";
  runes[13]="PERTHRO \n \nVessel \nHidden Information \nSecrets";
  runes[14]="ALGIZ \n \nProtection \nAwakening \nDefense \nConnection with Gods";
  runes[15]="SOWILO \n \nSun \nGood Guidance \nHope \nGoals \nAchieved";
  runes[16]="TEIWAZ \n \nLeadership \nWarrior \nSelf-Sacrifice \nVictory";
  runes[17]="BERKANA \n \nGrowth \nNew Beginnings \nRenewal \nSpring";
  runes[18]="ENWAZ \n \nHorse \nBalance \nHarmony \nTrust";
  runes[19]="MANNAZ \n \nMankind \nAwareness \nKnowledge";
  runes[20]="LAGUZ \n \nWater \nFlow \nEmotions \nEnergy";
  runes[21]="INGWAZ \n \nFertility \nInternal Growth \nNew Life";
  runes[22]="DAGAZ \n \nDawn \nBreakthrough \nThe Power to \nChange the Self";
  runes[23]="OTHALA \n \nProperty \nPossessions \nAid in \nPhysical and Spiritual \nJourney";
  runes[24]="Blank \n \nConsequences \nThe Unknown";

}


function draw() {
  background(bg);

  dotPt();
  middleR();//3D model function in the middle
  push();
  boxT();//the spinning boxes
  pop();
  if (mouseX >= width/2-100 && mouseX <= width/2+100 && mouseY >= height/2 && mouseY <= height){
    degree = 0;// when mouse is on the model, boxes stop spinning
    size= 100;// spinning stop, and size of each box enlarge
    bg = 30;//changing background --> grayscale
    s= sin(frameCount/100);//changing the model scale when mouse is on position
    lo = 200; //opacity of the model
    
    answer(); // the pop up answer function, the opacity would only increse when mouse is pressed
     
    }
     
   else {
    size = 30; // when mouse leave, boxes size change
    bg= 0; //background change back to black after mouse leave
    s=0.85; // stable scale for the 3D model
    lo = 255; //opacity becomes 255 of the model
 
    } 
    
    for (var i = 0; i< 500; i++){
      //this the the random stars background
      noStroke();
      fill(255, random(0,150));
      ellipse(random(-width,width), random(-height,height), random(1,5));
    }

}

function mouseDragged(){ //to create a kind of 3D feeling 
  //allows users to drag the page and move x axis angle
  let camX = map(mouseX, 0, width, -400, 100);
  camera(camX,0,(height/2)/tan(PI/6),0,0,0,0,1,0);
  
}

function mousePressed(){
  //when mouse pressed, it generate a random runes answer 
  index = floor(random(runes.length));
  
  if (mouseX >= width/2-100 && mouseX <= width/2+100 && mouseY >= height/2 && mouseY <= height){
   //switching on function will allows the answer appear and disappear
    on = !on; 
  } 
}

  
      
