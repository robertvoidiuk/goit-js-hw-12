import axios from 'axios';

export async function getImages(userValue, userPage) {
  const url = 'https://pixabay.com/api/';
  const params = {
    key: '42820907-70ae148b9f4c1259f26bcae54',
    q: userValue,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    page: userPage,
    per_page: 15,
  };

  return await axios.get(url, { params });
}
