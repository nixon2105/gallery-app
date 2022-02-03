const url =
  'https://api.unsplash.com/search/photos?query=spring&client_id=SouHY7Uul-OxoMl3LL3c0NkxUtjIrKwf3tsGk1JaiVo';

const getImages = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
};

getImages(url);
