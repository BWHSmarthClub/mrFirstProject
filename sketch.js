function setup() {
  createCanvas( 800 , 800 );
  //background( 200 , 200 , 255 );
}

function draw() {
  background( 200 , 200 , 255 , 30 );
  fill( 0 , 0 , 255 , 20 );
  ellipse( mouseX , mouseY , 100 , 100 );
}
