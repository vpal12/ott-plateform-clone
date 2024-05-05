document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('search-input');
    const movies = document.querySelectorAll('.movie-box');

    searchInput.addEventListener('keyup', function(event) {
        const searchTerm = event.target.value.toLowerCase();
        movies.forEach(movie => {
            const title = movie.querySelector('.movie-title').textContent.toLowerCase();
            // You can extend this to include other attributes, like genres or descriptions
            if (title.includes(searchTerm)) {
                movie.style.display = ''; // show the movie box if it matches
            } else {
                movie.style.display = 'none'; // hide the movie box if it does not match
            }
        });
    });
});

// SWIPER
var swiper = new Swiper(".popular-content", {
    slidesPerView:1,
    spaceBetween: 10,
    autoplay: {
      delay: 1900,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints:{
        280:{
            slidesPerView:1,
            spaceBetween: 10,
        },
        320:{
            slidesPerView:2,
            spaceBetween: 10,
        },
        510:{
            slidesPerView:2,
            spaceBetween: 10,
        },
        758:{
            slidesPerView:3,
            spaceBetween: 15,
        },
        900:{
            slidesPerView:4,
            spaceBetween: 20,
        }
    }
  });
  console.log("Script loaded!");


//   Show Video
let playButton = document.querySelector('.play-movie');
let video = document.querySelector('.video-container');
let myvideo = document.querySelector('#myvideo');
let closebtn = document.querySelector('.close-video');

playButton.onclick = function() {
    video.classList.add("show-video");
    myvideo.play();
};

closebtn.onclick = function() {
    video.classList.remove("show-video");
    myvideo.pause();
    myvideo.currentTime = 0; 
};

