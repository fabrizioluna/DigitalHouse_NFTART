import axios from 'axios';
const config = { baseUrl: 'http://localhost:3000/api' };

export const client = axios.create(config);
