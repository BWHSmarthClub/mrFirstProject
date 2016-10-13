function setup() {
  createCanvas( windowWidth , windowHeight );
  background( 200 , 200 , 255 );
}

function draw() {
  //background( 200 , 200 , 255 , 10 );
  fill( 0 , 0 , 255 , 20 );
  
  stroke( 0 , 0 , 0 , 10 );
  line( 0 , 0 , mouseX , mouseY);
  line( 0 , windowHeight , mouseX , mouseY);
  line( windowWidth , 0 , mouseX , mouseY );
  line( windowWidth , windowHeight , mouseX , mouseY );
  
}
