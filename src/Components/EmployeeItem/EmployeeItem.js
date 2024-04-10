import React, { useState } from 'react';
import './EmployeeItem.css';

function EmployeeItem({ employee, deleteEmployee }) {
  const { id, name: initialName, email: initialEmail, phone: initialPhone } = employee;

  // State variables to manage the edit mode and updated name/email/phone values
  const [name, setName] = useState(initialName);
  const [email, setEmail] = useState(initialEmail);
  const [phone, setPhone] = useState(initialPhone);
  const [isEditing, setIsEditing] = useState(false);

  const handleDelete = async () => {
    try {
      await fetch(`https://661470032fc47b4cf27c554f.mockapi.io/Employees/${id}`, {
        method: 'DELETE',
      });
      deleteEmployee(id); // Update the state after successful deletion
      console.log(`Employee with ID ${id} deleted successfully.`);
    } catch (error) {
      console.error('Error deleting employee:', error);
    }
  };

  const handleUpdate = async () => {
    try {
      await fetch(`https://661470032fc47b4cf27c554f.mockapi.io/Employees/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, phone }),
      });
      setIsEditing(false);
    } catch (error) {
      console.error('Error updating employee:', error);
    }
  };
  
  const handleEdit = () => {
    // Enter edit mode
    setIsEditing(true);
  };

  return (
    <li className="employee-item">
      <div className="employee-spacer"></div>
      <div className="employee-details">
        {isEditing ? (
          <div>
    
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} />
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
        ) : (
          <div className="name-email">
            <div>{name} - {phone} - {email}</div>
          </div>
        )}
      </div>

      <div className="buttons-container">
        {isEditing ? (
          <div>
            <button className="update-button" onClick={handleUpdate}>Update</button>
            <button className="delete-button" onClick={handleDelete}>Delete</button>
          </div>
        ) : (
          <button className="edit-button" onClick={handleEdit}>Edit</button>
        )}
      </div>
    </li>
  );
}

export default EmployeeItem;








