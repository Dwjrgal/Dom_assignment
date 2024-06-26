const playBtn = document.getElementsByTagName("button")[0];
const nextBtn = document.getElementsByTagName("button")[1];
const audioPlayer = document.getElementsByTagName("audio")[0];
const playIcon = document.getElementsByClassName("fa-play")[0];
const plauseIcon = document.getElementsByClassName("fa-pause")[0];
const songTitle = document.getElementById("songTitle");

const playList = [
  {
    name: "UKULELE",
    src: "./assets/songs/music-player_music_ukulele.mp3",
  },
  {
    name: "SUMMER",
    src: "./assets/songs/music-player_music_summer.mp3",
  },
];
const playListName = ["SUMMER"];
let currentSong = 0;

playBtn.addEventListener("click", () => {
  // duugaa togluulna
  //   audioPlayer.paused // => true
  //tuhain duu yavj bga eseh
  console.log("CS", currentSong);
  console.log("AP", audioPlayer.paused);
  if (audioPlayer.paused) {
    //tuhain duu zogsoj bga
    audioPlayer.play();
    // playBtn.textContent = "Pause";
    playIcon.classList.add("hide");
    plauseIcon.classList.remove("hide");
    songTitle.textContent = playList[currentSong].name;
  } else {
    // tuhain duu yavj bga
    audioPlayer.pause();
     // playBtn.textContent = "Play";
     playIcon.classList.remove("hide");
     plauseIcon.classList.add("hide");
   }
   console.log("AP", audioPlayer.paused);
 });
 
nextBtn.addEventListener("click", () => {
    currentSong++;
    // daraagiin duug toguluulah
    if (currentSong === playList.length) {
      currentSong = 0;
    }
    audioPlayer.src = playList[currentSong].src;
    songTitle.textContent = playList[currentSong].name;
    audioPlayer.play();
    console.log("CS", currentSong);
  });
  