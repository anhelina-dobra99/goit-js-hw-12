import axios from 'axios';
import { hideLoader, showLoader } from './render-functions';

export async function fetchImages(query, page = 1) {
    showLoader();
    try {
        const response = await axios.get("https://pixabay.com/api/", {
            params: {
                key: "48827585-ba4cf8d41bbd413a9ae07e3ba",
                q: query,
                image_type: "photo",
                orientation: "horizontal",
                safesearch: true,
                page: page,
                per_page: 40,
            }
        });

     return {
            hits: response.data.hits, 
            totalHits: response.data.totalHits 
        };
    } catch (error) {
        console.error("Error fetching images:", error);
        throw error;
    } finally {
        hideLoader();
    }
}



