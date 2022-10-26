
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.30.110:3333'
});

export { api };
