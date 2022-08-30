const localAPI = "http://localhost:3000/kmovies";
const localAPIpopular = "http://localhost:3000/popular";
let kDramaData = [];
let popular = [];

const getKdramaData = () => {
  return fetch(localAPI).then((response) => response.json());
};
const getPopular = () => {
  return fetch(localAPIpopular).then((response) => response.json());
};

document.addEventListener("DOMContentLoaded", async () => {
  kDramaData = await getKdramaData();
  console.log(kDramaData);

  popular = await getPopular();
  console.log(popular);
});
