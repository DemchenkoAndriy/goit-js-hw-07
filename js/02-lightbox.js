import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);

const imagesList = galleryItems.map(img => 
 `<a class="gallery__item" href="${img.original}">
  <img class="gallery__image" src="${img.preview}" alt="${img.description}" />
</a>`)
  .join("");

const gallery = document.querySelector(".gallery")

gallery.insertAdjacentHTML("afterbegin", imagesList)
    
gallery.addEventListener('click', zoomImg)

function zoomImg(e) {

 e.preventDefault();
  if (e.target.nodeName !== "IMG") {
    return;
  }



    let lightbox = new SimpleLightbox('.gallery a', {
        captions: true,
        captionsData: 'alt',
        captionDelay:250
    });
}