import './css/main.css';
import { createMarkupImageList, updateGalleryList, clearList } from './markup';
import ImageApi from './api.js';
import { Notify } from 'notiflix/build/notiflix-notify-aio';



const imageApi = new ImageApi();




const inputEl = document.querySelector('#search-form');
const loadMore = document.querySelector('.load-more');
const divEl = document.querySelector('.gallery');



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
    return loadMore.classList.add('hidden');
  } 
  fetcImage().finally(() => inputEl.reset() + loadMore.classList.remove('hidden'));
}

async function fetcImage() {
  console.log(imageApi);

  imageApi
    .getImage()
    .then(({ hits, totalHits }) => {
      console.log(hits.length)
      
      if (hits.length === 0) {
          Notify.failure(
          'Sorry, there are no images matching your search query. Please try again.'
        ); loadMore.classList.add('hidden');
      } else {
        Notify.info(`Hooray! We found ${totalHits} images.`);
      };
      
      return hits.reduce(
        (markup, hits) => createMarkupImageList(hits) + markup,
        ''
      );

    })
    .then(updateGalleryList)
    .catch(console.log("Error"));
}









  

