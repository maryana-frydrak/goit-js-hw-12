import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { getImagesByQuery } from './js/pixabay-api.js';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
  hideLoadMoreButton,
  showLoadMoreButton,
} from './js/render-functions.js';

let query = '';
let page = 1;
const perPage = 15;

const form = document.querySelector('.form');
const loadMoreBtn = document.querySelector('.load-more');
const gallery = document.querySelector('.gallery');

form.addEventListener('submit', onSearch);
loadMoreBtn.addEventListener('click', onLoadMore);

const showError = message => {
  iziToast.error({
    message,
    background: '#ef4040',
    position: 'topRight',
    width: '432',
    height: '88',
  });
};

async function onSearch(e) {
  e.preventDefault();
  const query = e.currentTarget.elements.query.value.trim();
  if (!query) {
    iziToast.warning({ message: 'Please enter a search query!' });
    return;
  }

  page = 1;
  clearGallery();
  showLoader();
  hideLoadMoreButton();

  try {
    const data = await getImagesByQuery(query);
    const totalHits = data.totalHits;

    if (data.hits.length === 0) {
      showError(
        `Sorry, there are no images matching your search query. Please try again!`
      );
      return;
    }

    createGallery(data.hits);

    const totalPages = Math.ceil(totalHits / perPage);

    if (page >= totalPages) {
      hideLoadMoreButton();
      iziToast.info({
        message: 'We`re sorry, but you`ve reached the end of search results.',
      });
    } else {
      showLoadMoreButton();
    }
  } catch (error) {
    showError(`Something went wrong. Please try again later`);
  } finally {
    hideLoader();
    hideLoadMoreButton();
  }
}
