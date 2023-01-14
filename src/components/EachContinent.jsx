import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { FaArrowAltCircleRight, FaSearch } from 'react-icons/fa';
import Header from './shared/Header/Header';
import HomeScreen from './shared/HomeScreen/HomeScreen';
import { fetchRegionDetails } from '../redux/countries';

const EachContent = () => {
  let regionDetails = useSelector((state) => state.entities.countries);

  const { title } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRegionDetails(title));
  }, []);

  const [searchText, setYourFilterText] = useState('');
  regionDetails = regionDetails.filter((country) => country.name.common.toLowerCase()
    .includes(searchText));
  const handleChange = (e) => {
    setYourFilterText(e.target.value.toLowerCase());
  };

  return (
    <div>
      <Header title="Continent" page="/" />
      <HomeScreen title={title} count={regionDetails.length} units="Countries" />
      <div className="flex space-btn search-wrapper">
        <h2 className="">STAT BY CONTINENT</h2>
        <div className="search">
          <input name="query" value={searchText} onChange={handleChange} placeholder="Search Country" className="searchTerm" />
          <FaSearch className="searchButton" />
        </div>
      </div>
      <div>
        <ul className="grid-continent">
          { regionDetails.map((country) => (
            <Link to={`/country/${country.name.common}`} key={country.name.common} className="link">
              <li className="country-list flex space-btn">
                <div className="flex justify-center align-center">
                  <img src={country.flags.svg} className="flag" alt={country.flags.svg} />
                  <h3>{country.name.common}</h3>
                </div>
                <FaArrowAltCircleRight />
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default EachContent;
