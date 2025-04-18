import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import { getImagesByQuery } from "./js/pixabay-api";
import { createGallery, clearGallery, showLoader, hideLoader, showLoadMoreButton, hideLoadMoreButton } from "./js/render-functions";

const form = document.querySelector('.form');
const gallery = document.querySelector('.gallery');

form.addEventListener('submit', async event => {
  event.preventDefault();
  const query = event.target.elements['search-text'].value.trim();

  if (!query) return;

  try {
    const data = await getImagesByQuery(query, 1);
  
  } catch (error) {
    console.log("Помилка запиту:", error);
  }
});

