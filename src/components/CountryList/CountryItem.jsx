import { NavLink } from "react-router";

function CountryItem({ country }) {
    return (
    <div className="country-item">
        <NavLink to={"query/"+country.cca3}>
            <h1>{country.flag}</h1>
        </NavLink>
        <div className="country-info">
            <p>Name: {country.name.common}</p>
            <p>Capital: {country.capital}</p>
            <p>Population: {country.population}</p>
            <p className="info-button">+INFO</p>
        </div>
    </div>
    );
}
  

export default CountryItem