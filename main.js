noseX = 0
    noseY = 0
function preload(){
    mustacheImage = loadImage('https://i.postimg.cc/3x3QzSGq/m.png');
    }
    
    function setup(){
        canvas = createCanvas(300, 300);
        canvas.center();
      
     video =createCapture(VIDEO);
     
    video.size(300,300)
    video.hide();
   
    
    
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses)
    }
    function draw(){
        image(video,0, 0, 300, 300)
       image(mustacheImage, noseX, noseY, 20, 20);
    }
    function take_snapshot(){
        save("summer.png")
    }
    function modelLoaded(){
        console.log("Posenet model is initialized.")
    }
    function gotPoses(results){
        if(results.length > 0){
            console.log(results);
            console.log("noseX " + results[0].pose.nose.x)
            console.log("noseY" + results[0].pose.nose.y)
            noseX = results[0].pose.nose.x - 8
            noseY = results[0].pose.nose.y 
            
        }
    }
        
    
    
    
    
    
    