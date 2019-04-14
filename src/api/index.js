import axios from 'axios';

const makeRequest = url => axios.get(url);

export { makeRequest };
