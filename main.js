song = "";
left_wrist_x =0;
right_wrist_x=0;

left_wrist_y =0;
right_wrist_y=0;

function preload(){
    song = loadSound("music.mp3");
}

function setup(){
    canvas = createCanvas(600,500);
    canvas.center();

video = createCapture(VIDEO);
video.hide()

posenet = ml5.poseNet(video, modelLoaded);
posenet.on('pose', gotPoses);

}

function modelLoaded(){
    console.log("posenet is initialized");
}

function draw(){
    image(video,0,0,600,500);
}

function start(){
    song.play();
    song.setVolume(1);
    song.rate(1);
}

function gotPoses(results){
    if (results.lenght > 0){
        console.log(results);
        left_wrist_x = results[0].poses.leftWrist.x;
        right_wrist_x= results[0].poses.rightWrist.x;
        console.log("left wrist x = "+left_wrist_x+"right_wrist_x="+right_wrist_x);

        left_wrist_y = results[0].poses.leftWrist.y;
        right_wrist_y= results[0].poses.rightWrist.y;
        console.log("left wrist y = "+left_wrist_y+"right_wrist_y="+right_wrist_y);

    }
}