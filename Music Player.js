const music =new Audio("https://firebasestorage.googleapis.com/v0/b/music-app-a2d36.appspot.com/o/data%2Fmusic%2F1.mp3?alt=media&token=1f32e832-cb99-4837-b2b1-6b032f082b31");

const songs =[
    {
        id: 1,
        songName: 'On My Way <div class="subtitle">Alan Walker</div>',
        song: "https://firebasestorage.googleapis.com/v0/b/music-app-a2d36.appspot.com/o/data%2Fmusic%2F1.mp3?alt=media&token=1f32e832-cb99-4837-b2b1-6b032f082b31",
        poster: "https://firebasestorage.googleapis.com/v0/b/music-app-a2d36.appspot.com/o/data%2F1.jpg?alt=media&token=f1f084f8-d99a-478c-bb0a-5368d69969b2"
        
    },
    {
        id: 2,
        songName: 'Lovely <div class="subtitle">Billie Eilish, Khalid</div>',
        song: "https://firebasestorage.googleapis.com/v0/b/music-app-a2d36.appspot.com/o/data%2Fmusic%2F1.mp3?alt=media&token=1f32e832-cb99-4837-b2b1-6b032f082b31",
        poster: "https://firebasestorage.googleapis.com/v0/b/music-app-a2d36.appspot.com/o/data%2F1.jpg?alt=media&token=f1f084f8-d99a-478c-bb0a-5368d69969b2"
    },
    {
        id: 3,
        songName: 'Blinding Lights <div class="subtitle">The Weeknd</div>',
        song: "https://firebasestorage.googleapis.com/v0/b/music-app-a2d36.appspot.com/o/data%2Fmusic%2F2.mp3?alt=media&token=964029a7-3480-4e6c-948a-cfbd935d5515",
        poster: "https://firebasestorage.googleapis.com/v0/b/music-app-a2d36.appspot.com/o/data%2F2.jpg?alt=media&token=e01311e3-4f47-453f-8044-7416f7f7c7b4"
    },
    {
        id: 4,
        songName: 'Arcade <div class="subtitle">Duncan Laurence</div>',
        song:"https://firebasestorage.googleapis.com/v0/b/music-app-a2d36.appspot.com/o/data%2Fmusic%2F3.mp3?alt=media&token=09aee069-8ba8-42d4-a8c9-74c220506af7",
        poster: "https://firebasestorage.googleapis.com/v0/b/music-app-a2d36.appspot.com/o/data%2F3.jpg?alt=media&token=88fd5b06-946c-4b67-b295-f56a08d96292"
    },
    {
        id: 5,
        
        songName: 'Jocelyn Flores <div class="subtitle">XXXTENTACION</div>',
        song: "https://firebasestorage.googleapis.com/v0/b/music-app-a2d36.appspot.com/o/data%2Fmusic%2F5.mp3?alt=media&token=8872ad17-d764-419d-8c59-c8ebc6b7c36e",
        poster: "https://firebasestorage.googleapis.com/v0/b/music-app-a2d36.appspot.com/o/data%2F5.jpg?alt=media&token=f7170d5b-83f9-4a6c-8619-3b7f0d1f9d49"
    },
    {
        id: 6,
        songName: 'Excuses <div class="subtitle">AP Dhillon, Intense</div>',
        song: "https://firebasestorage.googleapis.com/v0/b/music-app-a2d36.appspot.com/o/data%2Fmusic%2F6.mp3?alt=media&token=c584ce91-73d0-4334-9229-0b35cca80692",
        poster: "https://firebasestorage.googleapis.com/v0/b/music-app-a2d36.appspot.com/o/data%2F6.jpg?alt=media&token=5573af99-cd1f-4798-9c2c-61d74a15d20b"
    },
    {
        id: 7,
        songName: 'Kina Chir <div class="subtitle">The PropheC</div>',
        song: "https://firebasestorage.googleapis.com/v0/b/music-app-a2d36.appspot.com/o/data%2Fmusic%2F7.mp3?alt=media&token=d28fb1ff-7222-4a3a-bf2b-e0dec580cb17",
        poster: "https://firebasestorage.googleapis.com/v0/b/music-app-a2d36.appspot.com/o/data%2F7.jpg?alt=media&token=0d5580df-9117-449e-9c67-09a8bb742229"
    },
    {
        id: 8,
        songName: 'Chan Vekhya <div class="subtitle">Harnoor</div>',
        poster: "https://firebasestorage.googleapis.com/v0/b/music-app-a2d36.appspot.com/o/data%2F8.jpg?alt=media&token=511eed1d-5a4d-4a67-8da2-9743d5ea64cf",
        song: "https://firebasestorage.googleapis.com/v0/b/music-app-a2d36.appspot.com/o/data%2Fmusic%2F8.mp3?alt=media&token=8cfe119c-c426-4c74-83d4-8c2ca8e4f110"
    },
    {
        id: 9,
        songName: 'Brown Munde <div class="subtitle">AP Dhillon, Gminxr</div>',
        song:"https://firebasestorage.googleapis.com/v0/b/music-app-a2d36.appspot.com/o/data%2Fmusic%2F9.mp3?alt=media&token=531ad47e-ba3f-4a12-9834-4bcc50a71b92",
        poster: "https://firebasestorage.googleapis.com/v0/b/music-app-a2d36.appspot.com/o/data%2F9.jpg?alt=media&token=e0e8c99b-4929-4e4b-a257-2e42b2593196"
    },
    {
        id: 10,
        songName: 'We Rollin <div class="subtitle">Shubh</div>',
        song:"https://firebasestorage.googleapis.com/v0/b/music-app-a2d36.appspot.com/o/data%2Fmusic%2F10.mp3?alt=media&token=b96079bf-cc45-4c89-a964-78db426fe502",
        poster: "https://firebasestorage.googleapis.com/v0/b/music-app-a2d36.appspot.com/o/data%2F10.jpg?alt=media&token=39a9e075-0f25-4120-8d9a-fc1b4c803ccd"
    },
    {
        id: 11,
        songName: 'Heat Waves <div class="subtitle">Glass Animals</div>',
        song:"https://firebasestorage.googleapis.com/v0/b/music-app-a2d36.appspot.com/o/data%2Fmusic%2F11.mp3?alt=media&token=69f3df80-beba-4f9b-bc24-e9a24d82c2b7",
        poster: "https://firebasestorage.googleapis.com/v0/b/music-app-a2d36.appspot.com/o/data%2F11.jpg?alt=media&token=1ef12257-7306-4e12-9857-657c65a4e935"
    },
    {
        id: 12,
        songName: 'No Time <div class="subtitle">KSI</div>',
        song:"https://firebasestorage.googleapis.com/v0/b/music-app-a2d36.appspot.com/o/data%2Fmusic%2F12.mp3?alt=media&token=9e232140-9050-432b-a24b-4bbf9b6ec54d",
        poster: "https://firebasestorage.googleapis.com/v0/b/music-app-a2d36.appspot.com/o/data%2F12.jpg?alt=media&token=83722265-cee2-4812-b8fd-458d0f240df2"
    },
    {
        id: 13,
        songName: 'Paradise <div class="subtitle">Coldplay</div>',
        song:"https://firebasestorage.googleapis.com/v0/b/music-app-a2d36.appspot.com/o/data%2Fmusic%2F13.mp3?alt=media&token=5a6ec324-0b39-4aa1-9f9a-e515f23bf59f",
        poster: "https://firebasestorage.googleapis.com/v0/b/music-app-a2d36.appspot.com/o/data%2F13.jpg?alt=media&token=b5b12d91-b973-48a4-99f6-80850ba17ffb"
    },
    {
        id: 14,
        songName: 'Paradise <div class="subtitle">Coldplay</div>',
        song:"https://firebasestorage.googleapis.com/v0/b/music-app-a2d36.appspot.com/o/data%2Fmusic%2F14.mp3?alt=media&token=75da442a-5505-400b-8ac1-140efe635d5b",
        poster: "https://firebasestorage.googleapis.com/v0/b/music-app-a2d36.appspot.com/o/data%2F14.jpg?alt=media&token=fd2fdbb0-222e-4cbd-a5c6-6964aab89bb8"
    }
]


