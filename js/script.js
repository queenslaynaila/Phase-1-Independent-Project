// ----define all needed variabless---//
const popuplogin = document.querySelector(".popup");
const showlogin = document.querySelector("#show-login");
const closebtn = document.querySelector(".close-btn");
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
  console.log("KdramaData:", kDramaData);

  let recentrelease = kDramaData.filter((movie) => {
    if (movie.releasedYear == "2019") {
      return movie;
    }
  });
  console.log("Recentrelease:", recentrelease);

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
  console.log("popularDATA", populareleases);
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

  console.log("CUURENTAIRING:", currentlyAiring);

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
});
