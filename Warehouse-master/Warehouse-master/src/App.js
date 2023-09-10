import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'; // Import the necessary components
import './App.css'; // Import your main CSS file
import WarehouseList from './WarehouseList'; // Import the WarehouseList component
import WarehouseDetail from './WarehouseDetail'; // Import the WarehouseDetail component
import data from './warehouse.json'; // Import your warehouse data

function App() {
  const [warehouses, setWarehouses] = useState(data);

  // Function to update warehouse information
  const updateWarehouse = (updatedWarehouse) => {
    const updatedWarehouses = warehouses.map((warehouse) =>
      warehouse.id === updatedWarehouse.id ? updatedWarehouse : warehouse
    );
    setWarehouses(updatedWarehouses);
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<WarehouseList warehouses={warehouses} />} />
          <Route
            path="/warehouse/:id"
            element={<WarehouseDetail warehouses={warehouses} updateWarehouse={updateWarehouse} />}
          />
          <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
