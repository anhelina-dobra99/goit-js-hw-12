import { fetchImages } from './js/pixabay-api.js';
import { renderImages, clearGallery, showNoResultsMessage, showError, showLoader, hideLoader, smoothScroll } from './js/render-functions.js';

import "./css/loader.css";


const searchForm = document.querySelector(".search-form");
const searchInputElement = document.querySelector(".search-input");
const loadMoreButton = document.querySelector(".load-more");
const endMessage = document.querySelector(".end-message");

let currentQuery = "";
let currentPage = 1;
let totalHits = 0;

searchForm.addEventListener("submit", async event => {
    event.preventDefault();

    const searchInputValue = searchInputElement.value.trim();
    if (searchInputValue === "") {
        showError("Please enter a search query!");
        return;
    }
    if (searchInputValue !== currentQuery) {
        currentQuery = searchInputValue;
        currentPage = 1;
        totalHits = 0;
        clearGallery();
        loadMoreButton.classList.add("hidden");
        endMessage.classList.add("hidden"); 
    }

    try {
        const { hits, totalHits: total } = await fetchImages(currentQuery, 1);
        if (hits.length === 0) {
            showNoResultsMessage();
            loadMoreButton.classList.add("hidden");
        } else {
            totalHits = total;
            await renderImages(hits);
            loadMoreButton.classList.remove("hidden");
        }
    } catch (error) {
        showError("An unexpected error occurred. Please try again later.");
    } finally {
        searchInputElement.value = "";
    }
});

loadMoreButton.addEventListener("click", async () => {
    try {
        showLoader();
        currentPage++;
        const { hits, totalHits: total } = await fetchImages(currentQuery, currentPage);
        if (hits.length > 0) {
            await renderImages(hits);
            if (hits.length < 40 || currentPage * 40 >= totalHits) {
                loadMoreButton.classList.add("hidden");
                endMessage.classList.remove("hidden");
            } else {
                loadMoreButton.classList.remove("hidden");
                endMessage.classList.add("hidden");
            }

            smoothScroll();
        }
    } catch (error) {
        showError("An unexpected error occurred. Please try again later.");
    } finally {
        hideLoader();
    }
});
