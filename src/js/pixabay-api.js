import axios from 'axios';
import { hideLoader, showLoader, showError, showNoResultsMessage } from './render-functions';

export function fetchImages(query) {
    showLoader();
    return axios.get("https://pixabay.com/api/", {
        params: {
            key: "48827585-ba4cf8d41bbd413a9ae07e3ba",
            q: query,
            image_type: "photo",
            orientation: "horizontal",
            safesearch: true,
        }
    })
        .then(response => {
            const data = response.data;
            return data.hits;
        })
        .catch(error => {
            console.error("Error fetching images:", error);
            showError("There was an error while fetching images. Please try again later.");
            return [];
        })
        .finally(() => {
            hideLoader();
        });
}



