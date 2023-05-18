import { galleryItems } from './gallery-items.js';
// Change code below this line
const ulEl = document.querySelector(".gallery");
function createGalleryElements(items){
    let galleryElements =items.map(item => {
    let liEl =document.createElement('li');
    liEl.classList.add('gallery__item');

    let imgEl = document.createElement('img');
    imgEl.classList.add('gallery__image');
    imgEl.src = item.preview;
    imgEl.alt = item.description;
    imgEl.dataset.source = "large-image.jpg";

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
function openModal (href){ console.log (href);
    //let MODAL_TEMPLATE = ''
   
};
//function createGalleryElements(items){
//return ulEl;
//}
function onGalleryItemClick(event){
    let clickeditemEl = event.target.closest('.gallery__item');
    if(!clickeditemEl){
        return;
    };
    //clickeditemEl.classlist.add('is-active');
    //let currentActiveCard = document.querySelector('.gallery__item.is-active');
    //if(currentActiveCard){
     //   currentActiveCard.classList.remove('is-active');  
    //};
    let {href} = clickeditemEl.dataset;
    openModal(href);console.log(clickeditemEl)
};
function bindEvents(ulEl){
    ulEl.addEventListener('click',onGalleryItemClick);
};
function initGallery(items){
  let ulEl = createGalleryElements(items);
  bindEvents(ulEl); 
}
initGallery(galleryItems);

