import React, { useState } from 'react';

const AddCar = ({ onAddCar }) => {
  const [brend, setBrend] = useState('');
  const [model, setModel] = useState('');
  const [year, setYear] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newCar = { brend, model, year };
    onAddCar(newCar);
    setBrend('');
    setModel('');
    setYear('');
  };
  return (
    <div>
      <h2>Add Car</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Brand:</label>
          <input type="text" value={brend} onChange={(e) => setBrend(e.target.value)} />
        </div>
        <div>
          <label>Model:</label>
          <input type="text" value={model} onChange={(e) => setModel(e.target.value)} />
        </div>
        <div>
          <label>Year:</label>
          <input type="text" value={year} onChange={(e) => setYear(e.target.value)} />
        </div>
        <button type="submit">Add Car</button>
      </form>
    </div>
  );
};

export default AddCar;
