
import './App.css';
import React, { useState } from 'react';
import './fonts/SuperMario256.ttf';
import goomba from './images/goomba.png';

function App() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [showGreeting, setShowGreeting] = useState(false);

  const handleSaveClick = () => {
    setShowGreeting(true);
  };

  const handleEditClick = () => {
    setShowGreeting(false);
  };

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  return (
    <div className='App'>
      <h1 className='title'>Activity 4: User Input</h1>
      {showGreeting ? (
        <div>
          <h2 className='welcome'>Welcome, {firstName} {lastName}!</h2>
          <button onClick={handleEditClick}><img className='goomba' src={goomba} alt='goomba' />Edit</button>
        </div>
      ) : (
        <div className='inputs'>
          <div className='inputBox'>

            <label htmlFor="firstName">First Name:</label>
            <input
              type="text"
              id="firstName"
              value={firstName}
              onChange={handleFirstNameChange}
            />
          </div>
          <div className='inputBox'>

            <label htmlFor="lastName">Last Name:</label>
            <input
              type="text"
              id="lastName"
              value={lastName}
              onChange={handleLastNameChange}
            />
          </div>

          <button onClick={handleSaveClick}><img className='goomba' src={goomba} alt='goomba' />Save</button>
        </div>
      )}
    </div>
  );
}



export default App;
