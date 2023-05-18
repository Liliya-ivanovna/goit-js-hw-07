import { galleryItems } from './gallery-items.js';
// Change code below this line
const ulEl = document.querySelector(".gallery");
function createGalleryElement(items){
    let galleryElements =items.map(item => {
    let liEl =document.createElement('li');
    liEl.classList.add('gallery__item');

    let imgEl = document.createElement('img');
    imgEl.classList.add('gallery__image');
    imgEl.src = item.preview;
    imgEl.alt = item.description;
    imgEl.dataset.source = item.original;

    let linkEl = document.createElement('a');
    linkEl.classList.add('gallery__link');
    linkEl.href = item.original;
    linkEl.appendChild(imgEl);
    liEl.appendChild(linkEl);
    return liEl;
});
ulEl.append(...galleryElements);
return ulEl;
};
function onGalleryItemClick(event){
    if(!event.target.classList.contains('gallery__image')){
        return;
    } console.log('click')
        event.preventDefault();
};
function bindEvents(){
    ulEl.addEventListener('click',onGalleryItemClick);
    console.log('click')
};
function initGallery(items){
  let ulEl = createGalleryElement(items);
  bindEvents(ulEl); 
}
initGallery(galleryItems);

