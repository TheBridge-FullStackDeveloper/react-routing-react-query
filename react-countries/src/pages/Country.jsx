import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const fetchCountry = async (id) => {
  const { data } = await axios.get(`https://restcountries.com/v3.1/alpha/${id}`);
  return data[0];  
};

const Country = () => {
  const { id } = useParams();

  const { data: country, error, isLoading } = useQuery({
    queryKey: ['country', id],  
    queryFn: () => fetchCountry(id),  
    staleTime: 1000 * 60 * 10  
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>An error occurred: {error.message}</div>;

  return (
    <div>
      <h1>{country.name.common}</h1>
      <p>Capital: {country.capital}</p>
      <p>Population: {country.population.toLocaleString()}</p>
      <p>Region: {country.region}</p>
      <p>Subregion: {country.subregion}</p>
      <img src={country.flags.png} alt={`Flag of ${country.name.common}`} />
    </div>
  );
};

export default Country;
