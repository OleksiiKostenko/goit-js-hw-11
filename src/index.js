import { createMarkupImageList } from './markup';
import { getImage } from './api';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import './css/main.css';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const inputEl = document.querySelector('#search-form');
const imgEl = document.querySelector(".gallery")
const loadMore = document.querySelector(".load-more")

inputEl.addEventListener('submit', onSubmit);
loadMore.addEventListener('click', onLoadMore)
// imgEl.addEventListener('click', openBigImg);


function onSubmit(evt) {
  evt.preventDefault();

  const form = evt.currentTarget;
  const inputValue = form.elements.searchQuery.value;
  console.log(inputValue);
  getImage(inputValue);

}

// const gallery = new SimpleLightbox('.gallery a', {
//     captions: true,
//     captionDelay: 250,
//     captionSelector: 'img',
//     captionType: 'attr',
//   captionsData: 'alt',
// });
    
// function openBigImg(evt) {
  
//       gallery.on('show.simplelightbox', gallery.open(evt.target));
//     }


function onLoadMore(evt) {
  console.log('2')
}