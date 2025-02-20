import { fetchImages } from './js/pixabay-api.js';
import { renderImages, clearGallery, showNoResultsMessage, showError } from './js/render-functions.js';

import "./css/loader.css";

document.querySelector(".search-form").addEventListener("submit", event => {
    event.preventDefault();

    const searchInputElement = document.querySelector(".search-input");
    const searchInputValue = searchInputElement.value.trim();

    if (searchInputValue === "") {
        showError("Please enter a search query!");
        searchInputElement.value = "";
        return;
    }

    clearGallery();

    fetchImages(searchInputValue)
        .then(hits => {
            if (hits.length === 0) {
                showNoResultsMessage();
            } else {
                renderImages(hits);
            }
        })
        .finally(() => {
        searchInputElement.value = ""; 
    })
});
