import galleryItems
from './galleryItems.js';

const perentElement = document.querySelector('.js-gallery')
const windowModal = document.querySelector('.js-lightbox')
const imgRef = document.querySelector('.lightbox__image')
const closeButton = document.querySelector('.lightbox__button')
const closeBox = document.querySelector('.lightbox__content')

const rightButton = document.querySelector('.btn__button_2')
const leftButton = document.querySelector('.btn__button_1')

const createGallery = () => {

  let indexElement = 0;
  for (let galleryItem of galleryItems) {
    indexElement += 1;
    perentElement.insertAdjacentHTML('beforeend', `<li class ="gallery__item"><a class ="gallery__link" href ="${galleryItem.original}">
    <img class ="gallery__image" src="${galleryItem.preview}" alt="${galleryItem.description}"
    data-source="${galleryItem.original}"data-index="${indexElement}"></a></img</li>`)
  }

}
createGallery();

perentElement.addEventListener('click', openModal);
perentElement.addEventListener('keydown', clickKey);
perentElement.addEventListener('click', clickKey);

function openModal(event) {

  windowModal.addEventListener('click', closeModal);
  document.addEventListener('keydown', closeModal);

  event.preventDefault();

  if (event.target.nodeName !== "IMG") {
    return
  }
  const imgRef = event.target;
  const imageAlt = imgRef.alt;
  const largeImageUrl = imgRef.dataset.source;

  setLeargeImg(largeImageUrl, imageAlt);
}


function setLeargeImg(url, newAlt) {
  imgRef.src = "";
  imgRef.alt = "";
  imgRef.src = url;
  imgRef.alt = newAlt;
  windowModal.classList.add('is-open');
};

function closeModal(e) {

  if (e.target === e.currentTarget || e.target === closeButton || e.target === closeBox || e.key === "Escape") {
    windowModal.classList.remove('is-open');
    windowModal.removeEventListener('click', closeModal);
    document.removeEventListener('keydown', closeModal);
  }

  clickKey(e)

};

function clickKey(e) {

  let currentImage = imgRef.getAttribute('src');
  let elemetIndex = galleryItems.findIndex(element => element.original === currentImage)
  let newElementIndex = 0;
  if (e.target === e.currentTarget || e.target === leftButton || e.key === "ArrowLeft") {
    newElementIndex = elemetIndex - 1;
    if (newElementIndex < 0) {
      newElementIndex = galleryItems.length - 1;
    }
    currentImage = imgRef.setAttribute('src', galleryItems[newElementIndex].original);
  }


  if (e.target === e.currentTarget || e.target === rightButton || e.key === "ArrowLeft") {
    newElementIndex = elemetIndex + 1;
    if (newElementIndex >= galleryItems.length) {
      newElementIndex = 0;
    }

    currentImage = imgRef.setAttribute('src', galleryItems[newElementIndex].original);
  }
};