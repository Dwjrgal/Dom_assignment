const musicContainer = document.querySelector('.player-box');
const playBtn  = document.querySelector('#play');
const prevBtn = document.querySelector('#prev');
const nextBtn = document.querySelector('#next');
const audio  = document.querySelector('#audio');
// const musicContainer = document.querySelector('.player-box');
// const musicContainer = document.querySelector('.player-box');


//Song titles
const songs = ['i need u','hey','summer']

//Keep track of songs
let songIndex =2

//Initially load song info DOM
loadSong(songs[songIndex])

//Update song details
function loadSong(song){
    title.innerText =song
    audio.src = `music/${song}.mp3`
    cover.src = `images/${song}.jpg`
}

function playSong(){
    player-box.classList.add('play')
    playBtn.querySelector('i.fas').classList.remove('fa-play')
    playBtn.querySelector('i.fas').classList.add('fa-pause')
}

function pauseSong(){
    player-box.classList.remove('play')
    playBtn.querySelector('i.fas').classList.add('fa-play')
    playBtn.querySelector('i.fas').classList.remove('fa-pause')

    audio.pause()
}

function prevSong(){
    songIndex--

    if (songIndex <0){
        songIndex = songs.length -1
    }

    loadSong(songs[songIndex])

    playSong()

}

function nextSong(){
    songIndex++

    if (songIndex > songs.lenght-1){
        songIndex = 0
    }

    loadSong(songs[songIndex])

    playSong()

}

//Event listeners 
playBtn.addEventListener('click',()=>{
    const isPlaying = musicContainer.classList.contains('play')
    if (isPlaying){
        pauseSong()
    }else{
        playSong()
    }

})

//Change song events
prevBtn.addEventListener('click',prevSong)
nextBtn.addEventListener('click',nextSong)
