function createMarkupImageList({
      webformatURL,
      largeImageURL,
      tags,
      likes,
      views,
      comments,
      downloads
    }) {
  return `<div class="photo-card">
   <a href="${largeImageURL}"><img src="images/thumbs/thumb1.jpg" alt="" title=""/></a>
  <img src="${webformatURL}" alt="${tags}" loading="lazy" />
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
};

function updateGalleryList(markup) {
  document.querySelector('.gallery').innerHTML = markup;
}


export { createMarkupImageList , updateGalleryList };
