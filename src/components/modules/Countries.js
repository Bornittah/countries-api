const API_URL = 'https://restcountries.com/v3.1/all';

export const getCountries = async () => {
  const response = await fetch(`${API_URL}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
  const data = await response.json().then((data) => data).catch((err) => err);
  return data;
};

export const getRegionDetails = async (region) => {
  const response = await fetch(`https://restcountries.com/v3.1/region/${region}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
  const data = await response.json().then((data) => data).catch((err) => err);
  return data;
};
