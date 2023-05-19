
import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector('ul.gallery');
function createNewGallery() {
    const galleryMarkup = galleryItems.map(({ preview, original, description }) => {
      return `
        <li class="gallery__item">
          <a class="gallery__link" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}" data-source="${original}" />
          </a>
        </li>
      `;
    }).join('');
  
    gallery.insertAdjacentHTML('beforeend', galleryMarkup);
  }
 

  createNewGallery();
   gallery.addEventListener('click', (event)=>{
      event.preventDefault();
    const modal = basicLightbox.create(`<img src="${gallery.querySelector('img').dataset.source}">`);
    modal.show();
    if (modal.visible() === true) {
      document.addEventListener('keydown', function(event) {
        if (event.key === "Escape") {
          modal.close();
        }
      });
     } else {
      return;
     }

  });


  

 
  
 


console.log(document.querySelectorAll('a.gallery__link'));
