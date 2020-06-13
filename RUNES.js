
//answer function contains background, related rune image and text description
//for the answer
function  answer(){
        //the white background
        noStroke();
        fill(255,255,255, op);
        rectMode(CENTER);
        translate(0, -100, 0);
        rect(0, height/8, 600,400); 
        //another layer for image to fill in
        fill(0,0,0,0);
        translate(0, -50, 0);
        tint(255, op);
        texture(rI);
        rect(30, height/8, 450,300);  
        translate(0, height/8, 100);
        
        //switching on and off for the text output and also adding the fade in fade out effect
        if (on){
        bg= 30; // background
        LETTERS();
        if (op < 200){
          op += 3;
        }

     } else {
     if (op >0){
     op += -10;
    }
   }
 }
 
 //dotPt is the mouse animation, 
 //create a animation point to follow the mouse
 //easier for user to trace the mouse position
function dotPt(){
  let large =0;
  push();
  fill(255);
  noStroke();
  ellipse(mouseX-width/2, mouseY-height/2,large+(sin(frameCount/30)*20));
  pop();
}

//text appearance and matching certain image to the text description
function LETTERS(){
  fill(10, 0, 0, op);
  textFont(myFont);
  textSize(32);
  textAlign(LEFT,TOP);
  text(runes[index],-160,-100); //present random text by letting index be the eandom function when mouse pressed
  textImg(); //related image function
}

/* Below is the function that match all 25 runes image with the text 
when a specific description of a rune is shown, the screen will present a 
releated image next to it*/

function textImg(){
      if (runes[index]==runes[0]){
      rI= runesImg[1];
    }else if (runes[index]==runes[1]){
      rI= runesImg[2];
    }else if (runes[index]==runes[2]){
      rI= runesImg[3];
    }else if (runes[index]==runes[3]){
      rI= runesImg[4];
    }else if (runes[index]==runes[4]){
      rI= runesImg[5];
    }else if (runes[index]==runes[5]){
      rI= runesImg[6];
    }else if (runes[index]==runes[6]){
      rI= runesImg[7];
    }else if (runes[index]==runes[7]){
      rI= runesImg[8];
    }else if (runes[index]==runes[8]){
      rI= runesImg[9];
    }else if (runes[index]==runes[9]){
      rI= runesImg[10];
    }else if (runes[index]==runes[10]){
      rI= runesImg[11];
    }else if (runes[index]==runes[11]){
      rI= runesImg[12];
    }else if (runes[index]==runes[12]){
      rI= runesImg[13];
    }else if (runes[index]==runes[13]){
      rI= runesImg[14];
    }else if (runes[index]==runes[14]){
      rI= runesImg[15];
    }else if (runes[index]==runes[15]){
      rI= runesImg[16];
    }else if (runes[index]==runes[16]){
      rI= runesImg[17];
    }else if (runes[index]==runes[17]){
      rI= runesImg[18];
    }else if (runes[index]==runes[18]){
      rI= runesImg[19];
    }else if (runes[index]==runes[19]){
      rI= runesImg[20];
    }else if (runes[index]==runes[20]){
      rI= runesImg[21];
    }else if (runes[index]==runes[21]){
      rI= runesImg[22];
    }else if (runes[index]==runes[22]){
      rI= runesImg[23];
    }else if (runes[index]==runes[23]){
      rI= runesImg[24];
    }else if (runes[index]==runes[24]){
      rI= runesImg[25];
    }

}

//boxT is the spinning boxes function + the bottom image 
function boxT(){
  
  push();
  noStroke();
  texture(img);
  translate(0,200,100);
  rotateX(PI/2);
  //plane(width,height);
  rotateZ(angle);
  circle(0,0,width);
  pop();

  rotateY(degree); //let the boxes spin through the center
  for( var i = 0; i< 26; i++){
    push();
    translate(x[i],0,z[i]); //adding the x and z array I haved setup earlier to adjust the position
    
    rotateY(angle);
    stroke(255);
    strokeWeight(5);
    fill(255,150);
    box(size,230,size/3);
    
    pop();
  }
  
  //moving speed
  angle += 0.005; 
  degree += 0.005;
  
}

function middleR(){ //function of the 3D model in middle
  push();
  translate(0,height/8,0);//setting position
  rotateY(angle);//self rotating
  scale(s);//default scale-->0.5 to start with
  
  directionalLight(150, 150, 150, width/2,-1500, -500); //position the light close to bottom 
  ambientLight(88, 88, 88,10);
  
  specularMaterial(100, 100, 100,lo);// lo is the opactity value
  model(runeM);
  pop();
  
}
