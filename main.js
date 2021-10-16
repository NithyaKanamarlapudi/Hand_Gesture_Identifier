Webcam.set({
    width: 250,
    height: 250,
    image_format: 'png',
    png_quality: 90
}
);

camera= document.getElementById("camera");

Webcam.attach(camera);

function takeSnapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML= '<img src="'+data_uri+'" id="capturedimage">'
    })
}

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/X1iHr5JwV/model.json', modelLoaded);

function modelLoaded(){
    console.log("model loaded")
}

function identifyEmotion() {
    img=document.getElementById("capturedimage");
    classifier.classify(img, gotResult);
}

function gotResult(error, result) {
if (error){
    console.error(error);
} else {
    console.log(result);
    document.getElementById("GestureName1").innerHTML = result[0].label;
    document.getElementById("GestureName2").innerHTML = result[1].label;

    if (result[0].label == "Super"){
        document.getElementById("Gesture1").innerHTML = "&#128076";
    }
    if (result[0].label == "Good Job"){
        document.getElementById("Gesture1").innerHTML = "&#128077";
    }
    if (result[0].label == "Victory"){
        document.getElementById("Gesture1").innerHTML = "&#9996";
    }
    if (result[1].label == "Super"){
        document.getElementById("Gesture2").innerHTML = "&#128076;";
    }
    if (result[1].label == "Good Job"){
        document.getElementById("Gesture2").innerHTML = "&#128077";
    }
    if (result[1].label == "Victory"){
        document.getElementById("Gesture2").innerHTML = "&#9996";
    }
}
}