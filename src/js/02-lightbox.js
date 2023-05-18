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

  
  document.querySelectorAll('a.gallery__link').forEach(item => {
    item.addEventListener('click', event => {
      event.preventDefault();
    });
  });

  const modal = new SimpleLightbox('.gallery a', {
    captions: true,
    captionSelector: 'img',
    captionDelay: 250,
    captionPosition: 'bottom',
    captionsData:'alt'

  });
  modal.show();

  if (modal.visible() === true) {
    document.addEventListener('keydown', function(event) {
      if (event.key === "Escape") {
        modal.close();
      }
    });
  } else {
  }
  
  console.log(galleryItems);