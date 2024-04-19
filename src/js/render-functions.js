import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

export const gallery = document.querySelector('.gallery');

export function renderImages(arr) {
  const markup = renderMarkup(arr);
  gallery.insertAdjacentHTML('beforeend', markup);
  lightbox.refresh();
}
function renderMarkup(arr) {
  return arr.map(createImgCard).join('');
}

function createImgCard(photoObj) {
  const {
    webformatURL,
    largeImageURL,
    previewWidth,
    previewHeight,
    views,
    likes,
    comments,
    downloads,
    tags,
  } = photoObj;

  return `<li class="gallery-list">
          <a class="link-gallery" href="${largeImageURL}">
            <img
            class="gallery-img"
            src="${webformatURL}"
            alt="${tags}"
            width="${previewWidth}"
            height="${previewHeight}" />
          </a>
          <ul class="list">
            <li class="gallery-li">
              <h3 class="gallery-item">Likes</h3>
              <p>${likes}</p>
            </li>
            <li class="gallery-li">
              <h3 class="gallery-item">Views</h3>
              <p>${views}</p>
            </li>
            <li class="gallery-li">
              <h3 class="gallery-item">Comments</h3>
              <p>${comments}</p>
            </li>
            <li class="gallery-li">
              <h3 class="gallery-item">Downloads</h3>
              <p>${downloads}</p>
            </li>
          </ul>
        </li>`;
}

export function clearMarkup() {
  gallery.innerHTML = '';
}
