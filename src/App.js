import React, { useState, useEffect } from 'react';
import EmployeeList from './Components/EmployeeList/EmployeeList';
import EmployeeForm from './Components/EmployeeForm/EmployeeForm';


function App() {
  const [employees, setEmployees] = useState([]); // State variable to store employee data

  // useEffect hook to fetch employees data when the component mounts
  useEffect(() => {
    fetchEmployees();
  }, []);

  // Function to fetch employees data from the mock API
  const fetchEmployees = async () => {
    try {
      const response = await fetch('https://661470032fc47b4cf27c554f.mockapi.io/Employees');
      const data = await response.json();

      console.log("fetch data:", data);
      setEmployees(data); // Update the state with fetched employees data
    } catch (error) {
      console.error('Error fetching employees:', error); // Log an error if fetching fails
    }
  };

  return (
    <div>
      <h1>Employee Management</h1>
      {/* Rendering the EmployeeForm component and passing fetchEmployees function as a prop */}

      <EmployeeForm fetchEmployees={fetchEmployees} />

      {/* Rendering the EmployeeList component and passing employees data and fetchEmployees function as props */}
      <EmployeeList employees={employees} fetchEmployees={fetchEmployees} />
    </div>
  );
}

export default App; // Exporting the App component as default



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




