import axios from 'axios';

export const initializeAxios = (): void => {
  axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';
  axios.defaults.headers.post['Content-Type'] = 'application/json';
  axios.defaults.headers.post['Accept'] = 'application/json';
};
