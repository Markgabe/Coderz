import axios from 'axios';

axios.defaults.headers.common.Authorization = `Bearer: ${localStorage.getItem('accessToken')}`;

export default axios.create({
  baseURL: process.env.REACT_APP_SERVER_PATH,
  timeout: 4000,
});
