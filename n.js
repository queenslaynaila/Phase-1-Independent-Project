const arr = [
  {
    title: "100 Days My Prince",
    director: "Lee Jong-jae",
    distributor: "tvN",
    leadActor: "Do Kyung-soo",
  },
  {
    title: "100 My Prince",
    director: "Lee Jong-jae",
    distributor: "tvN",
    leadActor: "Do Kyung-soo",
  },
];
ocument.addEventListener("DOMContentLoaded", async () => {
  kDramaData = await getKdramaData();
  console.log(kDramaData.title);

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

  console.log(currentlyAiring.length);
  currentlyAiringDramas(currentlyAiring);
});

function currentlyAiringDramas(currentlyAiring) {
  Object.entries(currentlyAiring).forEach((element) => {
    console.log(element);
    recentlyRel.innerHTML = `<p>hhhhhhhh</p>`;
  });
}
const contain = document.getElementsByClassName("")


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
      <p>Average Rating: ${kDramaData[i].imdbRating}</p>  
      <h3>Summary</h3>
      <p>${kDramaData[i].summary}</p>
      <input type="text" class="user" placeholder="Enter your name">
      <input type="text" class="comment" placeholder="Enter your comment">
      <button id="comment-1" class="submit">Post Comment</button><br>
      <h3>COMMENTS</h3>
      <P>${kDramaData[i].comments}</P>
    </div>
  </div>
`;
  }
}
});