import { galleryItems } from './gallery-items.js';
// Change code below this line
const ulEl = document.querySelector(".gallery");
console.log(ulEl)
function initGalery(items){
  let galleryElements =items.map(item => {
    let liEl =document.createElement('li');
    liEl.classList.add('gallery__item');
    let imgEl = document.createElement('img');
    imgEl.classList.add('gallery__image');
    imgEl.src = item.original;
    let linkEl = document.createElement('a');
    linkEl.classList.add('gallery__link');
   linkEl.textContent = item.description;
    liEl.appendChild(linkEl);
    ulEl.appendChild(liEl);
    return liEl;
});

 console.log(galleryElements);
} 

initGalery(galleryItems);

