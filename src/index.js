import './css/main.css';
import { createMarkupImageList, updateGalleryList, clearList } from './markup';
import ImageApi from './api.js';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Report } from 'notiflix/build/notiflix-report-aio';

const imageApi = new ImageApi();

const inputEl = document.querySelector('#search-form');
const loadMore = document.querySelector('.load-more');

inputEl.addEventListener('submit', onSubmit);
loadMore.addEventListener('click', fetcImage);

async function onSubmit(evt) {
  try {
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
      return loadMore.classList.add('hidden');
    }
    fetcImage().finally(
      () => inputEl.reset(),
      loadMore.classList.remove('hidden')
    );
  } catch (error) {
    Report.failure('Error', 'Something went wrong here!', 'Okay');
  }
}

async function fetcImage() {
  try {
    console.log(imageApi);
    imageApi
      .getImage()
      .then(({ hits, totalHits }) => {
        if (hits.length === 0) {
          Notify.failure(
            'Sorry, there are no images matching your search query. Please try again.'
          );
          loadMore.classList.add('hidden');
        } else {
          Notify.info(
            `Hooray! We found ${
              totalHits - imageApi.perPage * (imageApi.page - 2)
            } images.`
          );
          if (totalHits < imageApi.perPage * (imageApi.page - 1)) {
            Report.info(
              'Ooops!',
              "We're sorry, but you've reached the end of search results.",
              'Okay'
            );
            loadMore.classList.add('hidden');
          }
        }

        return hits.reduce(
          (markup, hits) => createMarkupImageList(hits) + markup,
          ''
        );
      })
      .then(updateGalleryList);
  } catch (error) {
    Report.failure('Error', 'Something went wrong here!', 'Okay');
  }
}
