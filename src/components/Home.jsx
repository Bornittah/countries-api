import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Header from './shared/Header/Header';
import HomeScreen from './shared/HomeScreen/HomeScreen';
import Grid from './shared/Grid';
import { fetchCountries } from '../redux/countries';

const Home = () => {
  const [loading, setLoading] = useState(false);
  const countries = useSelector((state) => state.entities.countries);
  const ctrs = [];
  countries.map((data) => {
    ctrs.push(data.region);
    return ctrs;
  });

  const regions = [...new Set(ctrs)];
  const countCountries = (array, region) => array.filter((item) => item === region).length;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCountries());
    setLoading(true);
  }, []);

  return (
    <div>
      <Header title="The World" />
      <HomeScreen title="World" count={regions.length} units="Major Regions" />
      <h2 className="title">STAT BY REGIONS</h2>
      <div className="grid-container">
        {loading ? (
          regions.map((region) => (
            <Grid key={region} title={region} number={countCountries(ctrs, region)} />
          ))) : ('loading data...')}
      </div>
    </div>
  );
};

export default Home;
