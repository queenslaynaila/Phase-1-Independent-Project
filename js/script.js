const localAPI = "http://localhost:3000/kmovies";
const localAPIpopular = "http://localhost:3000/popular";
let kDramaData = [];
const imageContainer = document.getElementsByClassName("carosel-img");

console.log(imageContainer);

const getKdramaData = () => { return fetch(localAPI).then((response) => response.json());};


function updateCurrently(currentlyAiring) { for (let i = 0; i <= currentlyAiring.length; i++) {imageContainer[i].src = currentlyAiring[i].poster;}}


document.addEventListener("DOMContentLoaded", async () => {
  kDramaData = await getKdramaData();
  console.log(kDramaData);

  let recentrelease = kDramaData.filter((movie) => {
    if (movie.releasedYear == "2019") {
      return movie;
    }
  });
  console.log(recentrelease);

  let populareleases = kDramaData.filter((movie) => {
    if (movie.percentLiked >= 90) {
      return movie;
    }
  });
  console.log(populareleases);

  let currentlyAiring = kDramaData.filter((movie) => {
    if (movie.releasedYear == "2022") {
      return movie;
    }
  });
  

  console.log(currentlyAiring);

  updateCurrently(currentlyAiring);
});

{/* <div class="movie-card">
          <div class="movieimg">
            <img>
          </div>
          <div class="moviedetail">
            <h5 class="movie-card-title"></h5>
          </div>
</div> */}
