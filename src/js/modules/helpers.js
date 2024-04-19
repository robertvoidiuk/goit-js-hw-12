import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const loader = document.querySelector('.loader');
export const loadButton = document.querySelector('.load-btn');

export function showLoader() {
  loader.classList.remove('is-hide');
}
export function hideLoader() {
  loader.classList.add('is-hide');
}
export function showMessage(message) {
  const msgOptions = {
    message,
    progressBarColor: '#B51B1B',
    theme: 'dark',
    position: 'topRight',
    class: 'message',
    messageSize: '16px',
    messageLineHeight: '24px',
    messageColor: '#fff',
    backgroundColor: '#EF4040',
  };
  iziToast.show(msgOptions);
}
//==================================================

export function showLoadMoreBtn() {
  loadButton.classList.remove('is-hide');
}
export function hideLoadMoreBtn() {
  loadButton.classList.add('is-hide');
}

export function updateBtnStatus(page, maxPage) {
  if (page >= maxPage) {
    hideLoadMoreBtn();
    showLoadMoreMsg(
      "We're sorry, but you've reached the end of search results."
    );
  } else {
    showLoadMoreBtn;
  }
}

export function showLoadMoreMsg(message) {
  const msgOptions = {
    message,
    messageSize: '16px',
    messageLineHeight: '24px',
    messageColor: '#fff',
    backgroundColor: '#EF4040',
    progressBarColor: '#B51B1B',
    theme: 'dark',
    position: 'topRight',
    class: 'message',
  };
  iziToast.show(msgOptions);
}
