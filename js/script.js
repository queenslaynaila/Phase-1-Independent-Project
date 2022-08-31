const localAPI = "http://localhost:3000/kmovies";
const localAPIpopular = "http://localhost:3000/popular";
let kDramaData = [];
const nowairing = document.getElementsByClassName("wrapper");
console.log(nowairing);
const imageContainer = document.getElementsByClassName("carosel-img");

console.log(imageContainer);
const recentlyRel = document.getElementsByClassName("recentreleases");
const getKdramaData = () => {
  return fetch(localAPI).then((response) => response.json());
};

// function updateCurrently(currentlyAiring) { for (let i = 0; i <= currentlyAiring.length; i++) {imageContainer[i].src = currentlyAiring[i].poster;}}

document.addEventListener("DOMContentLoaded", async () => {
  kDramaData = await getKdramaData();
  console.log("KdramaData:", kDramaData);

  let recentrelease = kDramaData.filter((movie) => {
    if (movie.releasedYear == "2019") {
      return movie;
    }
  });
  console.log(recentrelease);
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
      </div>
    </div>`;
    });
    container3.innerHTML = data;
  };
  updateUIRecents(recentrelease);

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
      </div>
    </div>`;
    });
    container2.innerHTML = data;
  };
  updateUIPopular(populareleases);

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
      </div>
    </div>`;
    });
    contain.innerHTML = data;
  };
  updateUI(currentlyAiring);
});
