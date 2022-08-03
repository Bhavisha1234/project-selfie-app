var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

function start(){
    document.getElementById("textbox").innerHTML="";
    recognition.start();
}

recognition.onresult = function(event){
    console.log(event);
    var content = event.results[0][0].transcript;
    document.getElementById("textbox").innerHTML = content;
    console.log(Content);

    if(Content =="take my selfie")
    {
        console.log("taking selfie ---");
        speak();
    }
    
   
}
function speak(){
    var synth = window.speechSynthesis;
    speak_data = "Thaking your Selfie in 5 seconds";
    var utter_this = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utter_this);
    Webcam.attach(camera);
}
Webcam.set({
    width:360 , 
    height:250 ,
    image_format:'png' ,
    png_quality:90
});
camera = document.getElementById("camera");

function take_snapshot()
{

    Webcam.snap(function(data_uri)  {
       document.getElementById("result").innerHTML = '<img id="selfie_image" src="'+data_uri+'">';
    });
}