import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://personal-portfolio-api.onrender.com/',
  headers: {
    'Content-Type': 'application/json',
  }
})