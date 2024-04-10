import React from 'react';
import EmployeeItem from '../EmployeeItem/EmployeeItem';

// Component for displaying a list of employees
function EmployeeList({ employees, fetchEmployees }) {
  // Function to delete an employee
  const deleteEmployee = async (id) => {
    try {
      // Make a DELETE request to remove the employee with the specified ID
      await fetch(`https://661470032fc47b4cf27c554f.mockapi.io/employees/${id}`, {
        method: 'DELETE',
      });
      
      // Fetch updated list of employees after deletion
      fetchEmployees();
    } catch (error) {
      console.error('Error deleting employee:', error);
    }
  };

  // Render the list of employees
  return (
    <div>
      <br></br>
      
      <br></br>
      
      <h3>ProFinish Renovations Employees</h3>
      <ul>
        {employees.map(employee => (
          // Render each employee as an EmployeeItem component with delete functionality
          <EmployeeItem key={employee.id} employee={employee} deleteEmployee={deleteEmployee} />
        ))}
      </ul>
    </div>
  );
}

export default EmployeeList;



















