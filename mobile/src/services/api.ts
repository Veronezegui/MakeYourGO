import axios from 'axios';

const api = axios.create({
  baseURL: 'https://1f38-177-190-95-93.sa.ngrok.io '
});

export { api };
