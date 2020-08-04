import React from 'react';
import logo from './logo.svg';
import './App.css';

/*AWS Amplify*/
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
	<h1> React app with AWS's Amplify'</h1>
      </header>
      <AmplifySignOut />
    </div>
  );
}

//export default App;
export default withAuthenticator(App);
