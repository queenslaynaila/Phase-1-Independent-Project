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