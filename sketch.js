function setup() {
  createCanvas( 800 , 800 );
  //background( 200 , 200 , 255 );
}

function draw() {
  background( 200 , 200 , 255 , 30 );
  fill( 0 , 0 , 255 , 20 );
  
  for( var i = 0 ; i < 10 ; i++ ) {
    ellipse( mouseX+10*i-50 , mouseY+10*i-50 , 10 , 10 );
  }
}
