import React from 'react';
import UserDataComponent from './UserDataComponent'; // Adjust the import path based on your project structure
import ClassBasedUserDataComponent from './ClassBasedUserDataComponent';

function App() {
  return (
    <div>
      <h1>Fetch User Data App</h1>
      {/* <UserDataComponent /> */}
      <ClassBasedUserDataComponent />
    </div>
  );
}

export default App;
