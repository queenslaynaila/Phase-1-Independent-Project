// ----define all needed variabless---//
const popuplogin = document.querySelector(".popup");
const showlogin = document.querySelector("#show-login");
const closebtn = document.querySelector(".close-btn");
const homeBtn = document.getElementById("homebtn");
const categoriesBtn = document.getElementById("categoriesbtn");
const faq = document.getElementById("FAQ");
const userform = document.getElementsByClassName("userform");
let pagebody = document.getElementsByClassName("main-content-section");
const localAPI = "http://localhost:3000/kmovies";
const localAPIpopular = "http://localhost:3000/popular";

let kDramaData = [];
const recentlyRel = document.getElementsByClassName("recentreleases");

//---makelogin form appear-----//
showlogin.addEventListener("click", () => {
  popuplogin.style.display = "block";
});
// ---make login form disapear-----//
closebtn.addEventListener("click", () => {
  popuplogin.style.display = "none";
});
//-----fetch from server-------//
const getKdramaData = () => {
  return fetch(localAPI).then((response) => response.json());
};

document.addEventListener("DOMContentLoaded", async () => {
  kDramaData = await getKdramaData();

  let recentrelease = kDramaData.filter((movie) => {
    if (movie.releasedYear == "2019") {
      return movie;
    }
  });

  //-----upload recent releases to the dom----//
  const container3 = document.querySelector(".container3");
  const updateUIRecents = (recentrelease) => {
    const data = recentrelease.map((_element, _index) => {
      console.log(_element.title);
      return `<div class="wrapper" key=${_index}>
          <div class="movie-card">
            <div class="movieimg">
              <img src=" ${_element.poster}">
            </div>
            <div class="moviedetail">
              <h3 class="movie-card-title">
                ${_element.title}
              </h3>
            </div>
            <div class="like-content">
              <div>
              <i class="fa fa-heart delete redbtn" id="like-2" aria-hidden="true"></i>
              <span class="like-count" id="like-content-2">
                    <span> ${_element.likes}</span> 
              </span>
              </div>
              <div>
              <i class="fa fa-comment" id="btn-2" aria-hidden="true"></i>
              </div>
            </div>
          </div>
        </div>`;
    });
    container3.innerHTML = data;
  };
  updateUIRecents(recentrelease);

  //----upload popular releases to the dom ------//
  let populareleases = kDramaData.filter((movie) => {
    if (movie.percentLiked >= 90) {
      return movie;
    }
  });

  const container2 = document.querySelector(".container2");
  const updateUIPopular = (populareleases) => {
    const data = populareleases.map((_element, _index) => {
      console.log(_element.title);
      return `<div class="wrapper" key=${_index}>
          <div class="movie-card">
            <div class="movieimg">
              <img src=" ${_element.poster}">
            </div>
            <div class="moviedetail">
              <h3 class="movie-card-title">
                ${_element.title}
              </h3>
            </div>
            <div class="like-content">
              <div>
              <i class="fa fa-heart delete redbtn" id="like-2" aria-hidden="true"></i>
              <span class="like-count" id="like-content-2">
                    <span> ${_element.likes}</span> 
              </span>
              </div>
              <div>
              <i class="fa fa-comment" id="btn-2" aria-hidden="true"></i>
              </div>
            </div>
          </div>
        </div>`;
    });
    container2.innerHTML = data;
  };
  updateUIPopular(populareleases);

  // -----upload currently airing to DOM----//
  let currentlyAiring = kDramaData.filter((movie) => {
    if (movie.releasedYear == "2022") {
      return movie;
    }
  });

  const contain = document.querySelector(".container");

  const updateUI = (currentlyAiring) => {
    const data = currentlyAiring.map((_element, _index) => {
      console.log(_element.title);
      return `<div class="wrapper" key=${_index}>
          <div class="movie-card">
            <div class="movieimg">
              <img src=" ${_element.poster}">
            </div>
            <div class="moviedetail">
              <h3 class="movie-card-title">
                ${_element.title}
              </h3>
            </div>
            <div class="like-content">
              <div>
              <i class="fa fa-heart delete redbtn" id="like-2" aria-hidden="true"></i>
              <span class="like-count" id="like-content-2">
                    <span> ${_element.likes}</span> 
              </span>
              </div>
              <div>
              <i class="fa fa-comment" id="btn-2" aria-hidden="true"></i>
              </div>
            </div>
          </div>
        </div>`;
    });
    contain.innerHTML = data;
  };
  updateUI(currentlyAiring);

  search.addEventListener("click", (e) => {
    e.preventDefault();

    console.log(kDramaData[9]);

    for (let i = 0; i <= kDramaData.length; i++) {
      if (sinput.value === kDramaData[i].title) {
        console.log(kDramaData[i]);
        document.body.innerHTML = "";
        document.body.innerHTML = `<div class="totaldescrption">
        <div class="movie-full-card">
          <div class="movie-full-img">
            <img src="${kDramaData[i].poster}">
          </div>
    
          <div class="like-content">
            <i class="fa fa-heart delete redbtn" id="like-2" aria-hidden="true"></i>
            <span class="like-count" id="like-content-2">
              <span>54</span>
            </span>
            <i class="fa fa-comment" id="btn-2" aria-hidden="true"></i>
          </div>
        </div>
        <div class="description">
          <h2>${kDramaData[i].title}</h2>
          <p>Average Rating;</p>
          <h3>Summary</h3>
          <p>${kDramaData[i].summary}</p>
          <input type="text" class="user" placeholder="Enter your name">
          <input type="text" class="comment" placeholder="Enter your comment">
          <button id="comment-1" class="submit">Post Comment</button><br>
          <h3>COMMENTS</h3>
          <P>${kDramaData[i].comments["content"]}</P>
        </div>
      </div>
    `;
      }
    }
  });
});

const nav = document.getElementsByClassName("nav");
const search = document.getElementById("search-btn");
const sinput = document.getElementById("search-input");

const c = document.getElementsByTagName("section");
let tttt = document.getElementsByClassName("sec");
