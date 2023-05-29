import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:1337/api/', // Sua URL base aqui
  timeout: 5000, // Tempo limite de 5 segundos para todas as solicitações
});

export default instance;