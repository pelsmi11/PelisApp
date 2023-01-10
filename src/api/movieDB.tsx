import axios from 'axios';

const movieDB = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie',
  params: {
    api_key: '1cc4662158a7a1a32cac99cb0129660e',
    language: 'es-ES',
  },
});

export default movieDB;
