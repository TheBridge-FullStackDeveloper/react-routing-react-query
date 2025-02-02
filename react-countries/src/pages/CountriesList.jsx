import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import { fetchAllCountries } from '../api/countryAPI';

const CountriesList = () => {
  const { data: countries, error, isLoading } = useQuery({
    queryKey: ['countries'],
    queryFn: fetchAllCountries
  });

  if (isLoading) return <div>Loading countries...</div>;
  if (error) return <div>An error occurred: {error.message}</div>;

  return (
    <div>
      <h1>Countries</h1>
      {countries.map(country => (
        <div key={country.cca3}>
          <Link to={`/country/${country.cca3}`}> {}
            {country.name.common}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default CountriesList;
