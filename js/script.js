const url =
  'https://api.unsplash.com/search/photos?query=spring&client_id=SouHY7Uul-OxoMl3LL3c0NkxUtjIrKwf3tsGk1JaiVo';

const containerImages = document.querySelector('.gallery-container');

const createTemplate = (data) => {
  return `<img class="img-item" src="${data.urls.regular}" alt="logo" />`;
};

const getImages = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  const dataImages = data.results;
  // console.log(dataImages);
  showImages(dataImages);
};

getImages(url);

const showImages = (data) => {
  data.map((el) => {
    console.log(el.urls.regular);
    containerImages.innerHTML = createTemplate(el);
  });
};

// const img = document.createElement('img');
// img.classList.add('gallery-img')
// img.src = `полученный от API адрес изображения`;
// img.alt = `image`;
// galleryContainer.append(img);
