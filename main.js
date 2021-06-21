function preload(){
clown_nose=loadImage('https://i.postimg.cc/wMNqy7qN/image.png');
}

function setup(){
var canvas=createCanvas(400, 400);
canvas.position(550, 250)
video=createCapture(VIDEO)
video.size(400, 400);
video.hide();
poseNet=ml5.poseNet(video, modelLoaded);
poseNet.on('pose',gotPoses)
}
function gotPoses(results){
if(results.length>0)
{
console.log(results)
noseX=results[0].pose.nose.x-15;
noseY=results[0].pose.nose.y-15;
}
}
noseX=0;
noseY=0;
function draw(){
image(video, 0, 0, 400, 400);
image(clown_nose,noseX, noseY, 30, 30)
}

function modelLoaded(){
console.log("poseNet is loaded!")
}

function take_snapshot(){
save('mustache.png')
}