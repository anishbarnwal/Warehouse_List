import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './WarehouseList.css'; // Import your CSS file

const WarehouseList = ({ warehouses }) => {
  const [filter, setFilter] = useState({
    name: '',
    city: '',
    cluster: '',
    spaceAvailable: '',
  });

  const [filteredWarehouses, setFilteredWarehouses] = useState(warehouses);

  useEffect(() => {
    // Filter warehouses based on filter criteria
    const filtered = warehouses.filter((warehouse) => {
      return (
        warehouse.name.toLowerCase().includes(filter.name.toLowerCase()) &&
        warehouse.city.toLowerCase().includes(filter.city.toLowerCase()) &&
        warehouse.cluster.toLowerCase().includes(filter.cluster.toLowerCase()) &&
        (!filter.spaceAvailable ||
          warehouse.space_available >= parseInt(filter.spaceAvailable))
      );
    });
    setFilteredWarehouses(filtered);
  }, [filter, warehouses]);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilter({ ...filter, [name]: value });
  };

  return (
    <div className="warehouse-list-container">
      <h1>Warehouse List</h1>
      <div className="filters">
        <input
          type="text"
          placeholder="Search by Name"
          name="name"
          value={filter.name}
          onChange={handleFilterChange}
        />
        <input
          type="text"
          placeholder="Filter by City"
          name="city"
          value={filter.city}
          onChange={handleFilterChange}
        />
        <input
          type="text"
          placeholder="Filter by Cluster"
          name="cluster"
          value={filter.cluster}
          onChange={handleFilterChange}
        />
        <input
          type="number"
          placeholder="Space Available"
          name="spaceAvailable"
          value={filter.spaceAvailable}
          onChange={handleFilterChange}
        />
      </div>
      <table className="warehouse-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>City</th>
            <th>Cluster</th>
            <th>Space Available</th>
          </tr>
        </thead>
        <tbody>
          {filteredWarehouses.map((warehouse) => (
            <tr key={warehouse.id}>
              <td>
                {/* Create a Link to the warehouse details page */}
                <Link to={`/warehouse/${warehouse.id}`}>{warehouse.name}</Link>
              </td>
              <td>{warehouse.city}</td>
              <td>{warehouse.cluster}</td>
              <td>{warehouse.space_available}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default WarehouseList;
