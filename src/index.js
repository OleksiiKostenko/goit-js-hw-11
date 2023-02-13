import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import './css/main.css';
import { createMarkupImageList, updateGalleryList, clearList } from './markup';
import ImageApi from './api.js';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const imageApi = new ImageApi();

const inputEl = document.querySelector('#search-form');
const imgEl = document.querySelector('.gallery');
const loadMore = document.querySelector('.load-more');

inputEl.addEventListener('submit', onSubmit);
loadMore.addEventListener('click', fetcImage);

async function onSubmit(evt) {
  evt.preventDefault();
  console.log(imageApi);

  const form = evt.currentTarget;
  imageApi.searchQuery = form.elements.searchQuery.value.trim();
  console.log(imageApi.searchQuery);
  clearList();

  imageApi.resetPage();
  if (!imageApi.searchQuery) {
    Notify.failure(
      'Sorry, there are no images matching your search query. Please try again.'
    );
    return;
  }
  fetcImage().finally(() => inputEl.reset());
}

async function fetcImage() {
  console.log(imageApi);
  onLoadMoreBtn();

  imageApi
    .getImage()
    .then(({ hits }) => {
      return hits.reduce(
        (markup, hits) => createMarkupImageList(hits) + markup,
        ''
      );
    })
    .then(updateGalleryList)
    .catch(onError);
}

imgEl.addEventListener('click', event => {
  event.preventDefault();
});

const gallery = new SimpleLightbox('.gallery a', {
  captions: true,
  captionDelay: 250,
  captionSelector: 'img',
  captionType: 'attr',
  captionsData: 'alt',
});

function onError() {
  Notify.failure(
    'Sorry, there are no images matching your search query. Please try again.'
  );
}

function onLoadMoreBtn() {
  loadMore.classList.remove('hidden');
}
