import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { getImagesByQuery } from './js/pixabay-api.js';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from './js/render-functions.js';

const form = document.querySelector('.form');

form.addEventListener('submit', e => {
  e.preventDefault();
  const query = e.currentTarget.elements.query.value.trim();

  if (!query) return;

  clearGallery();
  showLoader();

  getImagesByQuery(query)
    .then(data => {
      if (data.hits.length === 0) {
        iziToast.error({
          message: `Sorry, there are no images matching your search query. Please try again!`,
          background: '#ef4040',
          position: 'topRight',
          width: '432',
          height: '88',
        });
      } else {
        createGallery(data.hits);
      }
    })
    .catch(error =>
      iziToast.error({
        message: `Sorry, there are no images matching your search query. Please try again!`,
        background: '#ef4040',
        position: 'topRight',
        width: '432',
        height: '88',
      })
    )
    .finally(() => hideLoader());
});
