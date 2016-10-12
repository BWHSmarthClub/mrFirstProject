function setup() {
  createCanvas( 800 , 800 );
}

function draw() {
  ellipse( 50 , 50 , 110 , 110 );
}


function keyTyped() {
  if (key === 'a') {
    saveCanvas('myCanvas', 'jpg');
  }
}
