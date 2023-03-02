import { galleryItems } from './gallery-items.js';
// Change code below this line


const galleryArr = document.querySelector('.gallery');

const galleryEl = ({ preview, original, description }) => {
    
    return `<div class="gallery__item">
              <a class="gallery__link" href="${original}">
                 <img  src="${preview}" title="${description}" alt="${description}" data-original='${original}' class="gallery__image">
              </a>
            </div>`;
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

        const instance = basicLightbox.create(`
          <img src="${event.target.dataset.original}" width="800" height='600'>
         `)

         instance.show()
  }
