import axios from 'axios';
import { API_BASE_URL } from 'react-native-dotenv';

export const initializeAxios = (): void => {
  axios.defaults.baseURL = API_BASE_URL;
  axios.defaults.headers.post['Content-Type'] = 'application/json';
  axios.defaults.headers.post['Accept'] = 'application/json';
};
