import { AuthenticatedApp } from 'authenticated-app';
import { useAuth } from 'context/auth_context';
import React from 'react';
import { UnAuthenticatedApp } from 'unAuthenticated-app';
import { LoginSreen } from 'views/login';
import { ProjectListScreen } from 'views/project-list';
import './App.css';

function App() {
  const { user } = useAuth()
  return (
    <div className="App">
      {
        user ? <AuthenticatedApp /> : <UnAuthenticatedApp/>
      }
    </div>
  );
}

export default App;
