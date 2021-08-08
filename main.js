
Webcam.set({
    height:300,
    width:400,
    image_format:"png",
    png_quality:100
   });
   camera = document.getElementById("camera");
   Webcam.attach(' #camera ');

function take_snapshot(){
    Webcam.snap(function(data_uri){
    document.getElementById("result").innerHTML = '<img id="captured_image" src="' + data_uri + '"/>';
    }
    );
}

console.log('ml5 version', ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/K0c0EjaA7/model.json',modelLoaded);