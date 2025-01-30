import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router";

const fetchCountry = async (code) => {
  const response = await fetch(`https://restcountries.com/v3.1/alpha/${code}`);
  console.log("😱 API called - Country: " + code);
  if (!response.ok) {
    throw new Error("Something went wrong findind the country with code: " + code);
  }
  return response.json();
};

function CountrySpecific() {
  const { code } = useParams();
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const { data, error, isLoading } = useQuery({
    queryKey: ["country-" + code],
    queryFn: () => fetchCountry(code),
    staleTime: Infinity,
    cacheTime: Infinity,
  });

  if (isLoading) return <div>Loading country code '{code}'...</div>;
  if (error) return <div>Error: {error.message}</div>;

  //console.log('👁️', data)

  const country = data[0];

  //console.log("🧶", country);

  return (
    <div className="country-specific">
      <h1>{country?.name?.common}</h1>
      <div className="country-details" style={{ opacity: isImageLoaded ? '1' : '0', transition: 'opacity 0.5s ease-in-out'  }}>
      <img
        src={country?.flags?.svg}
        alt={country?.flags?.alt}
        onLoad={() => setIsImageLoaded(true)}
      />
        <p>
          <strong>Official Name:</strong> {country?.name?.official}
        </p>
        <p>
          <strong>Capital:</strong> {country?.capital?.join(", ")}
        </p>
        <p>
          <strong>Region:</strong> {country?.region}
        </p>
        <p>
          <strong>Subregion:</strong> {country?.subregion}
        </p>
        <p>
          <strong>Population:</strong> {country?.population?.toLocaleString()}
        </p>
        <p>
          <strong>Area:</strong> {country?.area?.toLocaleString()} km²
        </p>
        <p>
          <strong>Languages:</strong>{" "}
          {Object.values(country?.languages || {}).join(", ")}
        </p>
        <p>
          <strong>Currencies:</strong>{" "}
          {Object.values(country?.currencies || {})
            .map((currency) => `${currency.name} (${currency.symbol})`)
            .join(", ")}
        </p>
        <p>
          <strong>Timezones:</strong> {country?.timezones?.join(", ")}
        </p>
        <p>
          <strong>Flag:</strong> {country?.flag}
        </p>
        <p>
          <strong>Google Maps:</strong>{" "}
          <a
            href={country?.maps?.googleMaps}
            target="_blank"
            rel="noopener noreferrer"
          >
            {country?.maps?.googleMaps}
          </a>
        </p>
        <p>
          <strong>OpenStreetMap:</strong>{" "}
          <a
            href={country?.maps?.openStreetMaps}
            target="_blank"
            rel="noopener noreferrer"
          >
            {country?.maps?.openStreetMaps}
          </a>
        </p>
      </div>
    </div>
  );
}

export default CountrySpecific;
