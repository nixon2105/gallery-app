const url =
  'https://api.unsplash.com/search/photos?query=winter&client_id=SouHY7Uul-OxoMl3LL3c0NkxUtjIrKwf3tsGk1JaiVo';

const containerImages = document.querySelector('.gallery-container');
const input = document.querySelector('.search-request');
const clearSearch = document.querySelector('.clear-btn');
const btnSearch = document.querySelector('.search-btn');
const form = document.querySelector('.header-search');

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
  containerImages.innerHTML = '';
  data.map((el) => {
    containerImages.innerHTML += createTemplate(el);
  });
};

clearSearch.addEventListener('click', (e) => {
  e.preventDefault();
  input.value = '';
});

const searchImages = (e) => {
  e.preventDefault();

  const value = input.value.trim();

  if (value) {
    getImages(
      'https://api.unsplash.com/search/photos?query=' +
        value +
        '&client_id=SouHY7Uul-OxoMl3LL3c0NkxUtjIrKwf3tsGk1JaiVo'
    );
  }

  input.value = '';
};

btnSearch.addEventListener('click', searchImages);
form.addEventListener('submit', searchImages);
