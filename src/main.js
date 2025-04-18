import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import { getImagesByQuery } from "./js/pixabay-api";
import { createGallery, clearGallery, showLoader, hideLoader, smoothScroll } from "./js/render-functions";

const form = document.querySelector(".form");
const searchInput = document.querySelector(".input");
const loadMore = document.querySelector(".load-more");

let page = 1;
let enteredInput = "";

form.addEventListener('submit', handleSubmit);
loadMore.addEventListener('click', onLoadMore)
loadMore.classList.replace("load-more", "load-more-hidden");

function handleSubmit(event) {
    event.preventDefault();
    enteredInput = searchInput.value.trim();
    page = 1;

    if (!enteredInput) {
        iziToast.warning({
            position: 'topRight',
            title: 'Warning',
            message: 'Please enter a search query',
        });
        searchInput.focus();
        return;
    }

    showLoader();
    clearGallery();
    loadMore.classList.replace("load-more", "load-more-hidden");

    getImagesByQuery(enteredInput, page)
        .then(data => {
            
            if (!data.hits || data.hits.length === 0) {
                iziToast.warning({
                    position: 'topRight',
                    title: 'Warning',
                    message: 'Sorry, no images found. Please try another query!',
                });
                return;
            }

            if (data.hits.length < data.totalHits) {
                loadMore.classList.replace("load-more-hidden", "load-more");
            } else {
                loadMore.classList.replace("load-more", "load-more-hidden");
            }
            createGallery(data.hits);

        })
        .catch(error => {
            iziToast.error({
                position: 'topRight',
                title: 'Error',
                message: 'Failed to fetch images. Please try again later.',
            });
            console.error('Error:', error);
        })
        .finally(() => {
            hideLoader();
            searchInput.value = "";
        });
}



