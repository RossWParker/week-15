import React from 'react';
import EmployeeItem from '../EmployeeItem/EmployeeItem';

function EmployeeList({ employees, fetchEmployees }) {
  const deleteEmployee = async (id) => {
    try {
      await fetch(`https://661470032fc47b4cf27c554f.mockapi.io/employees/${id}`, {
        method: 'DELETE',
      });
      fetchEmployees();
    } catch (error) {
      console.error('Error deleting employee:', error);
    }
  };

  return (
    <div>

      <br></br>
      
      <br></br>

      <h3>ProFinish Renovations Employees</h3>
      <ul>
        {employees.map(employee => (
          <EmployeeItem key={employee.id} employee={employee} deleteEmployee={deleteEmployee} />
        ))}
      </ul>
    </div>
  );
}

export default EmployeeList;


