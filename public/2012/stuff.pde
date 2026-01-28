
PVector[] tail = new PVector[7];
float elasticity = .08;
boolean isDrawing = false;

void setup() {
  size(770,565);
  background(0);
  stroke(255, 33);

  smooth();
  
  // make tail segments
  for ( int i = 0; i < tail.length; i++) {
    tail[i] = new PVector(mouseX,mouseY,0);
  }
}
 
void draw() {
  // clear();  
  //  background(255);  
  //  ellipse(mouseX, mouseY, 25, 25);
  
  PVector mouse = new PVector(mouseX,mouseY,0);
  
  // Move the vectors
  tail[0].x = tail[0].x + (mouse.x - tail[0].x)*elasticity;
  tail[0].y = tail[0].y + (mouse.y - tail[0].y)*elasticity;
  for ( int i = 1; i < tail.length; i++) {
    tail[i].x = tail[i].x + (tail[i-1].x - tail[i].x)*elasticity;
    tail[i].y = tail[i].y + (tail[i-1].y - tail[i].y)*elasticity;
    
    // Draw a line
    if (isDrawing) {
      line(tail[i].x,tail[i].y,tail[i-1].x,tail[i-1].y);
    }
  }
  
  // Draw the joints
  for ( int i=0; i < tail.length; i++) {   
    // ellipse(tail[i].x, tail[i].y, 25, 25);
  }
}
 
void mousePressed() {
 isDrawing = true;
}

void mouseReleased() {
  isDrawing = false;
}
 
void keyPressed(){
  if (key == 'c') {
    background(0);
  }
}
