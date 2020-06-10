let size = 30;
var runeStone = boxT();
var fade ;
var fadeAmount = 1;
var op;
var opAmount = 1;

function boxT(){
  
  push();
  noStroke();
  //ambientMaterial(200,111,255,255);
  //fill(255,255);
  texture(img);
  translate(0,200,100);
  rotateX(PI/2);
  //plane(width,height);
  rotateZ(angle);
  circle(0,0,width);
  
  pop();
  
  
  rotateY(degree);
  for( var i = 0; i< 26; i++){
    let offset =0;
    push();
    translate(x[i],0,z[i]);
    
    rotateY(angle);
    //noStroke();
    stroke(10,200);
    strokeWeight(2);
    fill(255,100);
    //ambientMaterial(200,111,255,255);
    box(size,200,size/2);
    //scale(size);
    //model(runeM);
    
    pop();
    offset += 0.1;
    //z += 30;
  }
  
  angle += 0.005;
  degree += 0.005;

  op = 0;

  
}
