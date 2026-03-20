import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { getImagesByQuery } from './js/pixabay-api.js';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
  hideLoadMoreButton,
} from './js/render-functions.js';

const form = document.querySelector('.form');

const showError = message => {
  iziToast.error({
    message,
    background: '#ef4040',
    position: 'topRight',
    width: '432',
    height: '88',
  });
};

hideLoadMoreButton();

const onSearch = async e => {
  e.preventDefault();
  const query = e.currentTarget.elements.query.value.trim();
  page = 1;

  if (!query) return;

  clearGallery();
  showLoader();
  hideLoadMoreButton();

  try {
    const data = await getImagesByQuery(query);

    if (data.hits.length === 0) {
      showError(
        `Sorry, there are no images matching your search query. Please try again!`
      );
      return;
    }

    createGallery(data.hits);
  } catch (error) {
    showError(`Something went wrong. Please try again later`);
  } finally {
    hideLoader();
  }
};

form.addEventListener('submit', onSearch);
