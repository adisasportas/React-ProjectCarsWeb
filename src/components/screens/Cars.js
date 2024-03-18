import React, { useState, useEffect } from 'react';

const Cars = () => {
  const [cars, setCars] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/all-vehicles-model/records?limit=15")
      .then(response => response.json())
      .then(data => {
        console.log('Data from API:', data);
        setCars(data.results); // Set cars to data.results
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setError('Error fetching data');
        setLoading(false);
      });
  }, []);

  console.log('Cars:', cars); // Added logging

  const handleAddCar = () => {
    window.location.href = '/add-car'; // Navigate to the page for adding a new car
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search by Brend Car or Model Car or Year Car or Class  Car:"
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      />
      {error && <p>Error: {error}</p>}
      {loading ? (
        <p>Loading...</p>
      ) : (
        <React.Fragment>
          <ul>
            {cars.map((car, index) => (
              <li key={index}>Brend Car:   {car.make}, Model Car: {car.model} , Year Car:  {car.year},  Class  Car:  {car.vclass}</li>
            ))}
          </ul>
          <button onClick={handleAddCar}>Add Car</button>
        </React.Fragment>
      )}
    </div>
  );
};

export default Cars;