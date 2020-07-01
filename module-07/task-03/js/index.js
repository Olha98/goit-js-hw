'use strict'

const images = [{
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const create = () => {
  const perentElement = document.querySelector('#gallery');
  for (let image of images) {
    perentElement.insertAdjacentHTML('afterbegin', `<li class ="item"><img class ="item__img"></img</li>`)
    const imgElement = document.querySelector('.item__img');
    imgElement.setAttribute('alt', image.alt);
    imgElement.setAttribute('src', image.url);

  }
  console.log(perentElement);
}
create();
