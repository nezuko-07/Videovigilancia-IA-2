video = "";

status = "";

function preload(){
 video = createVideo('video.mp4');
 video.hide();
}
function draw(){
    image(video,0,0,500,500);
}
function setup(){
    canvas = createCanvas(500,500);
    canvas.center();
}
function play(){
    objectDetector = ml5.objectDetector('cocossd',modelloaded);
    document.getElementById("status").innerHTML = "estado: detectando objetos";
}
function modelloaded(){
    console.log("modelo cargado");
    status = true;
    video.loop();
    video.speed(2.5);
    video.volume(0.5);
}