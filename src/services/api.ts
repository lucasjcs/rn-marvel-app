/* eslint-disable import/no-unresolved */
import axios from 'axios';
import md5 from 'blueimp-md5';
import env from '@/../env';

const { PRIVATE_KEY, PUBLIC_KEY } = env;

const hash = md5(1 + PRIVATE_KEY + PUBLIC_KEY);

const api = axios.create({
  baseURL: 'https://gateway.marvel.com/v1/public',
  params: {
    apikey: PUBLIC_KEY,
    hash,
    ts: 1,
  },
});

export default api;
