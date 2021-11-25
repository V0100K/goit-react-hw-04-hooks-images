

import axios from 'axios';

//pixabay
function getServerResponse(q = '', page) {
  const sendParam = {
    key: '24259107-5370b13ebcd4de04825255a0d',
    q: '',
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
    per_page: 12,
    page: 1,
  };

  sendParam.q = q;
  sendParam.page = page;

  const response = axios.get('https://pixabay.com/api/', {
    params: sendParam,
  });

  return response.then(({ data }) => data);
}

export default getServerResponse;