import React, { useState, useEffect } from 'react';
import "../screens-css/CarsSearch.css"; 

const CarsSearch = () => {
  const [cars, setCars] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [makeSearchTerm, setMakeSearchTerm] = useState('');
  const [showMakeSearch, setShowMakeSearch] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCarIndex, setSelectedCarIndex] = useState(null);

  useEffect(() => {
    fetch("https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/all-vehicles-model/records?limit=35")
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
      return makeMatch;
    });
  };

  const filterCarsYear = (cars, yearSearchTerm) => {
    return cars.filter(car => {
      const yearMatch = car.year.toLowerCase().includes(yearSearchTerm.toLowerCase());
      return yearMatch;
    });
  };

  const handleCarClick = (index) => {
    setSelectedCarIndex(index);
  };

  return (
    <div className="CarsSearchcars-page">
      <div className="CarsSearchcontainer">
        <div className="CarsSearch-container">
          <input
            className="CarsSearchSearch-input"
            type="text"
            placeholder="Enter the desired brand"
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
          />
          <p className="textMoreFilter">*By clicking the button you can filter the year of manufacture of the brand you entered</p>
          <button className="CarsSearchButton" onClick={() => setShowMakeSearch(!showMakeSearch)}>
            Search by Year
          </button>
          {showMakeSearch && (
            <input
              className="CarsSearchSearch-input"
              type="text"
              placeholder="Enter the desired year"
              value={makeSearchTerm}
              onChange={e => setMakeSearchTerm(e.target.value)}
            />
          )}
        </div>
        {error && <p className="CarsSearcherror-message">Error: {error}</p>}
        {loading ? (
          <p className="CarsSearchloading-message">Loading...</p>
        ) : (
          <div className="CarsSearch-list">
            {showMakeSearch ? (
              filterCarsYear(cars, makeSearchTerm).map((car, index) => (
                <div key={index} className={`CarsSearch-item ${selectedCarIndex === index ? 'selected' : ''}`} onClick={() => handleCarClick(index)}>
                  <div className="CarsSearch-property">Brand Car: {car.make}</div>
                  <div className="CarsSearch-property">Year Car: {car.year}</div>
                  {selectedCarIndex === index && (
                    <div className="additional-details">
                      <div className="CarsSearch-property">Model Car: {car.model}</div>
                      <div className="CarsSearch-property">VClass Car: {car.vclass}</div>
                      <button className="close-button" onClick={(e) => {e.stopPropagation(); setSelectedCarIndex(null);}}>Close</button>
                    </div>
                  )}
                </div>
              ))
            ) : (
              filterCars(cars, searchTerm).map((car, index) => (
                <div key={index} className={`CarsSearch-item ${selectedCarIndex === index ? 'selected' : ''}`} onClick={() => handleCarClick(index)}>
                  <div className="CarsSearch-property">Brand Car: {car.make}</div>
                  {selectedCarIndex === index && (
                    <div className="additional-details">
                      <div className="CarsSearch-property">Model Car: {car.model}</div>
                      <div className="CarsSearch-property">VClass Car: {car.vclass}</div>
                      <button className="close-button" onClick={(e) => {e.stopPropagation(); setSelectedCarIndex(null);}}>Close</button>
                    </div>
                  )}
                </div>
              ))
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default CarsSearch;
