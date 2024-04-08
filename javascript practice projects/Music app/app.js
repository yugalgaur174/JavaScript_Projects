let progress = document.getElementById("progress");
let song = document.getElementById("song");
let ctrlIcon = document.getElementById("ctrlIcon");

song.onloadedmetadata = function(){
    progress.max = song.duration; // Corrected property name
    progress.value = song.currentTime;
}

function playPause(){
    if(ctrlIcon.classList.contains("fa-pause")){
        song.pause();
        ctrlIcon.classList.remove("fa-pause");
        ctrlIcon.classList.add("fa-play");
        
    }
    else{
        song.play();
        ctrlIcon.classList.remove("fa-play");
        ctrlIcon.classList.add("fa-pause");
    }
}

song.addEventListener('timeupdate', function(){
    progress.value = song.currentTime;
});

progress.onchange = function(){
    song.currentTime = progress.value;
    song.play(); // Start playing after seeking
    ctrlIcon.classList.remove("fa-pause");
    ctrlIcon.classList.add("fa-play");
}
