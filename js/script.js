const url =
  'https://api.unsplash.com/search/photos?query=summer&client_id=SouHY7Uul-OxoMl3LL3c0NkxUtjIrKwf3tsGk1JaiVo';

const containerImages = document.querySelector('.gallery-container');

const createTemplate = (data) => {
  return `<img class="img-item" src="${data.urls.regular}" alt="logo" />`;
};

const getImages = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  const dataImages = data.results;
  showImages(dataImages);
};

getImages(url);

const showImages = (data) => {
  data.slice(0, 8).map((el) => {
    console.log(el.urls.regular);
    containerImages.innerHTML += createTemplate(el);
  });
};
