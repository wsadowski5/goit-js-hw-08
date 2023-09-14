import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

// Add imports above this line
import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector(".gallery");

const markup = galleryItems
.map((galleryItem) => `
    <li>
        <a class ="gallery__item" href="${galleryItem.original}"> 
            <img class="gallery__image" src="${galleryItem.preview}" data-source="${galleryItem.original}" alt="${galleryItem.description}"> 
        </a> 
    </li>`)
.join("");

gallery.insertAdjacentHTML("beforeend", markup);

const lightbox = new SimpleLightbox('.gallery a',{
    captions : true,
    captionsType : 'attr',
    captionsData : 'alt',
    captionDelay : '250'
} )