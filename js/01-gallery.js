import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);


const imagesList = galleryItems.map(img => 
 `<div class="gallery__item">
  <a class="gallery__link" href="${img.original}">
    <img
      class="gallery__image"
      src="${img.preview}"
      data-source="${img.original}"
      alt="${img.description}"
    />
  </a>
</div>`)
  .join("");

const gallery = document.querySelector(".gallery")

gallery.insertAdjacentHTML("afterbegin", imagesList)

gallery.addEventListener('click', zoomImg)

function zoomImg(e) {

 e.preventDefault();
  if (e.target.nodeName !== "IMG") {
    return;
  }


  
    const instance = basicLightbox.create(`
    <img src="${e.target.dataset.source}" >`, {
      onShow: (instance) => {
        gallery.addEventListener("keydown", EscapeListener);
      },

      onClose: (instance) => {
        gallery.removeEventListener("keydown", EscapeListener);
      },
    });

    instance.show();
   
  
  function EscapeListener(params) {
    document.addEventListener("keydown", e => {
  if (e.key === "Escape") {
      instance.close();
    }
});

}
  }




  
