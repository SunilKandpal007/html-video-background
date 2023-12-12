var vidA1 = document.getElementById('vid1');
var btnA1 = document.getElementById('playVid');

function playMe(){
    if(vidA1.paused){
        vidA1.play();
        btnA1.innerHTML = "PLAY";
    }
    else{
        vidA1.pause();
        btnA1.innerHTML = "PAUSE";
    }
}