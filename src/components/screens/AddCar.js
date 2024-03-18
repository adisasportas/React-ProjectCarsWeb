import React, { useState } from 'react';
import "../screensCss/AddCar.css";

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
    alert('Car added successfully!'); // פסקתי את התוכן הזה להוסיף הודעת התראה
  };
  return (
    <div className="pic-container">
    <div className="container"> {/* עיצוב הדף מרכז את האלמנטים */}
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
    </div>
  );
};

export default AddCar;
