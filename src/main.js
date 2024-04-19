import { getImages } from './js/pixabay-api';
import { renderImages, clearMarkup, gallery } from './js/render-functions';
import {
  showLoader,
  hideLoader,
  showMessage,
  showLoadMoreBtn,
  hideLoadMoreBtn,
  showLoadMoreMsg,
  loadButton,
  updateBtnStatus,
} from './js/modules/helpers';

const formEl = document.querySelector('.js-search-form');
const galleryEl = document.querySelector('.js-gallery');

formEl.addEventListener('submit', onSubmitBtn);
loadButton.addEventListener('click', onLoadMoreClick);

let page;
let userWord;
let maxPage;
const per_page = 15;

async function onSubmitBtn(e) {
  e.preventDefault();
  showLoader();
  clearMarkup();
  hideLoadMoreBtn;
  page = 1;

  const userValue = e.target.elements.data.value.trim().split(' ');
  userWord = userValue.filter(word => word).join('+');

  if (!userWord) {
    clearMarkup();
    showMessage('Error, empty field');
    hideLoader();
    return;
  }
  try {
    const result = await getImages(userWord, page);
    maxPage = Math.ceil(result.data.totalHits / per_page);

    if (result.data.hits.length === 0) {
      hideLoader();
      showMessage(
        'Sorry, there are no images matching your search query. Please try again!'
      );
    } else {
      renderImages(result.data.hits);
      showLoadMoreBtn();
    }
    hideLoader();

    if (result.data.totalHits <= per_page) {
      hideLoadMoreBtn();
    }
    updateBtnStatus(page, maxPage);
  } catch (err) {
    console.log(err);
    hideLoader();
  }

  e.target.reset();
}

async function onLoadMoreClick() {
  showLoader();
  page += 1;

  try {
    const res = await getImages(userWord, page);
    renderImages(res.data.hits);
    forScroll();

    updateBtnStatus(page, maxPage);

    hideLoader();
  } catch (err) {
    console.log(err);
    hideLoader();
  }
}
function forScroll() {
  const height = gallery.firstElementChild.getBoundingClientRect().height * 2;
  window.scrollBy({
    behavior: 'smooth',
    top: height,
  });
}
