import React, { useState, useEffect } from 'react';
import "../screens-css/CarsSearch.css"; 

const CarsSearch = () => {
  const [cars, setCars] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/all-vehicles-model/records?limit=15")
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
  
        setCars(data.results); 
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setError('Error fetching data');
        setLoading(false);
      });
  }, []);

  const filterCars = (cars, searchTerm) => {
    return cars.filter(car => {
      const makeMatch = car.make.toLowerCase().includes(searchTerm.toLowerCase());
      const modelMatch = car.model.toLowerCase().includes(searchTerm.toLowerCase());
      const yearMatch = car.year.toString().toLowerCase().includes(searchTerm.toLowerCase());
      const vclassMatch = car.vclass && car.vclass.toLowerCase().includes(searchTerm.toLowerCase()); // Added check for existence of car.vclass
      return makeMatch || modelMatch || yearMatch || vclassMatch;
    });
  };

  return (
    <div className="CarsSearchcars-page">
      <div className="CarsSearchcontainer">
        <div className="CarsSearch-container">
          <input
            className="search-input"
            type="text"
            placeholder="Search by Brand, Model, Year, or Class:"
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
          />
        </div>
        {error && <p className="CarsSearcherror-message">Error: {error}</p>}
        {loading ? (
          <p className="CarsSearchloading-message">Loading...</p>
        ) : (
          <div className="CarsSearch-list">
            {filterCars(cars, searchTerm).map((car, index) => (
              <div key={index} className="CarsSearch-item">
                <div className="CarsSearch-property">Brand Car: {car.make}</div>
                <div className="CarsSearch-property">Model Car: {car.model}</div>
                <div className="CarsSearch-property">Year Car: {car.year}</div>
                <div className="CarsSearch-property">Class Car: {car.vclass}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CarsSearch;
