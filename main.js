var SpeechRecognition = window.webkitSpeechRecognition;

var recoginition = new SpeechRecognition();

function start() {

document.getElementById("textbox").innerHTML="";

recoginition.start();

}

recoginition.onresult=function(event){

console.log(event);

var Content = event.results[0][0].transcript;

document.getElementById("textbox").innerHTML = Content;

if(Content = "take my selfie") {

speak();    

}

}

function speak() {

synth = window.speechSynthesis;

speak_data = "Taking your Selfie in 5 seconds";

utterThis = new SpeechSynthesisUtterance(speak_data);

synth.speak(utterThis);

Webcam.attach(camera); 

setTimeout(function() {

takesnap();

save();

}, 5000);

}

Webcam.set({

width:360,

height:250,

image_format : 'png',

png_quality : 90

});

camera = document.getElementById("camera");

function takesnap() {

Webcam.snap(function(data_uri) {

    document.getElementById("result").innerHTML = "<img id='selfie' src="+data_uri+">"

});    
    
}

function save() {

link = document.getElementById("links");

image = document.getElementById("selfie").src;

link.href = image;

link.click();

}