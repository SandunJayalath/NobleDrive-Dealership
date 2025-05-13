import React, { useState } from 'react';
import SignIn from '../components/SignIn';
import SignUp from '../components/SignUp';
import Dashboard from './components/Dashboard';

function App() {
  const [username, setUsername] = useState(localStorage.getItem('access') ? "User" : null);

  const handleLogout = () => {
    localStorage.removeItem('access');
    setUsername(null);
  };

  return (
    <div>
      {!username ? (
        <>
          <SignIn onLogin={setUsername} />
          <SignUp />
        </>
      ) : (
        <Dashboard username={username} onLogout={handleLogout} />
      )}
    </div>
  );
}

export default App;