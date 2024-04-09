import React, { useState } from 'react';
import './EmployeeItem.css';

function EmployeeItem({ employee, deleteEmployee }) {
  const { id, name: initialName, email: initialEmail } = employee;

  // State variables to manage the edit mode and updated name/email values
  const [name, setName] = useState(initialName);
  const [email, setEmail] = useState(initialEmail);
  const [isEditing, setIsEditing] = useState(false);

  const handleDelete = async () => {
    try {
      await fetch(`https://661470032fc47b4cf27c554f.mockapi.io/employees/${id}`, {
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
      await fetch(`https://661470032fc47b4cf27c554f.mockapi.io/employees/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email }),
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
      <div className="employee-details">
        {isEditing ? (
          <div>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
        ) : (
          <div className="name-email">
            <div>{name} - {email}</div>
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















// import React from 'react';

// // This component represents an individual employee item.

// function EmployeeItem({ employee, deleteEmployee }) {

//   // Destructure employee object to extract id, name, and email
//   const { id, name, email } = employee;

//   // Function to handle deletion of employee
//   const handleDelete = () => {
//     // Call deleteEmployee function with the id of the employee to delete
//     deleteEmployee(id);
//   };

//   // Function to handle update of employee
//   const handleUpdate = () => {
//     // Implement update functionality here
//     console.log("Update button clicked for employee:", employee);
//   };

//   // Render the employee details along with a delete button and update button
//   return (
//     <li style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
//       {/* Box for name */}
//       <div style={{ border: '1px solid #ccc', padding: '10px', marginRight: '10px' }}>
//         <div>{name}</div>
//       </div>
      
//       {/* Box for email */}
//       <div style={{ border: '1px solid #ccc', padding: '10px', marginRight: '10px' }}>
//         <div>{email}</div>
//       </div>

//       {/* Render the update and delete buttons */}
//       <div>
//         <button onClick={handleUpdate}>Update</button>
//         <button onClick={handleDelete}>Delete</button>
//       </div>
//     </li>
//   );
// }

// // Export the EmployeeItem component
// export default EmployeeItem;





// import React from 'react';

// // This component represents an individual employee item.

// function EmployeeItem({ employee, deleteEmployee }) {

//   // Destructure employee object to extract id, name, and email
//   const { id, name, email } = employee;

//   // Function to handle deletion of employee
//   const handleDelete = () => {

//     // Call deleteEmployee function with the id of the employee to delete
//     deleteEmployee(id);
//   };

//   // Render the employee details along with a delete button
//   return (
//     <li>
//       <div>{name}</div>
//       <div>{email}</div>
//       <button onClick={handleDelete}>Delete</button>

//       {/* update */}
//       <div>Update Button</div>
    
//     </li>
//   );
// }

// // Export the EmployeeItem component
// export default EmployeeItem;

