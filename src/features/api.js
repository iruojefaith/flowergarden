
import axios from 'axios';

const API_URL = "https://api.pexels.com/v1/photos/2014422";
const API_KEY = 'gxOs8M6S9faRsDrBMwsPDuf8dT2JaRKULAGjOR4UfpYZ9CVcczu31HKm';

export const fetchProducts = (page) => {
  const url = `${API_URL}/products?page=${page}`;
  const headers = {
    Authorization: `Client-ID ${API_KEY}`
  };
  return axios.get(url, { headers })
    .then(response => response.data)
    .catch(error => {
      console.log(error);
      return [];
    });
};







