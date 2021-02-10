import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://create-react-app-2edf7-default-rtdb.firebaseio.com/',
});

export default instance;
