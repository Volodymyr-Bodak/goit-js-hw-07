import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector('ul.gallery');
function createNewGallery() {
    const galleryMarkup = galleryItems.map(({ preview, original, description }) => {
      return `
        <li class="gallery__item">
          <a class="gallery__link" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}" />
          </a>
        </li>
      `;
    }).join('');
  
    gallery.insertAdjacentHTML('beforeend', galleryMarkup);
}
 
  
  createNewGallery();

  


  const modal = new SimpleLightbox('.gallery a', {
    captionDelay: 250,
    captionsData:'alt'

  });

  
