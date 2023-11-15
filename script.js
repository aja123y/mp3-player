 let value = document.querySelector("#value");
 let song = document.querySelector("#song");
 let ctrlIcon = document.querySelector("#ctrlIcon");

 song.onloadedmetadata = function(){
    value.max = song.duration;
    value.value = song.currentTime;
 }

 function playPause(){
    if(ctrlIcon.classList.contains("fa-pause")){
        song.pause();
        ctrlIcon.classList.remove("fa-pause");
        ctrlIcon.classList.add("fa-play");
    }
    else{
        song.play();
        ctrlIcon.classList.add("fa-pause");
        ctrlIcon.classList.remove("fa-play");
    }
 }

 if(song.play()){
    setInterval(()=>{
        value.value = song.currentTime;
    },500);
 }

 value.onchange = function(){
    song.play();
    song.currentTime = value.value;
    ctrlIcon.classList.add("fa-pause");
    ctrlIcon.classList.remove("fa-play");
 }
 

