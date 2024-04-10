import React, { useState } from 'react';

// Component for adding a new employee
function EmployeeForm({ fetchEmployees }) {
  // State variables to store employee information
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission

    try {
      // Make a POST request to add a new employee
      await fetch('https://661470032fc47b4cf27c554f.mockapi.io/Employees', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, phone }),
      });

      // Fetch updated list of employees after adding a new one
      fetchEmployees();

      // Reset input fields after successful submission
      setName('');
      setEmail('');
      setPhone('');
    } catch (error) {
      console.error('Error adding employee:', error);
    }
  };

  // Render the form for adding a new employee
  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Employee</h2>
      <div>
        <label>Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
      </div>
      <div>
        <label>Phone:</label>
        <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} />
      </div>
      <div>
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      </div>
      
      <button type="submit">Add Employee</button>
    </form>
  );
}

export default EmployeeForm;


