import React from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const fetchCountries = async () => {
  const { data } = await axios.get('https://restcountries.com/v3.1/all');
  return data;
};

const Countries = () => {
  const { data, error, isLoading } = useQuery(['countries'], fetchCountries);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>An error occurred: {error.message}</div>;

  return (
    <ul>
      {data.map(country => (
        <li key={country.cca3}>{country.name.common}</li>
      ))}
    </ul>
  );
};

export default Countries;
