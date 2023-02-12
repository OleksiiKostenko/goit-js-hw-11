import { createMarkupImageList } from './markup';
import { getImage } from './api';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import './css/main.css';

const inputEl = document.querySelector('#search-form');

inputEl.addEventListener('submit', onSubmit);

function onSubmit(evt) {
  evt.preventDefault();

  const form = evt.currentTarget;
  const inputValue = form.elements.searchQuery.value;
  console.log(inputValue);
  getImage(inputValue);
}
