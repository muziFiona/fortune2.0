// so far this is the sphere that goes with mouse and controling directional light

function dotPt(){
  let large =0;
  push();
  fill(255);
  noStroke();
  ellipse(mouseX-width/2, mouseY-height/2,large+(sin(frameCount/30)*20));
  pop();
}
