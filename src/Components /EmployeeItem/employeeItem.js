import React from 'react';

function EmployeeItem({ employee, deleteEmployee }) {
  const { id, name, email } = employee;

  const handleDelete = () => {
    deleteEmployee(id);
  };

  return (
    <li>
      <div>{name}</div>
      <div>{email}</div>
      <button onClick={handleDelete}>Delete</button>
    </li>
  );
}

export default EmployeeItem;
