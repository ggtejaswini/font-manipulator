leftWristX = 0;
rightWristX = 0;
difference = 0;

function setup(){
    video = createCapture(VIDEO);
    video.size(500,500);
    

    canvas = createCanvas(650,550);
    canvas.position(660,150);

    poseNet = ml5.poseNet(video, modelloaded);
    poseNet.on('pose', gotposes);
}

function modelloaded(){
    console.log('Model Is Loaded!');
}
function draw(){
    background('#99779');

    fill("black");
    text('I love Coding' , 50,400);
}
function gotposes(results){
    if (results > 0){
        console.log(results);

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX)
        textSize(difference);
    }
}