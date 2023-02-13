import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

function createMarkupImageList({
  webformatURL,
  largeImageURL,
  tags,
  likes,
  views,
  comments,
  downloads,
}) {
  return `
  <div class="photo-card">
  <a href="${largeImageURL}"><img src="${webformatURL}" alt="${tags}" class="image" loading="lazy" /></a>
  <div class="info">
    <p class="info-item">
      <b>Likes:<span>${likes}</span></b>
    </p>
    <p class="info-item">
      <b>Views:<span>${views}</span></b>
    </p>
    <p class="info-item">
      <b>Comments:<span>${comments}</span></b>
    </p>
    <p class="info-item">
      <b>Downloads:<span>${downloads}</span></b>
    </p>
  </div>
</div>`;
}

function clearList() {
  document.querySelector('.gallery').innerHTML = '';
}

function updateGalleryList(markup) {
  document.querySelector('.gallery').insertAdjacentHTML('beforeend', markup);
  gallery.refresh();
}


const gallery = new SimpleLightbox('.photo-card a', {
  captions: true,
  captionDelay: 250,
  captionSelector: 'img',
  captionType: 'attr',
  captionsData: 'alt',
});

export { createMarkupImageList, updateGalleryList, clearList };
