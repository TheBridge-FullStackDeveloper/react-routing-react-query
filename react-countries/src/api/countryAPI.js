import axios from 'axios';

const BASE_URL = 'https://restcountries.com/v3.1';

export const fetchAllCountries = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/all`);
    return response.data;
  } catch (error) {
    throw new Error('Error fetching countries: ' + error.message);
  }
};

export const fetchCountryByCode = async (code) => {
  try {
    const response = await axios.get(`${BASE_URL}/alpha/${code}`);
    return response.data[0];  
  } catch (error) {
    throw new Error('Error fetching country: ' + error.message);
  }
};

export const fetchCountriesByName = async (name) => {
  try {
    const response = await axios.get(`${BASE_URL}/name/${name}`);
    return response.data;
  } catch (error) {
    throw new Error('Error fetching country by name: ' + error.message);
  }
};
