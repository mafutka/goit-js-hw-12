import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import { getImagesByQuery } from "./js/pixabay-api";
import { createGallery, clearGallery, showLoader, hideLoader, smoothScroll } from "./js/render-functions";

const form = document.querySelector(".form");
const searchInput = document.querySelector(".input");
const loadMore = document.querySelector(".load-more");

let page = 1;
let enteredInput = "";

form.addEventListener("submit", handleSubmit);
loadMore.addEventListener("click", onLoadMore);

function handleSubmit(event) {
  event.preventDefault();
  enteredInput = searchInput.value.trim();
  page = 1;

  if (!enteredInput) return;

  showLoader();
  clearGallery();
  loadMore.classList.add("load-more-hidden");

  getImagesByQuery(enteredInput, page)
    .then(data => {
      if (!data.hits || data.hits.length === 0) {
        iziToast.warning({ title: "No results", message: "Try another query" });
        return;
      }

      createGallery(data.hits);

      if (data.totalHits > page * 15) {
        loadMore.classList.remove("load-more-hidden");
      }
    })
    .catch(error => {
      iziToast.error({ title: "Error", message: error.message });
    })
    .finally(() => {
      hideLoader();
    });
}

function onLoadMore() {
  page++;
  loadMore.classList.add("load-more-hidden");
  showLoader();

  getImagesByQuery(enteredInput, page)
    .then(data => {
      createGallery(data.hits);
      smoothScroll();

      if (page * 15 >= data.totalHits) {
        iziToast.info({ message: "We're sorry, but you've reached the end of search results." });
      } else {
        loadMore.classList.remove("load-more-hidden");
      }
    })
    .catch(error => {
      iziToast.error({ title: "Error", message: error.message });
    })
    .finally(() => {
      hideLoader();
    });
}