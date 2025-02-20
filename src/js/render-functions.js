import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const lightbox = new SimpleLightbox('.gallery a', {
        captionsData: 'alt', 
        captionDelay: 250 
    });

export function renderImages(images) {
    const gallery = document.querySelector(".gallery");
    gallery.innerHTML = "";

    const galleryMarkup = images.map(image => `
      <a class="gallery-link" href="${image.largeImageURL}">
        <img class="gallery-image" src="${image.webformatURL}" alt="${image.tags}"/>
  <div class="image-info">
      <div class="info-item">
        <p class="info-title">Likes</p>
        <p class="info-value">${image.likes}</p>
      </div>
      <div class="info-item">
        <p class="info-title">Views</p>
        <p class="info-value">${image.views}</p>
      </div>
      <div class="info-item">
        <p class="info-title">Comments</p>
        <p class="info-value">${image.comments}</p>
      </div>
      <div class="info-item">
        <p class="info-title">Downloads</p>
        <p class="info-value">${image.downloads}</p>
      </div>
    </div>
      </a>
    `).join("");

    gallery.innerHTML = galleryMarkup;

    lightbox.refresh(); 
}

export function clearGallery() {
    const gallery = document.querySelector('.gallery');
    if (gallery) {
        gallery.innerHTML = '';
    }
}

export function showNoResultsMessage() {
    iziToast.error({
        title: 'Oops!',
        message: "Sorry, there are no images matching your search query. Please try again!",
        position: 'topRight',
    });
}

export function showError(message) {
    iziToast.error({
        title: 'Error!',
        message: message,
        position: 'topRight',
    });
}

export function showLoader() {
    const loader = document.querySelector(".loader");
    if (loader) {
        loader.classList.remove("hidden");
    }
}

export function hideLoader() {
    const loader = document.querySelector(".loader");
    if (loader) {
        loader.classList.add("hidden");
    }
}



