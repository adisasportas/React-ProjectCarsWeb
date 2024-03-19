import React, { useState, useEffect } from 'react';
import "../screens-css/Cars.css";

const Cars = () => {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [make, setMake] = useState('');
  const [model, setModel] = useState('');
  const [year, setYear] = useState('');
  const [vclass, setClass] = useState('');

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

  const handleSubmit = (e) => {
    e.preventDefault();
    const newCar = { make, model, year: parseInt(year, 10) || year ,vclass};
    setCars(currentCars => [...currentCars, newCar]);
    // Clear the input fields after adding a new car
    setMake('');
    setModel('');
    setYear('');
    setCars('');
    alert('Car added successfully!');
  };

  return (
    <div className="Cars">
      {error && <p className="error-message">{error}</p>}
      {loading ? (
        <p className="loading-message">Loading...</p>
      ) : (
        <>
          <div className="add-car-background pic-container">
            <div className="containerdivinput">
              <h1 >Add Car</h1>
              <form onSubmit={handleSubmit}>
                <div>
                  <label>Brand Car :</label>
                  <input type="text" className="addcar" value={make} onChange={(e) => setMake(e.target.value)} />
                </div>
                <div>
                  <label>Model Car :</label>
                  <input type="text" className="addcar" value={model} onChange={(e) => setModel(e.target.value)} />
                </div>
                <div>
                  <label>Year Car :</label>
                  <input type="text" className="addcar"  value={year} onChange={(e) => setYear(e.target.value)} />
                  </div>
                  <div>
                 <label>Class Car :</label>
                  <input type="text" className="addcar"  value={vclass} onChange={(e) => setClass(e.target.value)} />
                </div>
                <button type="submit" className="addcar" >Add Car</button>
              </form>
            </div>
          </div>
          <div className="car-list">
            {cars.map((car, index) => (
              <div key={index} className="car-item">
                <div className="car-property">Brand Car: {car.make}</div>
                <div className="car-property">Model Car: {car.model}</div>
                <div className="car-property">Year Car: {car.year}</div>
                <div className="car-property">Class Car: {car.vclass}</div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Cars;