import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
const ulEl = document.querySelector(".gallery");
function createGalleryMarkUp(items){
   return items.map((item)=>
   `<li class="gallery__item">
   <a class="gallery__link" 
   href ="${item.original}">
   <img
   class="gallery__image" 
   src="${item.preview}"
   alt="${item.description}"/></a></li>`).join(" ");
}
const addGalleryMarkUp = createGalleryMarkUp(galleryItems);
ulEl.innerHTML = addGalleryMarkUp;