Array.from(document.getElementsByClassName('songItem')).forEach((e,il)=>{
    e.getElementsByTagName('img')[0].src=songs[il+1].poster;
    e.getElementsByTagName('h5')[0].innerHTML=songs[il].songName;
}
)

Array.from(document.getElementsByClassName('song_item')).forEach((e,i)=>{
    e.getElementsByTagName('img')[0].src=songs[i+1].poster;
    e.getElementsByTagName('h5')[0].innerHTML=songs[i].songName;
}
)

let masterPlay = document.getElementById('masterPlay');
let wave = document.getElementById('wave');

masterPlay.addEventListener('click', ()=>{
    if(music.paused || music.currentTime<=0){
        music.play();
        wave.classList.add('active2');
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
    }
    else{
        music.pause();
        wave.classList.remove('active2');
        masterPlay.classList.add('bi-play-fill');
        masterPlay.classList.remove('bi-pause-fill');
    }
})

const makeAllBackground =()=>{
    Array.from(document.getElementsByClassName('song_item')).forEach((el)=>{
        el.style.background ='rgba(245, 100, 169, 0)';
    })
}

const makeAllPlays =()=>{
    Array.from(document.getElementsByClassName('playlistplay')).forEach((el)=>{
        el.classList.remove('bi-arrow-clockwise');
        el.classList.add('bi-play-circle-fill');
    })
}

let index = 0;
let poster_master_play = document.getElementById('poster_master_play');
let title =document.getElementById('title');

