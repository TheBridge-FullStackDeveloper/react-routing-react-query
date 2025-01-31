import React from 'react';
import { useQuery } from '@tanstack/react-query';
import CountryItem from './CountryItem';

const fetchCountries = async () => {
  const response = await fetch('https://restcountries.com/v3.1/all');
  console.log('🐉 API was called - FULL LIST')
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

function CountryList() {

    const { data, error, isLoading } = useQuery({
      queryKey: ['countries'],
      queryFn: fetchCountries, 
      staleTime: Infinity,
      cacheTime: Infinity,
    });
  
    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;
  
    return (
      <>
        <div className="country-items">
          {data.map((country) => (
            <CountryItem key={country.cca3} country={country} />
          ))}
        </div>
      </>
    );
  }

export default CountryList;