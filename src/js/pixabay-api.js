import axios from 'axios';

export async function getImagesByQuery(query, page) {
  const API_KEY = '54988394-76eeb0dc25d7c96559704c852';
  const BASE_URL = 'https://pixabay.com/api/';

  try {
    const res = await axios.get(BASE_URL, {
      params: {
        key: API_KEY,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        page: page,
        per_page: 15,
      },
    });

    return res.data;
  } catch (error) {
    throw new Error('Помилка завантажених даних', { cause: error });
  }
}
