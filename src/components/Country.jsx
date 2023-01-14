import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Header from './shared/Header/Header';
import HomeScreen from './shared/HomeScreen/HomeScreen';
import { fetchCountries } from '../redux/countries';

const Country = () => {
  const countries = useSelector((state) => state.entities.countries);
  const { name } = useParams();
  let title = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCountries());
  }, []);
  const country = countries.filter((country) => country.name.common === name);
  // eslint-disable-next-line prefer-destructuring
  title = country[0].continents[0];
  return (
    <div>
      <Header title="Country" page={`/continent/${title}`} />
      <HomeScreen title={name} />
      <h2 className="title">COUNTRY DETAILS</h2>
      <div>
        <table className="country-table">
          <thead>
            <th>Court of Arm</th>
            <th>Data</th>
          </thead>
          {country.map((data) => (
            <tbody key={data.name.common}>
              <tr>
                <td><img src={data.coatOfArms.svg} alt={data.coatOfArms.svg} className="coat-of-arm" /></td>
                <td>
                  <ul>
                    <li>
                      <strong>Country name: </strong>
                      {data.name.common}
                    </li>
                    <li>
                      <strong>Capital City: </strong>
                      {data.capital}
                    </li>
                    <li>
                      <strong>Sub Region: </strong>
                      {data.subregion}
                    </li>
                    <li>
                      <strong>Population: </strong>
                      {data.population}
                    </li>
                  </ul>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
};

export default Country;
