function setup() {
  createCanvas( windowWidth , windowHeight );
  //background( 200 , 200 , 255 );
}

function draw() {
  background( 200 , 200 , 255 , 30 );
  fill( 0 , 0 , 255 , 20 );
  
  line( 0 , 0 , mouseX , mouseY);
  line( 0 , windowHeight , mouseX , mouseY);
  line( windowWidth , 0 , mouseX , mouseY );
  line( windowWidth , windowHeight , mouseX , mouseY );
  
}
