import { galleryItems } from './gallery-items.js';
// // Change code below this line

const galleryArr = document.querySelector('.gallery');

const galleryEl = ({ preview, original, description }) => {
    
    return `<li>
              <a class="gallery__item" href="${original}">
                 <img  src="${preview}" title="${description}" alt="${description}" data-original='${original}' class="gallery__image">
              </a>
            </li>`;
  };

  const galleryList = galleryItems
  .map(galleryEl)
  .join('');

//   
  
  galleryArr.insertAdjacentHTML("beforeend", galleryList)

  galleryArr.addEventListener('click', selectedGalleryEl);

  function selectedGalleryEl(event)  {
    event.preventDefault();
    if (event.target.nodeName !== 'IMG') {
     return
    } 
    const lightbox = new SimpleLightbox('.gallery a', {captionData: 'alt', captionPosition: 'bottom', captionDelay: 250});
}

