import React, { useState, useEffect } from 'react';
import EmployeeList from './Components/EmployeeList/employeeList';
import EmployeeForm from './Components/EmployeeForm/employeeForm';

function App() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    try {
      const response = await fetch('https://661470032fc47b4cf27c554f.mockapi.io/employees');
      const data = await response.json();
      setEmployees(data);
    } catch (error) {
      console.error('Error fetching employees:', error);
    }
  };

  return (
    <div>
      <h1>Employee Management</h1>
      <EmployeeForm fetchEmployees={fetchEmployees} />
      <EmployeeList employees={employees} fetchEmployees={fetchEmployees} />
    </div>
  );
}

export default App;


// import React from 'react';
// import EmployeeList from './components/EmployeeList';

// function App() {
//   return (
//     <div>
//       <h1>Employee Management</h1>
//       <EmployeeList />
//     </div>
//   );
// }

// export default App;




