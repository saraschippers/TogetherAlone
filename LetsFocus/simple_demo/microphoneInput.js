//let img;
//var opacity = 0;
//var opacityfilm = 255;

let filmpje;
let mic;
let vol;
var opacityfilm = 1;

// function preload() {
//   img = loadImage('Video call buttons.png'); // here the video call buttons are uploaded
// }


function setup() {
//  createCanvas(700, 400);
  frameRate(60);
  // filmpje = createVideo('filmpje.mp4');
  // filmpje.hide();
  mic = new p5.AudioIn();  //this is where the microphone is introduced
  mic.start();  //this is where the microphone starts working
}

function draw() {
changeVideo();
//   image(img, 280,350,150,30);  //these are the video call buttons
//   //  noFill();
// //  rect(ax,ay,facex,facey);   //this is the rectangle around the face

 }

function changeVideo() {
  // background(0);
  // tint(255,opacityfilm);  //this is the opacity of the video "filmpje"
  // image(filmpje,0,0,width,height);  //this is the video of Lisa talking
  var vol = mic.getLevel();  //this is where the volume level gets measured
  console.log(vol);  //this displays the numbers of the volume
//if (mouseX > ax && mouseX < ax + facex && mouseY > ay && mouseY < ay + facey) {
// opacityfilm -= 1;
// }
        //this is where the mouse in the face rectangle makes the video go transparent
  if (vol > 0.01){
    opacityfilm -= 0.0001;               //stapjes van opacity change
    videoOpacity = opacityfilm;
    changeOpacity();
    console.log (opacityfilm);
  }
}

// function onLoad(){
//   filmpje.play();
//   if (getAudioContext().state !== 'running') {
//     getAudioContext().resume();
//   }
// }
