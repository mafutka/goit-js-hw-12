import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import { getImagesByQuery } from "./js/pixabay-api";


const form = document.querySelector('.form');
const gallery = document.querySelector('.gallery');

form.addEventListener('submit', async event => {
  event.preventDefault();
  const query = event.target.elements['search-text'].value.trim();

  if (!query) return;

  try {
    const data = await getImagesByQuery(query, 1);
    gallery.innerHTML = createMarkup(data.hits);
  } catch (error) {
    console.log("Помилка запиту:", error);
  }
});

function createMarkup(images) {
  return images.map(({ webformatURL, tags }) => `
    <li>
      <img src="${webformatURL}" alt="${tags}" width="300"/>
    </li>
  `).join("");
}