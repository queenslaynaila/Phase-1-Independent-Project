const popLoginForm = document.querySelector(".popup");
const showloginForm = document.querySelector("#show-login");
const closePopUpLogin = document.querySelector(".close-btn");
const userform = document.getElementsByClassName("userform");
let pagebody = document.querySelector(".main-content-section");
const deployedAPI = "https://my-pahse-1-api.herokuapp.com/kmovies";
const likeCount = document.getElementsByClassName("like-count");
const recentlyRel = document.getElementsByClassName("recentreleases");
const search = document.getElementById("search-btn");
const searchinput = document.getElementById("search-input");
let kDramaData = [];
const likebtn = document.querySelectorAll(".like-button");
const comment = document.querySelector(".submitcomment");

showloginForm.addEventListener("click", () => {
  popLoginForm.style.display = "block";
});

closePopUpLogin.addEventListener("click", () => {
  popLoginForm.style.display = "none";
});

const getKdramaData = () => {
  return fetch(deployedAPI).then((response) => response.json());
};

function filterMovieByReleaseYear(movie) {
  if (movie.releasedYear == "2019") {
    return movie;
  }
}

function filterMovieByPopularityRate(movie) {
  if (movie.percentLiked >= 90) {
    return movie;
  }
}

function getThisYearsMovie(movie) {
  if (movie.releasedYear == "2022") {
    return movie;
  }
}

document.addEventListener("DOMContentLoaded", async () => {
  kDramaData = await getKdramaData();

  let recentrelease = kDramaData.filter(filterMovieByReleaseYear);
  let populareleases = kDramaData.filter(filterMovieByPopularityRate);
  let currentlyAiring = kDramaData.filter(getThisYearsMovie);

  //-----upload recent releases to the dom----//
  const containerForRecentlyReleased = document.querySelector(".container3");
  const updateUIRecents = (recentrelease) => {
    const data = recentrelease.map((_element, _index) => {
      return `<div class="wrapper" key=${_index}>
      <div class="movie-card">
        <div class="movieimg">
          <img src=" ${_element.poster}" alt="movieposter">
        </div>
        <div class="moviedetail">
          <h3 class="movie-card-title">
            ${_element.title}
          </h3>
          <p>${_element.genre}</p>
        </div>
        <div class="like-content">
          <div>
          <button class="like-button">???</button>
          <span class="like-count" id="like-content-2">
                <span> ${_element.likes}likes</span> 
          </span>
          </div>
          <div>
          <i class="fa fa-comment " id="btn-2" aria-hidden="true"></i>
          </div>
        </div>
      </div>
    </div>`;
    });
    containerForRecentlyReleased.innerHTML = data;
  };
  updateUIRecents(recentrelease);

  //----upload popular releases to the dom ------//
  const container2 = document.querySelector(".container2");
  const updateUIPopular = (populareleases) => {
    const data = populareleases.map((_element, _index) => {
      return `<div class="wrapper" key=${_index}>
          <div class="movie-card">
            <div class="movieimg">
              <img src=" ${_element.poster}">
            </div>
            <div class="moviedetail">
              <h3 class="movie-card-title" alt="movieposter">
                ${_element.title}
            </h3>
            <p>${_element.genre}</p>  
            </div>
            <div class="like-content">
              <div>
              <button class="like-button">???</button>
              <span class="like-count" id="like-content-2">
              <span> ${_element.likes}likes</span> 
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
  const contain = document.querySelector(".container");

  const updateUI = (currentlyAiring) => {
    const data = currentlyAiring.map((_element, _index) => {
      return `<div class="wrapper" key=${_index}>
      <div class="movie-card">
        <div class="movieimg">
          <img src=" ${_element.poster}" alt="movieposter">
        </div>
        <div class="moviedetail">
          <h3 class="movie-card-title">
            ${_element.title}
          </h3>
          <p>${_element.genre}</p>   
        </div>
        <div class="like-content">
          <div>
          <button class="like-button" > ??? </button>
          <span class="like-count" id="like-content-2">
                <span> ${_element.likes}likes</span> 
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

  // search an indivdual movie
  search.addEventListener("click", (e) => {
    e.preventDefault();

    kDramaData.map((movie) => {
      if (movie.title === searchinput.value) {
        pagebody.innerHTML = `<div class="totaldescrption">
              <div class="movie-full-card">
              <div class="movie-full-img">
              <img src="${movie.poster}">
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
              <h2>${movie.title}</h2>
              <p>Average Rating:${movie.imdbRating}</p>
              <h3>Summary</h3>
                <p>${movie.summary}</p>
                <input type="text" class="user" placeholder="Enter your name">
                <input type="text" class="comment" placeholder="Enter your comment">
                <button id="comment-1" class="submit">Post Comment</button><br>
                <h3>COMMENTS</h3> 
                <ul id="listComments"></ul>
      
                </div>
            </div>`;
      }
    });
  });
});