Array.from(document.getElementsByClassName('playlistplay')).forEach((e)=>{
    e.addEventListener('click', (el)=>{
        index = el.target.id;
        poster_master_play.src = songs[index].poster;
        music.src = songs[index].song;
        music.play();
        wave.classList.add('active2');
        masterPlay.classList.remove('bi-play-fill')
        masterPlay.classList.add('bi-pause-fill')

        let songTitle = songs.filter((els)=>{
            return els.id == index;
        });

        songTitle.forEach(elss=>{
            let {songName} = elss;
            title.innerHTML = songName;
        })

        makeAllBackground();
        Array.from(document.getElementsByClassName('song_item'))[index-1].style.background = "rgba(245, 100, 169, .2)";
        makeAllPlays();
        el.target.classList.remove('bi-play-circle-fill');
        el.target.classList.add('bi-arrow-clockwise');

        let back =document.getElementById('back');
        let next=document.getElementById('next');

        back.addEventListener('click', ()=>{
            index--;
            poster_master_play.src = songs[index].poster;
            music.src = songs[index].song;
            music.play();
            wave.classList.add('active2');
            masterPlay.classList.remove('bi-play-fill')
            masterPlay.classList.add('bi-pause-fill')

            let songTitle = songs.filter((els)=>{
                return els.id == index;
            });

            songTitle.forEach(elss=>{
                let {songName} = elss;
                title.innerHTML = songName;
            })

            makeAllBackground();
            Array.from(document.getElementsByClassName('song_item'))[index-1].style.background = "rgba(245, 100, 169, .3)";
            makeAllPlays();
            el.target.classList.remove('bi-play-circle-fill');
            el.target.classList.add('bi-arrow-clockwise');
        });
        next.addEventListener('click', ()=>{
            index++;
            poster_master_play.src = songs[index].poster;
            music.src = songs[index].song;
            music.play();
            wave.classList.add('active2');
            masterPlay.classList.remove('bi-play-fill')
            masterPlay.classList.add('bi-pause-fill')

            let songTitle = songs.filter((els)=>{
                return els.id == index;
            });

            songTitle.forEach(elss=>{
                let {songName} = elss;
                title.innerHTML = songName;
            })

            makeAllBackground();
            Array.from(document.getElementsByClassName('song_item'))[index-1].style.background = "rgba(245, 100, 169, .3)";
            makeAllPlays();
            el.target.classList.remove('bi-play-circle-fill');
            el.target.classList.add('bi-arrow-clockwise');
        });

    })
})


let pop_song_left =document.getElementById('pop_song_left');
let pop_song_right =document.getElementById('pop_song_right');
let pop_song =document.getElementsByClassName('pop_song')[0];

pop_song_right.addEventListener('click', ()=>{
    pop_song.scrollLeft += 330;
}
)

pop_song_left.addEventListener('click', ()=>{
    pop_song.scrollLeft -= 330;
}
)

let pop_art_left =document.getElementById('pop_art_left');
let pop_art_right= document.getElementById('pop_art_right');
let pop_art=document.getElementsByClassName('item')[0];

pop_art_right.addEventListener('click', ()=>{
    pop_art.scrollLeft +=220;
});

pop_art_left.addEventListener('click', ()=>{
    pop_art.scrollLeft -=220;
});

let currentStart =document.getElementById('currentStart');
let currentEnd =document.getElementById('currentEnd');
let seek =document.getElementById('seek');
let bar2 =document.getElementById('bar2');
let dot =document.getElementById('dot');

music.addEventListener('timeupdate', ()=>{
    let music_curr=music.currentTime;
    let music_dur=music.duration;
    let min1=Math.floor(music_dur/60);
    let sec1=Math.floor(music_dur%60);
    if(sec1<10)
    {
        sec1='0'+sec1;
    }

    currentEnd.innerText= min1+':'+sec1;

    let min2=Math.floor(music_curr/60);
    let sec2=Math.floor(music_curr%60);
    if(sec2<10)
    {
        sec2='0'+sec2;
    }

    currentStart.innerText=min2+':'+sec2;

    let progressBar =parseInt((music_curr/music_dur)*100);
    seek.value=progressBar;
    let seekbar=seek.value;
    bar2.style.width= seekbar+'%';
    dot.style.left= seekbar+'%';   
});

seek.addEventListener('change', ()=>{
    music.currentTime =seek.value * music.duration /100;
})


let vol_icon =document.getElementById('vol_icon');
let vol =document.getElementById('vol');
let bar3=document.getElementById('bar3');

vol.addEventListener('change', ()=>{
    if(vol.value == 0){
        vol_icon.classList.remove('bi-volume-up-fill');
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.add('bi-volume-off-fill');
    }
    if(vol.value> 0){
        vol_icon.classList.remove('bi-volume-up-fill');
        vol_icon.classList.add('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-off-fill');
    }
    if(vol.value>50){
        vol_icon.classList.add('bi-volume-up-fill');
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-off-fill');
    }

    let vol_a=vol.value;
    bar3.style.width = vol_a+'%';
    music.volume=vol_a/100;
});


