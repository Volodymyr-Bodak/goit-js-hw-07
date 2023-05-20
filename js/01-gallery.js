
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
      if (event.target.nodeName === 'IMG') {
    const modal = basicLightbox.create(`<img src="${event.target.dataset.source}">`,{
      onShow: () => {
    
        document.addEventListener('keydown', EscapeKeyPress);
      },
      onClose: () => {
        
        document.removeEventListener('keydown', EscapeKeyPress);
      }
    });
      
    modal.show();
    
    function EscapeKeyPress (event){
      if (event.key === "Escape") {
       modal.close();
      }
      
      else {
      return;
     }
    }

      }});

  

 
  
 
 
  
