//song list
let All_song = [
   {
     name: "Besharam Bewaffa",
     path: "media/128-Besharam Bewaffa - B Praak 128 Kbps.mp3",
     img: "media/besharam.jpg",
     singer: "Divya Ghosal,B Prakk"
   },
   {
     name: "Sansein",
     path: "media/Sanseinn(PagalWorld.com.se).mp3",
     img: "media/sanswin.png",
     singer: "Sawai Bhatt,H"
   },
   {
     name: "Barish Ban Jana",
     path: "media/Stebin Ben - Baarish Ban Jaana(PagalWorld.com.se).mp3",
     img: "media/barishban.png",
     singer: "Stebin Ben,Payal Dev"
   },
   {
     name: "Filhal 2",
     path: "media/Filhaal 2 Mohabbat(PagalWorld.com.se).mp3",
     img: "media/filhal2.png",
     singer: "B Prakk,Akshay Kumar"
   },
   {
     name: "Bedardi",
     path: "media/Bedardi Se Pyaar Ka(PagalWorld.com.se).mp3",
     img: "media/bedardi.png",
     singer: "Jubin Nautiyal"
   },
   {
    name: "Tu Bhi Sataya Jayega",
    path: "media/Tu Bhi Sataya Jayega(PagalWorld.com.se).mp3",
    img: "media/tubhisataya.jpg",
    singer: "Rahul Mishra"
   }
];
/*you can add more song & images from you computer*/


/*tracks*/
let tracks = document.querySelector('.tracks');

//creating a list or generating Html
for (let i = 0; i < All_song.length; i++) {

  let Html = ` <div class="song">
      <div class="img">
      <img src="${All_song[i].img}"/>
      </div>
      <div class="more">
      <audio src="${All_song[i].path}" id="music"></audio>
      <div class="song_info">
         <p id="title">${All_song[i].name}</p>
         <p>${All_song[i].singer}</p>
      </div>
      <button id="play_btn"><i class="fa fa-angle-right" aria-hidden="true"></i></button>
      </div>
    </div>`;

  tracks.insertAdjacentHTML("beforeend", Html);
};


