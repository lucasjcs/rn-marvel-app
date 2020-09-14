import axios from 'axios';
import md5 from 'blueimp-md5';

const PUBLIC_KEY = '36a94c66b1256bcf9c2d5130efe236c9';
const PRIVATE_KEY = '527da52a50a989f73dca561263606358515ce06d';

const hash = md5(1 + PRIVATE_KEY + PUBLIC_KEY);

const api = axios.create({
  baseURL: 'http://gateway.marvel.com/v1/public',
  params: {
    apikey: PUBLIC_KEY,
    hash,
    ts: 1,
  },
});

export default api;
