import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './WarehouseDetail.css'; // Import your CSS file

const WarehouseDetail = ({ warehouses, updateWarehouse }) => {
  const { id } = useParams();
  const warehouse = warehouses.find((w) => w.id === parseInt(id));

  const [editMode, setEditMode] = useState(false);
  const [editedWarehouse, setEditedWarehouse] = useState(warehouse);

  const handleEditClick = () => {
    setEditMode(true);
  };

  const handleSaveClick = () => {
    updateWarehouse(editedWarehouse);
    setEditMode(false);
  };

  const handleCancelClick = () => {
    setEditedWarehouse(warehouse);
    setEditMode(false);
  };

  const handleFieldChange = (e) => {
    const { name, value } = e.target;
    setEditedWarehouse({ ...editedWarehouse, [name]: value });
  };

  return (
    <div className="warehouse-detail-container">
      <h1>Warehouse Details</h1>
      {editMode ? (
        <div className="edit-form">
          <div>
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={editedWarehouse.name}
              onChange={handleFieldChange}
            />
          </div>
          <div>
            <label>City:</label>
            <input
              type="text"
              name="city"
              value={editedWarehouse.city}
              onChange={handleFieldChange}
            />
          </div>
          <div>
            <label>Cluster:</label>
            <input
              type="text"
              name="cluster"
              value={editedWarehouse.cluster}
              onChange={handleFieldChange}
            />
          </div>
          <div>
            <label>Space Available:</label>
            <input
              type="number"
              name="space_available"
              value={editedWarehouse.space_available}
              onChange={handleFieldChange}
            />
          </div>
          <div>
            <label>Is Live:</label>
            <input
              type="checkbox"
              name="is_live"
              checked={editedWarehouse.is_live}
              onChange={handleFieldChange}
            />
          </div>
          <div className="button-group">
            <button onClick={handleSaveClick}>Save</button>
            <button onClick={handleCancelClick}>Cancel</button>
          </div>
        </div>
      ) : (
        <div className="warehouse-info">
          <div>
            <strong>Name:</strong> {warehouse.name}
          </div>
          <div>
            <strong>City:</strong> {warehouse.city}
          </div>
          <div>
            <strong>Cluster:</strong> {warehouse.cluster}
          </div>
          <div>
            <strong>Space Available:</strong> {warehouse.space_available}
          </div>
          <div>
            <strong>Is Live:</strong> {warehouse.is_live ? 'Yes' : 'No'}
          </div>
          <button onClick={handleEditClick}>Edit</button>
        </div>
      )}
    </div>
  );
};

export default WarehouseDetail;
